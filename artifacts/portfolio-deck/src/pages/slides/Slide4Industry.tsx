export default function Slide4Industry() {
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
          <div style={{ backgroundColor: "#f4e8c1", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>Industry Experience</div>
        </div>

        <div style={{ flex: 1, marginTop: "3.5vh", display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontSize: "3.5vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, margin: "0 0 4vh 0", letterSpacing: "-0.05vw" }}>
            Industry Experience
          </h2>
          <div style={{ display: "flex", gap: "3vw", flex: 1 }}>
            {/* Pinnacle Labs */}
            <div style={{ flex: 1, backgroundColor: "#ffffff", borderRadius: "1.5vw", padding: "3vw", border: "0.15vw solid #e2e8f0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: "4vw", height: "4vw", backgroundColor: "#ffbca6", borderRadius: "50%", marginBottom: "2.5vh" }} />
                <div style={{ fontSize: "2.2vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, marginBottom: "0.8vh" }}>Pinnacle Labs</div>
                <div style={{ fontSize: "1.5vw", color: "#718096", fontWeight: 500, marginBottom: "3vh" }}>Java Development Intern · 2026</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.8vw" }}>
                  <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#ffbca6", flexShrink: 0, marginTop: "0.5vw" }} />
                  <div style={{ fontSize: "1.5vw", color: "#4a5568", lineHeight: 1.4 }}>Object-oriented application development</div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.8vw" }}>
                  <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#ffbca6", flexShrink: 0, marginTop: "0.5vw" }} />
                  <div style={{ fontSize: "1.5vw", color: "#4a5568", lineHeight: 1.4 }}>Industry-standard design patterns and practices</div>
                </div>
              </div>
            </div>

            {/* Astrea IT */}
            <div style={{ flex: 1, backgroundColor: "#ffffff", borderRadius: "1.5vw", padding: "3vw", border: "0.15vw solid #e2e8f0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: "4vw", height: "4vw", backgroundColor: "#aed9e0", borderRadius: "50%", marginBottom: "2.5vh" }} />
                <div style={{ fontSize: "2.2vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, marginBottom: "0.8vh" }}>Astrea IT Services</div>
                <div style={{ fontSize: "1.5vw", color: "#718096", fontWeight: 500, marginBottom: "3vh" }}>Software Intern · 2026</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.8vw" }}>
                  <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#aed9e0", flexShrink: 0, marginTop: "0.5vw" }} />
                  <div style={{ fontSize: "1.5vw", color: "#4a5568", lineHeight: 1.4 }}>Software development workflows and team collaboration</div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.8vw" }}>
                  <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#aed9e0", flexShrink: 0, marginTop: "0.5vw" }} />
                  <div style={{ fontSize: "1.5vw", color: "#4a5568", lineHeight: 1.4 }}>Professional communication in a technology environment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2vh", borderTop: "0.15vw solid rgba(45,55,72,0.12)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>Ritika Varshney</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>04</div>
        </div>
      </div>
    </div>
  );
}
