"use client";

import { useEffect, useRef, useState } from "react";

const CHART_DATA = [72.5, 73.8, 75.0, 76.3, 77.5, 78.8, 79.5, 80.0];
const BARS = CHART_DATA.map((d, i) => ({
  v: d.toFixed(0),
  h: `${(((d - 68) / 13) * 100).toFixed(0)}%`,
  c:
    i === 7
      ? "oklch(0.66 0.19 282)"
      : i >= 5
        ? "oklch(0.56 0.2 280 / 0.6)"
        : "rgba(255,255,255,0.14)",
}));

const SUGGESTIONS = [
  "今週の胸のボリュームは足りてる?",
  "脚の日をサボりがちか確認して",
  "来月のメニューを組んで",
];

export default function AiChatDemo() {
  const [step, setStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const played = useRef(false);

  const play = () => {
    timeouts.current.forEach(clearTimeout);
    setStep(0);
    timeouts.current = [
      setTimeout(() => setStep(1), 700),
      setTimeout(() => setStep(2), 1700),
    ];
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      play();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !played.current) {
          played.current = true;
          play();
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ flex: "1.3 1 460px", minWidth: 0 }}>
      <div
        style={{
          background: "#16161c",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.55)",
        }}
      >
        <div
          style={{
            height: 42,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "0 16px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            background: "#1b1b22",
          }}
        >
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "#febc2e",
            }}
          />
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "#28c840",
            }}
          />
          <span style={{ marginLeft: 12, fontSize: 12, color: "#8e8e9c" }}>
            AIアシスタント(デスクトップ)
          </span>
          <span
            className="tl-mono"
            style={{
              marginLeft: "auto",
              fontSize: 10,
              color: "#8e8e9c",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#34c759",
              }}
            />
            trainlink
          </span>
        </div>
        <div
          style={{
            padding: "clamp(18px,3vw,28px)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            minHeight: 470,
          }}
        >
          <div
            style={{
              alignSelf: "flex-end",
              maxWidth: "80%",
              background: "oklch(0.56 0.2 280)",
              color: "#fff",
              padding: "12px 16px",
              borderRadius: "16px 16px 4px 16px",
              fontSize: 14,
              lineHeight: 1.7,
            }}
          >
            最近のベンチプレスの伸び教えて
          </div>
          {step >= 1 && (
            <div
              className="tl-mono tl-fade-in"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 11,
                color: "#a3a3b2",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: "7px 10px",
              }}
            >
              <span style={{ color: "oklch(0.78 0.13 285)" }}>⚙</span>
              trainlink · get_exercise_history(ベンチプレス, 8週)
              <span style={{ color: "#34c759" }}>完了</span>
            </div>
          )}
          {step >= 2 && (
            <div
              className="tl-fade-in"
              style={{
                maxWidth: "94%",
                fontSize: 14,
                lineHeight: 1.9,
                color: "#e5e5ec",
              }}
            >
              <div>
                直近8週間(16セッション)の記録を確認しました。推定1RMは{" "}
                <strong style={{ color: "#fff" }}>72.5kg → 80.0kg</strong>、
                <span style={{ color: "oklch(0.8 0.12 285)" }}>
                  +7.5kg(+10.3%)
                </span>
                です。
              </div>
              <div
                style={{
                  margin: "14px 0",
                  background: "#0e0e13",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "16px 16px 10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 11,
                    color: "#8e8e9c",
                  }}
                >
                  <span>推定1RM(kg)</span>
                  <span>8週間</span>
                </div>
                <div
                  style={{
                    marginTop: 12,
                    height: 110,
                    display: "grid",
                    gridTemplateColumns: "repeat(8,1fr)",
                    gap: 8,
                    alignItems: "end",
                  }}
                >
                  {BARS.map((b, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                        height: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <span
                        className="tl-mono"
                        style={{ fontSize: 9, color: "#8e8e9c" }}
                      >
                        {b.v}
                      </span>
                      <span
                        style={{
                          width: "100%",
                          maxWidth: 26,
                          height: b.h,
                          borderRadius: "5px 5px 2px 2px",
                          background: b.c,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                週2回のペースが安定していて、順調です。ただ6週目以降は伸びが緩やかで、75kg×6回で止まる日が増えています。次の2週間は{" "}
                <strong style={{ color: "#fff" }}>
                  70kg×5回×5セット
                </strong>{" "}
                でボリュームを確保してから、改めてトップセットに挑戦するのがおすすめです。
              </div>
            </div>
          )}
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "12px 14px",
              fontSize: 13,
              color: "#6e6e7c",
            }}
          >
            メッセージを入力…
            <span
              style={{
                marginLeft: "auto",
                width: 26,
                height: 26,
                borderRadius: 8,
                background: "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a3a3b2",
              }}
            >
              ↑
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 18,
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 12, color: "#8e8e9c", marginRight: 4 }}>
          ほかにも:
        </span>
        {SUGGESTIONS.map((s) => (
          <span
            key={s}
            style={{
              fontSize: 12,
              padding: "7px 12px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#c9c9d4",
            }}
          >
            {s}
          </span>
        ))}
        <button
          onClick={play}
          style={{
            marginLeft: "auto",
            background: "none",
            border: 0,
            color: "oklch(0.78 0.13 285)",
            font: "inherit",
            fontSize: 12,
            cursor: "pointer",
          }}
        >
          ↻ 再生
        </button>
      </div>
    </div>
  );
}
