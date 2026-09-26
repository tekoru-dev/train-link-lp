import { Fragment } from "react";

const SET_ROWS: Array<{
  n: number;
  weight: string;
  reps: string;
  done: boolean;
}> = [
  { n: 1, weight: "60 kg", reps: "× 10", done: true },
  { n: 2, weight: "70 kg", reps: "× 8", done: true },
  { n: 3, weight: "75 kg", reps: "× 6", done: true },
  { n: 4, weight: "75 kg", reps: "× —", done: false },
];

export default function WorkoutPhoneMockup() {
  return (
    <div
      style={{
        position: "relative",
        width: 290,
        height: 600,
        borderRadius: 52,
        background: "#050507",
        padding: 11,
        boxShadow:
          "0 0 0 1.5px #34343c,0 0 0 5px #111116,0 40px 100px rgba(0,0,0,0.6),0 0 120px oklch(0.5 0.2 282 / 0.25)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 42,
          background: "#000",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 92,
            height: 27,
            borderRadius: 20,
            background: "#000",
            zIndex: 3,
            boxShadow: "0 0 0 1px #111",
          }}
        />
        <div
          style={{
            height: 46,
            flex: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px 26px 0 30px",
            fontSize: 13,
            fontWeight: 600,
            color: "#fff",
          }}
        >
          <span>9:41</span>
          <span style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <span
              style={{ display: "flex", gap: 1.5, alignItems: "flex-end" }}
            >
              <span
                style={{
                  width: 3,
                  height: 4,
                  background: "#fff",
                  borderRadius: 1,
                }}
              />
              <span
                style={{
                  width: 3,
                  height: 6,
                  background: "#fff",
                  borderRadius: 1,
                }}
              />
              <span
                style={{
                  width: 3,
                  height: 8,
                  background: "#fff",
                  borderRadius: 1,
                }}
              />
              <span
                style={{
                  width: 3,
                  height: 10,
                  background: "#fff",
                  borderRadius: 1,
                }}
              />
            </span>
            <span
              style={{
                width: 22,
                height: 11,
                border: "1px solid rgba(255,255,255,0.5)",
                borderRadius: 3.5,
                padding: 1,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "75%",
                  height: "100%",
                  background: "#fff",
                  borderRadius: 1.5,
                }}
              />
            </span>
          </span>
        </div>
        <div
          style={{
            padding: "4px 16px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 14,
            color: "oklch(0.76 0.14 285)",
          }}
        >
          <span>‹ 履歴</span>
          <span className="tl-mono" style={{ fontSize: 12, color: "#8e8e93" }}>
            ⏱ 42:18
          </span>
          <span style={{ fontWeight: 600 }}>完了</span>
        </div>
        <div style={{ padding: "8px 16px 0" }}>
          <div style={{ fontSize: 12, color: "#8e8e93" }}>9月26日(土)</div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.01em",
            }}
          >
            胸・三頭
          </div>
        </div>
        <div
          style={{
            margin: "12px 12px 0",
            background: "#1c1c1e",
            borderRadius: 14,
            padding: "12px 14px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>
              ベンチプレス
            </span>
            <span style={{ fontSize: 11, color: "oklch(0.76 0.14 285)" }}>
              前回 72.5kg×6
            </span>
          </div>
          <div
            className="tl-mono"
            style={{
              marginTop: 8,
              display: "grid",
              gridTemplateColumns: "24px 1fr 1fr 24px",
              rowGap: 7,
              fontSize: 12,
              color: "#d1d1d6",
              alignItems: "center",
            }}
          >
            {SET_ROWS.map((row) => (
              <Fragment key={row.n}>
                <span style={{ color: "#636366" }}>{row.n}</span>
                <span
                  style={
                    row.done
                      ? undefined
                      : {
                          background: "#2c2c2e",
                          borderRadius: 6,
                          padding: "3px 6px",
                          marginRight: 8,
                        }
                  }
                >
                  {row.weight}
                </span>
                <span
                  style={
                    row.done
                      ? undefined
                      : {
                          background: "#2c2c2e",
                          borderRadius: 6,
                          padding: "3px 6px",
                          marginRight: 8,
                          color: "#636366",
                        }
                  }
                >
                  {row.reps}
                </span>
                <span
                  style={
                    row.done
                      ? {
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: "oklch(0.56 0.2 280)",
                          color: "#fff",
                          fontSize: 10,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : {
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          border: "1.5px solid #48484a",
                        }
                  }
                >
                  {row.done ? "✓" : ""}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
        <div
          style={{
            margin: "10px 12px 0",
            background: "#1c1c1e",
            borderRadius: 14,
            padding: "12px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>
              インクラインDBプレス
            </div>
            <div style={{ fontSize: 11, color: "#8e8e93", marginTop: 2 }}>
              3セット · 22kg
            </div>
          </div>
          <span style={{ color: "#48484a", fontSize: 16 }}>›</span>
        </div>
        <div
          style={{
            margin: "10px 12px 0",
            background: "#1c1c1e",
            borderRadius: 14,
            padding: "12px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>
              ケーブルプレスダウン
            </div>
            <div style={{ fontSize: 11, color: "#8e8e93", marginTop: 2 }}>
              3セット · 25kg
            </div>
          </div>
          <span style={{ color: "#48484a", fontSize: 16 }}>›</span>
        </div>
        <div
          style={{
            margin: "12px 12px 0",
            height: 40,
            borderRadius: 12,
            background: "oklch(0.56 0.2 280 / 0.18)",
            color: "oklch(0.8 0.12 285)",
            fontSize: 14,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ＋ 種目を追加
        </div>
        <div
          style={{
            marginTop: "auto",
            height: 74,
            flex: "none",
            background: "rgba(28,28,30,0.92)",
            borderTop: "0.5px solid #38383a",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            paddingTop: 9,
            fontSize: 10,
            color: "#8e8e93",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              color: "oklch(0.76 0.14 285)",
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: 6,
                background: "oklch(0.76 0.14 285)",
              }}
            />
            記録
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: "2px solid #8e8e93",
              }}
            />
            履歴
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: 6,
                border: "2px solid #8e8e93",
              }}
            />
            種目
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: "2px dashed #8e8e93",
              }}
            />
            設定
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 7,
            left: "50%",
            transform: "translateX(-50%)",
            width: 108,
            height: 4,
            borderRadius: 3,
            background: "#fff",
          }}
        />
      </div>
    </div>
  );
}
