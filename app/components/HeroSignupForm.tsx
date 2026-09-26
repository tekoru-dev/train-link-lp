"use client";

import { useSignup } from "./signup-context";

export default function HeroSignupForm() {
  const { email, setEmail, msg, msgColor, submitting, submit } = useSignup();

  return (
    <>
      <form
        onSubmit={submit}
        style={{
          marginTop: 36,
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          maxWidth: 500,
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
          aria-label="メールアドレス"
          className="tl-email-input"
          style={{
            flex: "1 1 220px",
            minWidth: 0,
            height: 52,
            padding: "0 18px",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.04)",
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
            flex: "0 0 auto",
            height: 52,
            padding: "0 24px",
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
          {submitting ? "送信中…" : "事前登録する"}
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
