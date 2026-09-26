const SLEEP_BARS = [
  { h: 70, dim: false },
  { h: 85, dim: false },
  { h: 55, dim: true },
  { h: 90, dim: false },
  { h: 75, dim: false },
  { h: 50, dim: true },
  { h: 95, dim: false },
];

export default function HealthPhoneMockup() {
  return (
    <div
      style={{
        position: "relative",
        width: 270,
        height: 560,
        borderRadius: 50,
        background: "#050507",
        padding: 10,
        boxShadow:
          "0 0 0 1.5px #34343c,0 0 0 5px #111116,0 40px 100px rgba(0,0,0,0.6)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 41,
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
            width: 86,
            height: 25,
            borderRadius: 20,
            background: "#000",
            zIndex: 3,
          }}
        />
        <div
          style={{
            height: 44,
            flex: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px 24px 0 28px",
            fontSize: 12,
            fontWeight: 600,
            color: "#fff",
          }}
        >
          <span>9:41</span>
          <span
            style={{
              width: 21,
              height: 10,
              border: "1px solid rgba(255,255,255,0.5)",
              borderRadius: 3,
              padding: 1,
            }}
          >
            <span
              style={{
                display: "block",
                width: "75%",
                height: "100%",
                background: "#fff",
                borderRadius: 1,
              }}
            />
          </span>
        </div>
        <div style={{ padding: "10px 16px 0" }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#fff" }}>
            コンディション
          </div>
          <div style={{ fontSize: 12, color: "#8e8e93", marginTop: 2 }}>
            過去30日 · ヘルスケアと同期
          </div>
        </div>
        <div
          style={{
            margin: "14px 12px 0",
            background: "#1c1c1e",
            borderRadius: 14,
            padding: "12px 14px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
            }}
          >
            <span style={{ color: "#8e8e93" }}>体重</span>
            <span style={{ color: "#8e8e93" }}>−0.8kg</span>
          </div>
          <div
            className="tl-mono"
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#fff",
              marginTop: 2,
            }}
          >
            72.4
            <span
              style={{
                fontSize: 12,
                color: "#8e8e93",
                fontFamily: "var(--font-ibm-plex-sans-jp)",
              }}
            >
              {" "}
              kg
            </span>
          </div>
          <svg
            viewBox="0 0 200 40"
            style={{ width: "100%", height: 40, marginTop: 6 }}
            preserveAspectRatio="none"
          >
            <polyline
              points="0,12 25,14 50,10 75,18 100,17 125,22 150,24 175,23 200,28"
              fill="none"
              stroke="oklch(0.76 0.14 285)"
              strokeWidth={2}
            />
          </svg>
        </div>
        <div
          style={{
            margin: "10px 12px 0",
            background: "#1c1c1e",
            borderRadius: 14,
            padding: "12px 14px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
            }}
          >
            <span style={{ color: "#8e8e93" }}>睡眠(平均)</span>
            <span style={{ color: "#8e8e93" }}>7日</span>
          </div>
          <div
            className="tl-mono"
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#fff",
              marginTop: 2,
            }}
          >
            6
            <span
              style={{
                fontSize: 12,
                color: "#8e8e93",
                fontFamily: "var(--font-ibm-plex-sans-jp)",
              }}
            >
              時間
            </span>
            48
            <span
              style={{
                fontSize: 12,
                color: "#8e8e93",
                fontFamily: "var(--font-ibm-plex-sans-jp)",
              }}
            >
              分
            </span>
          </div>
          <div
            style={{
              marginTop: 8,
              height: 36,
              display: "grid",
              gridTemplateColumns: "repeat(7,1fr)",
              gap: 6,
              alignItems: "end",
            }}
          >
            {SLEEP_BARS.map((bar, i) => (
              <span
                key={i}
                style={{
                  height: `${bar.h}%`,
                  background: "#5e5ce6",
                  borderRadius: 3,
                  opacity: bar.dim ? 0.55 : 1,
                }}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            margin: "10px 12px 0",
            background: "#1c1c1e",
            borderRadius: 14,
            padding: "12px 14px",
          }}
        >
          <div style={{ fontSize: 12, color: "#8e8e93" }}>気づき</div>
          <div
            style={{
              fontSize: 12.5,
              lineHeight: 1.7,
              color: "#e5e5ea",
              marginTop: 4,
            }}
          >
            睡眠6時間未満の翌日は、ベンチプレスの挙上重量が平均4%低下しています。
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 7,
            left: "50%",
            transform: "translateX(-50%)",
            width: 100,
            height: 4,
            borderRadius: 3,
            background: "#fff",
          }}
        />
      </div>
    </div>
  );
}
