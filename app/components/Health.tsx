import HealthPhoneMockup from "./HealthPhoneMockup";

const stats = [
  { title: "体重", desc: "増量・減量の推移" },
  { title: "睡眠", desc: "回復との関係" },
  { title: "記録", desc: "重量・ボリューム" },
];

export default function Health() {
  return (
    <section
      style={{
        padding: "clamp(72px,10vw,128px) 20px",
        background: "#0e0e13",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap-reverse",
          gap: "clamp(48px,6vw,80px)",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: "1 1 320px",
            minWidth: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <HealthPhoneMockup />
        </div>
        <div style={{ flex: "1 1 400px", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              className="tl-mono"
              style={{
                fontSize: 12,
                letterSpacing: "0.16em",
                color: "oklch(0.78 0.13 285)",
              }}
            >
              APPLE HEALTH
            </span>
            <span
              style={{
                fontSize: 11,
                padding: "4px 10px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#a3a3b2",
              }}
            >
              今後対応予定
            </span>
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
            体重も、睡眠も、
            <br />
            トレーニングとあわせて。
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
            Appleのヘルスケアと連携し、体重や睡眠のデータをトレーニング記録と並べて確認できるようにする予定です。「睡眠が短い日のパフォーマンスは?」といった質問も、AIアシスタントにそのまま聞けるようになります。
          </p>
          <div
            style={{
              marginTop: 32,
              display: "grid",
              gridTemplateColumns: "repeat(3,minmax(0,1fr))",
              gap: 12,
            }}
          >
            {stats.map((s) => (
              <div
                key={s.title}
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.14)",
                  paddingTop: 14,
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 600 }}>{s.title}</div>
                <div
                  style={{ fontSize: 12, color: "#8e8e9c", marginTop: 4 }}
                >
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
