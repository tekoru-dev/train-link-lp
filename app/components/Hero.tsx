import HeroSignupForm from "./HeroSignupForm";
import WorkoutPhoneMockup from "./WorkoutPhoneMockup";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        padding: "clamp(48px,8vw,104px) 20px clamp(64px,9vw,120px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 50% at 75% 40%,oklch(0.45 0.18 282 / 0.28),transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(70% 60% at 60% 40%,#000,transparent)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 60% 40%,#000,transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1160,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(48px,6vw,80px)",
        }}
      >
        <div style={{ flex: "1 1 440px", minWidth: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 12px 6px 8px",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 999,
              fontSize: 12,
              color: "#c9c9d4",
              marginBottom: 28,
            }}
          >
            <span
              className="tl-pulse"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "oklch(0.78 0.13 285)",
              }}
            />
            <span>iPhone向け・App Storeで近日公開</span>
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(34px,6vw,62px)",
              lineHeight: 1.28,
              fontWeight: 700,
              letterSpacing: "0.01em",
              textWrap: "balance",
            }}
          >
            <span style={{ display: "inline-block" }}>記録は、</span>
            <span style={{ display: "inline-block" }}>日本語で快適に。</span>
            <br />
            <span style={{ color: "oklch(0.78 0.13 285)" }}>
              <span style={{ display: "inline-block" }}>分析は、</span>
              <span style={{ display: "inline-block" }}>いつものAIで。</span>
            </span>
          </h1>
          <p
            style={{
              margin: "24px 0 0",
              maxWidth: 520,
              fontSize: "clamp(15px,1.6vw,17px)",
              lineHeight: 1.95,
              color: "#a9a9b8",
              textWrap: "pretty",
            }}
          >
            TRAINLINKは、iPhoneのための筋トレ記録アプリ。記録したデータはMCPでClaudeやChatGPTなどのAIアシスタントに直接つながり、分析もアドバイスも、使い慣れたAIにそのまま相談できます。
          </p>
          <HeroSignupForm />
        </div>

        <div
          style={{
            flex: "1 1 340px",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            position: "relative",
          }}
        >
          <WorkoutPhoneMockup />
          <div
            style={{
              position: "relative",
              background: "rgba(22,22,30,0.9)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "12px 14px",
              display: "flex",
              gap: 10,
              alignItems: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#34c759",
              }}
            />
            <div>
              <div
                className="tl-mono"
                style={{
                  fontSize: 10,
                  color: "#8e8e9c",
                  letterSpacing: "0.08em",
                }}
              >
                MCP CONNECTED
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>
                AIアシスタントと同期中
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
