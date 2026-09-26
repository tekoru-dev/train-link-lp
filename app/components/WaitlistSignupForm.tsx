"use client";

import { useSignup } from "./signup-context";

export default function WaitlistSignupForm() {
  const { email, setEmail, msg, msgColor, done, doneEmail, submitting, submit } =
    useSignup();

  if (done) {
    return (
      <div
        className="tl-fade-in"
        style={{
          margin: "36px auto 0",
          maxWidth: 520,
          padding: 26,
          borderRadius: 20,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid oklch(0.7 0.16 285 / 0.4)",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            margin: "0 auto",
            borderRadius: "50%",
            background: "oklch(0.56 0.2 280)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
          }}
        >
          ✓
        </div>
        <div style={{ marginTop: 14, fontSize: 17, fontWeight: 600 }}>
          登録ありがとうございます
        </div>
        <div
          style={{
            marginTop: 6,
            fontSize: 13,
            color: "#a3a3b2",
            wordBreak: "break-all",
          }}
        >
          {doneEmail} 宛にリリース情報をお届けします。
        </div>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={submit}
        style={{
          margin: "36px auto 0",
          maxWidth: 520,
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          padding: 8,
          borderRadius: 20,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="メールアドレス"
          style={{
            flex: "1 1 220px",
            minWidth: 0,
            height: 52,
            padding: "0 16px",
            borderRadius: 14,
            border: 0,
            background: "transparent",
            color: "#f1f1f5",
            font: "inherit",
            fontSize: 15,
            outline: "none",
          }}
        />
        <button
          type="submit"
          className="tl-btn-primary"
          disabled={submitting}
          style={{
            flex: "1 0 auto",
            height: 52,
            padding: "0 26px",
            border: 0,
            borderRadius: 14,
            background: "oklch(0.56 0.2 280)",
            color: "#fff",
            font: "inherit",
            fontWeight: 600,
            fontSize: 15,
            cursor: submitting ? "default" : "pointer",
            opacity: submitting ? 0.7 : 1,
          }}
        >
          {submitting ? "送信中…" : "無料で事前登録"}
        </button>
      </form>
      <p
        style={{
          margin: "14px 0 0",
          fontSize: 12,
          color: msgColor,
          minHeight: 18,
        }}
      >
        {msg}
      </p>
    </>
  );
}
