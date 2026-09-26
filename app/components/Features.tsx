const cardBase: React.CSSProperties = {
  background: "#15151c",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: 24,
  padding: 30,
  display: "flex",
  flexDirection: "column",
};

const iconWrap: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: 14,
  background: "oklch(0.56 0.2 280 / 0.16)",
  border: "1px solid oklch(0.7 0.16 285 / 0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding: "clamp(72px,10vw,128px) 20px",
        background: "#0e0e13",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          className="tl-mono"
          style={{
            fontSize: 12,
            letterSpacing: "0.16em",
            color: "oklch(0.78 0.13 285)",
          }}
        >
          FEATURES
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
          TRAINLINKの3つの約束
        </h2>
        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
            gap: 20,
          }}
        >
          <div style={cardBase}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  ...iconWrap,
                  fontSize: 21,
                  fontWeight: 700,
                  color: "oklch(0.82 0.11 285)",
                }}
              >
                あ
              </span>
              <span className="tl-mono" style={{ fontSize: 12, color: "#5a5a68" }}>
                01
              </span>
            </div>
            <h3
              style={{
                margin: "26px 0 0",
                fontSize: 20,
                lineHeight: 1.55,
                fontWeight: 700,
              }}
            >
              日本語ネイティブの
              <br />
              記録体験
            </h3>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: 14,
                lineHeight: 1.95,
                color: "#a3a3b2",
              }}
            >
              「べんち」「ベンチ」「ベンチプレス」どれでもヒット。ジムで通じる呼び方のまま、数タップで記録できます。
            </p>
            <div style={{ marginTop: "auto", paddingTop: 24 }}>
              <div
                style={{
                  background: "#000",
                  borderRadius: 14,
                  padding: 10,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    background: "#1c1c1e",
                    borderRadius: 10,
                    padding: "8px 10px",
                    fontSize: 13,
                    display: "flex",
                    gap: 8,
                    color: "#fff",
                  }}
                >
                  <span style={{ color: "#8e8e93" }}>🔍︎</span>
                  べんち
                  <span
                    className="tl-pulse"
                    style={{
                      width: 1.5,
                      height: 16,
                      background: "oklch(0.76 0.14 285)",
                    }}
                  />
                </div>
                <div style={{ marginTop: 6, fontSize: 13, color: "#e5e5ea" }}>
                  <div
                    style={{
                      padding: "9px 6px",
                      borderBottom: "0.5px solid #2c2c2e",
                    }}
                  >
                    ベンチプレス
                  </div>
                  <div
                    style={{
                      padding: "9px 6px",
                      borderBottom: "0.5px solid #2c2c2e",
                    }}
                  >
                    インクライン・ベンチプレス
                  </div>
                  <div style={{ padding: "9px 6px" }}>
                    ダンベル・ベンチプレス
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              ...cardBase,
              border: "1px solid oklch(0.7 0.16 285 / 0.35)",
              boxShadow: "0 0 60px oklch(0.5 0.2 282 / 0.14)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <span style={iconWrap}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="oklch(0.82 0.11 285)"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                >
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="18" cy="18" r="3" />
                  <path d="M8.7 10.6l6.6-3.3M8.7 13.4l6.6 3.3" />
                </svg>
              </span>
              <span className="tl-mono" style={{ fontSize: 12, color: "#5a5a68" }}>
                02
              </span>
            </div>
            <h3
              style={{
                margin: "26px 0 0",
                fontSize: 20,
                lineHeight: 1.55,
                fontWeight: 700,
              }}
            >
              いつものAIに、
              <br />
              そのまま渡せる
            </h3>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: 14,
                lineHeight: 1.95,
                color: "#a3a3b2",
              }}
            >
              MCP(Model Context Protocol)で、ClaudeやChatGPTなど普段使いのAIアシスタントに記録を直接連携。アプリ内に閉じた分析ではありません。
            </p>
            <div
              style={{
                marginTop: "auto",
                paddingTop: 24,
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  padding: "7px 12px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.06)",
                  color: "#d6d6e0",
                }}
              >
                Claude Desktop
              </span>
              <span
                style={{
                  fontSize: 12,
                  padding: "7px 12px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.06)",
                  color: "#d6d6e0",
                }}
              >
                ChatGPT
              </span>
              <span
                style={{
                  fontSize: 12,
                  padding: "7px 12px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.06)",
                  color: "#d6d6e0",
                }}
              >
                その他MCP対応AI
              </span>
            </div>
          </div>

          <div style={cardBase}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <span style={iconWrap}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="oklch(0.82 0.11 285)"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v11M7.5 7.5L12 3l4.5 4.5" />
                  <path d="M5 12v6a2 2 0 002 2h10a2 2 0 002-2v-6" />
                </svg>
              </span>
              <span className="tl-mono" style={{ fontSize: 12, color: "#5a5a68" }}>
                03
              </span>
            </div>
            <h3
              style={{
                margin: "26px 0 0",
                fontSize: 20,
                lineHeight: 1.55,
                fontWeight: 700,
              }}
            >
              データは、
              <br />
              ずっとあなたのもの
            </h3>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: 14,
                lineHeight: 1.95,
                color: "#a3a3b2",
              }}
            >
              エクスポートとバックアップを前提に設計。別のアプリに移るときも、記録をまるごと持ち出せます。
            </p>
            <div
              style={{
                marginTop: "auto",
                paddingTop: 24,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 13,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <span>CSV / JSON エクスポート</span>
                <span style={{ color: "oklch(0.78 0.13 285)" }}>✓</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <span>iCloud バックアップ</span>
                <span style={{ color: "oklch(0.78 0.13 285)" }}>✓</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <span>独自形式での囲い込みなし</span>
                <span style={{ color: "oklch(0.78 0.13 285)" }}>✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
