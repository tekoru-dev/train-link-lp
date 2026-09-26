export default function Problem() {
  return (
    <section
      style={{
        padding: "clamp(72px,10vw,128px) 20px",
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
          PROBLEM
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
          ちょうどいい記録アプリが、
          <br />
          なかなか見つからない。
        </h2>
        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                background: "#121218",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                padding: 28,
              }}
            >
              <div style={{ fontSize: 12, color: "#8e8e9c" }}>
                海外の記録アプリ
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 19,
                  fontWeight: 600,
                  lineHeight: 1.6,
                }}
              >
                日本語で種目を探しにくい
              </div>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#a3a3b2",
                }}
              >
                「ベンチ」と検索しても候補が出ない。英語名を思い出しながら入力するのは、セットの合間には面倒です。
              </p>
              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#0a0a0e",
                  borderRadius: 10,
                  padding: "10px 12px",
                  fontSize: 13,
                }}
              >
                <span style={{ color: "#636370" }}>🔍︎</span>
                <span>ベンチ</span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 12,
                    color: "#ff6b6b",
                  }}
                >
                  No results
                </span>
              </div>
            </div>
            <div
              style={{
                background: "#121218",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                padding: 28,
              }}
            >
              <div style={{ fontSize: 12, color: "#8e8e9c" }}>
                国内の記録アプリ
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 19,
                  fontWeight: 600,
                  lineHeight: 1.6,
                }}
              >
                AI分析がない、または高い
              </div>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#a3a3b2",
                }}
              >
                記録はしやすくても、分析機能は簡易的か、有料プラン限定。しかもアプリの中でしか使えません。
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#121218",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20,
              padding: 28,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: 12, color: "#8e8e9c" }}>
              TRAINLINKのポジション
            </div>
            <div
              style={{
                position: "relative",
                flex: 1,
                minHeight: 300,
                margin: "20px 0 8px 22px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 24,
                  width: 1,
                  background: "rgba(255,255,255,0.18)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 24,
                  height: 1,
                  background: "rgba(255,255,255,0.18)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 24,
                  width: 1,
                  background: "rgba(255,255,255,0.05)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "calc(50% - 12px)",
                  height: 1,
                  background: "rgba(255,255,255,0.05)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: -22,
                  top: 0,
                  writingMode: "vertical-rl",
                  fontSize: 11,
                  color: "#8e8e9c",
                }}
              >
                AI分析の自由度 →
              </div>
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  fontSize: 11,
                  color: "#8e8e9c",
                }}
              >
                日本語での使いやすさ →
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "14%",
                  top: "34%",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  color: "#c9c9d4",
                }}
              >
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#48484f",
                  }}
                />
                海外アプリ
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "56%",
                  top: "68%",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  color: "#c9c9d4",
                }}
              >
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#48484f",
                  }}
                />
                国内アプリ
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "66%",
                  top: "6%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "oklch(0.56 0.2 280)",
                    boxShadow:
                      "0 0 0 8px oklch(0.56 0.2 280 / 0.2),0 0 40px oklch(0.6 0.2 280 / 0.7)",
                  }}
                />
                <span
                  className="tl-mono"
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    color: "#fff",
                  }}
                >
                  TRAINLINK
                </span>
              </div>
            </div>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: 14,
                lineHeight: 1.9,
                color: "#a3a3b2",
              }}
            >
              日本語で快適に記録できて、分析は好きなAIに任せられる。その空白を埋めるために作っています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
