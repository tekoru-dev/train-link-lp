import WaitlistSignupForm from "./WaitlistSignupForm";

export default function Waitlist() {
  return (
    <section
      id="waitlist"
      style={{
        padding: "clamp(80px,11vw,140px) 20px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 900,
          height: 500,
          transform: "translate(-50%,-50%)",
          background:
            "radial-gradient(closest-side,oklch(0.48 0.19 282 / 0.35),transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 640,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 999,
            fontSize: 12,
            color: "#c9c9d4",
          }}
        >
          App Storeで近日公開 · Coming soon
        </div>
        <h2
          style={{
            margin: "22px 0 0",
            fontSize: "clamp(28px,5vw,46px)",
            lineHeight: 1.4,
            fontWeight: 700,
            textWrap: "balance",
          }}
        >
          リリースを、いち早く。
        </h2>
        <p
          style={{
            margin: "16px auto 0",
            maxWidth: 480,
            fontSize: 15,
            lineHeight: 1.95,
            color: "#a9a9b8",
            textWrap: "pretty",
          }}
        >
          ウェイティングリストに登録すると、公開時にメールでお知らせします。ベータテストへのご案内もこちらからお送りする予定です。
        </p>
        <WaitlistSignupForm />
        <div
          style={{
            marginTop: 28,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px 22px",
            fontSize: 12,
            color: "#8e8e9c",
          }}
        >
          <span>iPhone専用(iOS)</span>
          <span>登録は無料</span>
          <span>いつでも配信停止可能</span>
        </div>
      </div>
    </section>
  );
}
