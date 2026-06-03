export default function Slide2About() {
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
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "3vw", height: "3vw", backgroundColor: "#2d3748", borderRadius: "0.8vw", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "bold", fontSize: "1.4vw" }}>RV</div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700 }}>ritikavarshney</div>
          </div>
          <div style={{ backgroundColor: "#aed9e0", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>About Me</div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", gap: "4vw", flex: 1, marginTop: "4vh" }}>
          {/* Left */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontSize: "3.8vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, margin: "0 0 3vh 0", letterSpacing: "-0.05vw" }}>
              About Me
            </h2>
            <p style={{ fontSize: "1.8vw", color: "#4a5568", lineHeight: 1.55, margin: "0 0 3vh 0" }}>
              B.Tech CSE undergraduate at GLA University (2024–2028)
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#ffbca6", flexShrink: 0, marginTop: "0.6vw" }} />
                <div style={{ fontSize: "1.7vw", color: "#4a5568", lineHeight: 1.4 }}>Passionate about full-stack development and machine learning</div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#c8b6ff", flexShrink: 0, marginTop: "0.6vw" }} />
                <div style={{ fontSize: "1.7vw", color: "#4a5568", lineHeight: 1.4 }}>Research intern at two IITs before completing first year</div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#aed9e0", flexShrink: 0, marginTop: "0.6vw" }} />
                <div style={{ fontSize: "1.7vw", color: "#4a5568", lineHeight: 1.4 }}>Bridges engineering precision with research curiosity</div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#f4e8c1", borderWidth: "0.2vw", borderStyle: "solid", borderColor: "#2d3748", flexShrink: 0, marginTop: "0.6vw" }} />
                <div style={{ fontSize: "1.7vw", color: "#4a5568", lineHeight: 1.4 }}>Focused on software that solves real-world problems</div>
              </div>
            </div>
          </div>

          {/* Right — stat cards */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "2vh" }}>
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ flex: 1, backgroundColor: "#2d3748", borderRadius: "1.5vw", padding: "2.5vw", color: "#fff" }}>
                <div style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1 }}>2+</div>
                <div style={{ fontSize: "1.3vw", color: "#aed9e0", marginTop: "0.8vh", fontWeight: 500 }}>IIT Internships</div>
              </div>
              <div style={{ flex: 1, backgroundColor: "#ffffff", borderRadius: "1.5vw", padding: "2.5vw", border: "0.15vw solid #e2e8f0" }}>
                <div style={{ fontSize: "4vw", fontWeight: 800, color: "#1a202c", lineHeight: 1 }}>2+</div>
                <div style={{ fontSize: "1.3vw", color: "#718096", marginTop: "0.8vh", fontWeight: 500 }}>Projects Built</div>
              </div>
            </div>
            <div style={{ backgroundColor: "#fff", borderRadius: "1.5vw", padding: "2.5vw", border: "0.15vw solid #e2e8f0" }}>
              <div style={{ fontSize: "1.2vw", textTransform: "uppercase", letterSpacing: "0.1vw", color: "#718096", marginBottom: "1vh", fontWeight: 700 }}>University</div>
              <div style={{ fontSize: "2.2vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1 }}>GLA University</div>
              <div style={{ fontSize: "1.4vw", color: "#718096", marginTop: "0.8vh" }}>B.Tech Computer Science · 2024–2028</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2vh", borderTop: "0.15vw solid rgba(45,55,72,0.12)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>Ritika Varshney</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>02</div>
        </div>
      </div>
    </div>
  );
}
