export default function Slide3Research() {
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
          <div style={{ backgroundColor: "#c8b6ff", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>Research Internships</div>
        </div>

        <div style={{ flex: 1, marginTop: "3.5vh", display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontSize: "3.5vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, margin: "0 0 4vh 0", letterSpacing: "-0.05vw" }}>
            Research Internships
          </h2>
          <div style={{ display: "flex", gap: "3vw", flex: 1 }}>
            {/* IIT Ropar card */}
            <div style={{ flex: 1, backgroundColor: "#2d3748", borderRadius: "1.5vw", padding: "3vw", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "inline-block", backgroundColor: "#aed9e0", color: "#1a202c", fontSize: "1vw", fontWeight: 700, padding: "0.5vh 1vw", borderRadius: "1vw", marginBottom: "2.5vh", textTransform: "uppercase", letterSpacing: "0.1vw" }}>
                  Summer 2026
                </div>
                <div style={{ fontSize: "2.6vw", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5vh" }}>IIT Ropar</div>
                <div style={{ fontSize: "1.5vw", color: "#aed9e0", marginBottom: "3vh", fontWeight: 500 }}>VLED Lab — Summer Research Intern</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.8vw" }}>
                  <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#ffbca6", flexShrink: 0, marginTop: "0.5vw" }} />
                  <div style={{ fontSize: "1.5vw", color: "#e2e8f0", lineHeight: 1.4 }}>Open-source contributions for India-centric educational challenges</div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.8vw" }}>
                  <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#ffbca6", flexShrink: 0, marginTop: "0.5vw" }} />
                  <div style={{ fontSize: "1.5vw", color: "#e2e8f0", lineHeight: 1.4 }}>Collaborated with research mentors on live software repositories</div>
                </div>
              </div>
            </div>

            {/* IIT Jammu card */}
            <div style={{ flex: 1, backgroundColor: "#ffffff", borderRadius: "1.5vw", padding: "3vw", border: "0.15vw solid #e2e8f0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "inline-block", backgroundColor: "#c8b6ff", color: "#2d3748", fontSize: "1vw", fontWeight: 700, padding: "0.5vh 1vw", borderRadius: "1vw", marginBottom: "2.5vh", textTransform: "uppercase", letterSpacing: "0.1vw" }}>
                  Summer 2026
                </div>
                <div style={{ fontSize: "2.6vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, marginBottom: "1.5vh" }}>IIT Jammu</div>
                <div style={{ fontSize: "1.5vw", color: "#718096", marginBottom: "3vh", fontWeight: 500 }}>Summer School 2026 — Data Science &amp; AI</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.8vw" }}>
                  <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#c8b6ff", flexShrink: 0, marginTop: "0.5vw" }} />
                  <div style={{ fontSize: "1.5vw", color: "#4a5568", lineHeight: 1.4 }}>Data Science &amp; AI program</div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.8vw" }}>
                  <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#c8b6ff", flexShrink: 0, marginTop: "0.5vw" }} />
                  <div style={{ fontSize: "1.5vw", color: "#4a5568", lineHeight: 1.4 }}>Advanced AI concepts from IIT faculty and researchers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2vh", borderTop: "0.15vw solid rgba(45,55,72,0.12)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>Ritika Varshney</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>03</div>
        </div>
      </div>
    </div>
  );
}
