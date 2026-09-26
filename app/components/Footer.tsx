export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 20px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            className="tl-mono"
            style={{ fontWeight: 500, fontSize: 14, letterSpacing: "0.14em" }}
          >
            TRAINLINK
          </div>
          <div style={{ marginTop: 8, fontSize: 12, color: "#8e8e9c" }}>
            日本語で記録して、いつものAIで分析する筋トレ記録アプリ
          </div>
        </div>
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 24px",
            fontSize: 13,
          }}
        >
          <a href="#" style={{ color: "#a3a3b2" }}>
            プライバシーポリシー
          </a>
          <a href="#" style={{ color: "#a3a3b2" }}>
            利用規約
          </a>
          <a href="#" style={{ color: "#a3a3b2" }}>
            お問い合わせ
          </a>
          <a href="#" style={{ color: "#a3a3b2" }}>
            X
          </a>
        </nav>
      </div>
      <div
        style={{
          maxWidth: 1160,
          margin: "32px auto 0",
          paddingTop: 20,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 24px",
          justifyContent: "space-between",
          fontSize: 11,
          lineHeight: 1.8,
          color: "#6e6e7c",
        }}
      >
        <span>© 2026 TRAINLINK</span>
        <span style={{ maxWidth: 640 }}>
          Apple、iPhone、App
          Store、Appleヘルスケアは米国その他の国で登録されたApple
          Inc.の商標です。Claude、ChatGPTは各社の商標です。
        </span>
      </div>
    </footer>
  );
}
