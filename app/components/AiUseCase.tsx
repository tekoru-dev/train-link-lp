import AiChatDemo from "./AiChatDemo";

const steps = [
  { n: "01", title: "iPhoneで記録する", desc: "いつも通りトレーニングを記録" },
  { n: "02", title: "MCPでAIとつなぐ", desc: "最初に一度設定するだけ" },
  { n: "03", title: "AIに話しかける", desc: "分析・メニュー相談・振り返りを自由に" },
];

export default function AiUseCase() {
  return (
    <section
      id="ai"
      style={{
        padding: "clamp(72px,10vw,128px) 20px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(50% 40% at 50% 60%,oklch(0.45 0.18 282 / 0.18),transparent 70%)",
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
          gap: "clamp(40px,6vw,72px)",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 340px", minWidth: 0 }}>
          <div
            className="tl-mono"
            style={{
              fontSize: 12,
              letterSpacing: "0.16em",
              color: "oklch(0.78 0.13 285)",
            }}
          >
            HOW IT WORKS
          </div>
          <h2
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(26px,4vw,40px)",
              lineHeight: 1.45,
              fontWeight: 700,
              textWrap: "balance",
            }}
          >
            話しかけるだけで、
            <br />
            トレーナーの視点に。
          </h2>
          <p
            style={{
              margin: "18px 0 0",
              fontSize: 15,
              lineHeight: 1.95,
              color: "#a3a3b2",
              textWrap: "pretty",
            }}
          >
            アプリとAIアシスタントを一度つなげば、あとはいつものチャットで質問するだけ。AIがあなたの記録を読み取り、伸びや課題を具体的な数字で答えます。
          </p>
          <ol
            style={{
              margin: "32px 0 0",
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {steps.map((s, i) => (
              <li
                key={s.n}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "16px 0",
                  borderBottom:
                    i < steps.length - 1
                      ? "1px solid rgba(255,255,255,0.07)"
                      : undefined,
                }}
              >
                <span
                  className="tl-mono"
                  style={{
                    fontSize: 12,
                    color: "oklch(0.78 0.13 285)",
                    paddingTop: 3,
                  }}
                >
                  {s.n}
                </span>
                <div>
                  <div style={{ fontWeight: 600 }}>{s.title}</div>
                  <div
                    style={{ fontSize: 13, color: "#8e8e9c", marginTop: 4 }}
                  >
                    {s.desc}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <AiChatDemo />
      </div>
    </section>
  );
}
