export default function Slide8Connect() {
  return (
    <div
      style={{
        width: "100vw", height: "100vh", overflow: "hidden",
        backgroundColor: "#fafafa",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative", color: "#2d3748", display: "flex",
      }}
    >
      <div style={{ position: "absolute", top: "-15vh", right: "-5vw", width: "45vw", height: "45vw", backgroundColor: "#f4e8c1", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-10vh", left: "-10vw", width: "35vw", height: "35vw", backgroundColor: "#aed9e0", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20vh", left: "55vw", width: "8vw", height: "24vw", backgroundColor: "#ffbca6", borderRadius: "4vw", transform: "rotate(15deg)", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "25vh", right: "20vw", width: "12vw", height: "12vw", backgroundColor: "#c8b6ff", borderRadius: "50% 50% 0 0", zIndex: 1 }} />
      <div style={{ position: "absolute", top: "40vh", right: "8vw", width: "4vw", height: "4vw", backgroundColor: "#aed9e0", borderRadius: "50%", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "15vh", left: "45vw", width: "10vw", height: "2vw", background: "radial-gradient(circle, #2d3748 0.5vw, transparent 0.6vw)", backgroundSize: "2vw 2vw", zIndex: 1 }} />

      <div
        style={{
          position: "relative", zIndex: 10,
          margin: "8vh 8vw",
          width: "calc(100vw - 16vw)", height: "calc(100vh - 16vh)",
          backgroundColor: "rgba(255,255,255,0.5)",
          backdropFilter: "blur(1vw)", WebkitBackdropFilter: "blur(1vw)",
          borderRadius: "2vw",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          boxSizing: "border-box", padding: "4vh 4vw",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "3vw", height: "3vw", backgroundColor: "#2d3748", borderRadius: "0.8vw", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "bold", fontSize: "1.4vw" }}>RV</div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700 }}>ritikavarshney</div>
          </div>
          <div style={{ backgroundColor: "#ffbca6", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>Let's Connect</div>
        </div>

        {/* Center content */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", gap: "4vw", alignItems: "center", width: "100%" }}>
            {/* Left — headline */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "inline-block", backgroundColor: "#2d3748", color: "#fff",
                  fontSize: "1.1vw", fontWeight: 700, padding: "0.5vh 1.5vw",
                  borderRadius: "2vw", marginBottom: "3vh",
                  textTransform: "uppercase", letterSpacing: "0.1vw",
                }}
              >
                Open to Opportunities
              </div>
              <h2
                style={{
                  fontSize: "5vw", fontWeight: 800, color: "#1a202c",
                  lineHeight: 1.1, margin: "0 0 2.5vh 0", letterSpacing: "-0.08vw", textWrap: "balance",
                }}
              >
                Let's Connect
              </h2>
              <p style={{ fontSize: "1.8vw", color: "#4a5568", lineHeight: 1.5, margin: "0 0 4vh 0", maxWidth: "32vw" }}>
                Open to internships, research collaborations, and engineering opportunities.
              </p>
              <div style={{ fontSize: "1.5vw", color: "#718096", lineHeight: 1.8 }}>
                GLA University · Uttar Pradesh, India
              </div>
            </div>

            {/* Right — contact card */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
              <div style={{ backgroundColor: "#2d3748", borderRadius: "1.5vw", padding: "2.5vw", color: "#fff" }}>
                <div style={{ fontSize: "1.1vw", textTransform: "uppercase", letterSpacing: "0.1vw", color: "#aed9e0", marginBottom: "0.8vh", fontWeight: 700 }}>Email</div>
                <div style={{ fontSize: "1.8vw", fontWeight: 700 }}>varshneyritika01@gmail.com</div>
              </div>
              <div style={{ backgroundColor: "#ffffff", borderRadius: "1.5vw", padding: "2.5vw", border: "0.15vw solid #e2e8f0" }}>
                <div style={{ fontSize: "1.1vw", textTransform: "uppercase", letterSpacing: "0.1vw", color: "#718096", marginBottom: "0.8vh", fontWeight: 700 }}>GitHub</div>
                <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#1a202c" }}>github.com/RitikaVarshney12</div>
              </div>
              <div style={{ backgroundColor: "#ffffff", borderRadius: "1.5vw", padding: "2.5vw", border: "0.15vw solid #e2e8f0" }}>
                <div style={{ fontSize: "1.1vw", textTransform: "uppercase", letterSpacing: "0.1vw", color: "#718096", marginBottom: "0.8vh", fontWeight: 700 }}>LinkedIn</div>
                <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#1a202c" }}>linkedin.com/in/ritikavarshney1210</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2vh", borderTop: "0.15vw solid rgba(45,55,72,0.12)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>Ritika Varshney · Portfolio 2026</div>
          <div style={{ display: "flex", gap: "1vw" }}>
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#ffbca6" }} />
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#aed9e0" }} />
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#c8b6ff" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
