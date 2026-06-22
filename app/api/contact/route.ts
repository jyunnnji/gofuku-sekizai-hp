export const dynamic = "force-dynamic";

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

const categoryLabels: Record<string, string> = {
  cleaning: "墓石クリーニング",
  garden: "造園",
  estimate: "お見積もり",
  other: "その他",
};

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  category?: string;
  message?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendBrevoEmail(payload: Record<string, unknown>, apiKey: string) {
  const res = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Brevo API error (${res.status}): ${detail}`);
  }
  return res.json();
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME || "五福石材";
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

    if (!apiKey || !senderEmail || !recipientEmail) {
      console.error("[contact] 環境変数が未設定です", {
        hasApiKey: !!apiKey,
        hasSender: !!senderEmail,
        hasRecipient: !!recipientEmail,
      });
      return Response.json(
        { ok: false, error: "メール送信の設定が完了していません。" },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactPayload;
    const name = (body.name || "").trim();
    const phone = (body.phone || "").trim();
    const email = (body.email || "").trim();
    const category = (body.category || "").trim();
    const message = (body.message || "").trim();

    // サーバー側でも必須項目を再チェック（クライアント側バリデーションと対）
    if (!name || !email || !message || !isValidEmail(email)) {
      return Response.json(
        { ok: false, error: "入力内容に不備があります。" },
        { status: 400 }
      );
    }

    const categoryLabel = categoryLabels[category] || "未選択";
    const sender = { email: senderEmail, name: senderName };

    // ── 1. 会社宛の通知メール ──
    const adminRows = [
      ["お名前", name],
      ["電話番号", phone || "（未入力）"],
      ["メールアドレス", email],
      ["お問い合わせ種別", categoryLabel],
      ["お問い合わせ内容", message],
    ];

    const adminHtml = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #2c2c2c; line-height: 1.7;">
        <h2 style="color: #2f7d4e;">ホームページからお問い合わせがありました</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          ${adminRows
            .map(
              ([label, value]) => `
            <tr>
              <th style="text-align: left; vertical-align: top; padding: 10px 16px; background: #f0f8f4; border: 1px solid #e0e0e0; width: 160px;">${escapeHtml(
                label
              )}</th>
              <td style="padding: 10px 16px; border: 1px solid #e0e0e0; white-space: pre-wrap;">${escapeHtml(
                value
              )}</td>
            </tr>`
            )
            .join("")}
        </table>
      </div>`;

    const adminText = adminRows
      .map(([label, value]) => `${label}：${value}`)
      .join("\n");

    await sendBrevoEmail(
      {
        sender,
        to: [{ email: recipientEmail }],
        replyTo: { email, name },
        subject: `【お問い合わせ】${name} 様（${categoryLabel}）`,
        htmlContent: adminHtml,
        textContent: adminText,
      },
      apiKey
    );

    // ── 2. お客様への自動返信メール ──
    const customerHtml = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #2c2c2c; line-height: 1.8;">
        <p>${escapeHtml(name)} 様</p>
        <p>この度は五福石材へお問い合わせいただき、誠にありがとうございます。<br>
        以下の内容でお問い合わせを受け付けいたしました。</p>
        <p>内容を確認の上、担当者より折り返しご連絡いたしますので、<br>
        今しばらくお待ちくださいますようお願い申し上げます。</p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 24px 0;">
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          ${adminRows
            .map(
              ([label, value]) => `
            <tr>
              <th style="text-align: left; vertical-align: top; padding: 10px 16px; background: #f0f8f4; border: 1px solid #e0e0e0; width: 160px;">${escapeHtml(
                label
              )}</th>
              <td style="padding: 10px 16px; border: 1px solid #e0e0e0; white-space: pre-wrap;">${escapeHtml(
                value
              )}</td>
            </tr>`
            )
            .join("")}
        </table>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 24px 0;">
        <p style="font-size: 14px; color: #666;">
          五福石材<br>
          （携帯）090-9406-2085 ／（固定）093-614-6573<br>
          受付時間：9:00〜17:00（不定休）
        </p>
        <p style="font-size: 12px; color: #999;">
          ※本メールは送信専用です。ご返信いただいてもお答えできない場合がございます。<br>
          ※お心当たりがない場合は、お手数ですがメールを破棄してください。
        </p>
      </div>`;

    const customerText = [
      `${name} 様`,
      "",
      "この度は五福石材へお問い合わせいただき、誠にありがとうございます。",
      "以下の内容でお問い合わせを受け付けいたしました。",
      "内容を確認の上、担当者より折り返しご連絡いたします。",
      "",
      "------------------------------",
      adminText,
      "------------------------------",
      "",
      "五福石材",
      "（携帯）090-9406-2085 ／（固定）093-614-6573",
      "受付時間：9:00〜17:00（不定休）",
    ].join("\n");

    await sendBrevoEmail(
      {
        sender,
        to: [{ email, name }],
        subject: "【五福石材】お問い合わせを受け付けました",
        htmlContent: customerHtml,
        textContent: customerText,
      },
      apiKey
    );

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[contact] 送信失敗:", error);
    return Response.json(
      { ok: false, error: "メールの送信に失敗しました。" },
      { status: 500 }
    );
  }
}
