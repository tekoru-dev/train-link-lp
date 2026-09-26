export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(10,10,14,0.78)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <a
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#f1f1f5",
          }}
        >
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: 8,
              background: "oklch(0.56 0.2 280)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                border: "2px solid #fff",
                borderRadius: 3,
                transform: "rotate(45deg)",
              }}
            />
          </span>
          <span
            className="tl-mono"
            style={{ fontWeight: 500, fontSize: 15, letterSpacing: "0.14em" }}
          >
            TRAINLINK
          </span>
        </a>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            fontSize: 13,
          }}
        >
          <a href="#features" style={{ color: "#a3a3b2" }}>
            特徴
          </a>
          <a href="#ai" style={{ color: "#a3a3b2" }}>
            AI連携
          </a>
          <a
            href="#waitlist"
            style={{
              background: "#f1f1f5",
              color: "#0a0a0e",
              padding: "8px 14px",
              borderRadius: 999,
              fontWeight: 600,
            }}
          >
            事前登録
          </a>
        </nav>
      </div>
    </header>
  );
}
