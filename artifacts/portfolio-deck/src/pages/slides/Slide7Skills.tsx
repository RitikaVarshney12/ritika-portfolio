export default function Slide7Skills() {
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
          <div style={{ backgroundColor: "#f4e8c1", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>Technical Skills</div>
        </div>

        <div style={{ flex: 1, marginTop: "3.5vh" }}>
          <h2 style={{ fontSize: "3.5vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, margin: "0 0 4vh 0", letterSpacing: "-0.05vw" }}>
            Technical Skills
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5vw" }}>
            {/* Languages */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "1.5vw", padding: "2.5vw", border: "0.15vw solid #e2e8f0" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "#ffbca6", borderRadius: "50%", marginBottom: "1.5vh" }} />
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#718096", textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "1.2vh" }}>Languages</div>
              <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#1a202c", lineHeight: 1.5 }}>Java · C++ · Python</div>
            </div>

            {/* Web */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "1.5vw", padding: "2.5vw", border: "0.15vw solid #e2e8f0" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "#c8b6ff", borderRadius: "50%", marginBottom: "1.5vh" }} />
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#718096", textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "1.2vh" }}>Web</div>
              <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#1a202c", lineHeight: 1.5 }}>HTML · CSS · React.js · Node.js</div>
            </div>

            {/* Databases */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "1.5vw", padding: "2.5vw", border: "0.15vw solid #e2e8f0" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "#aed9e0", borderRadius: "50%", marginBottom: "1.5vh" }} />
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#718096", textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "1.2vh" }}>Databases</div>
              <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#1a202c", lineHeight: 1.5 }}>MySQL · MongoDB · SQLite</div>
            </div>

            {/* AI & Data */}
            <div style={{ backgroundColor: "#2d3748", borderRadius: "1.5vw", padding: "2.5vw", color: "#fff" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "#ffbca6", borderRadius: "50%", marginBottom: "1.5vh" }} />
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#aed9e0", textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "1.2vh" }}>AI &amp; Data</div>
              <div style={{ fontSize: "1.7vw", fontWeight: 700, lineHeight: 1.5 }}>Machine Learning · Computer Vision · Data Science</div>
            </div>

            {/* Tools */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "1.5vw", padding: "2.5vw", border: "0.15vw solid #e2e8f0" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "#f4e8c1", borderRadius: "50%", marginBottom: "1.5vh" }} />
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#718096", textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "1.2vh" }}>Tools</div>
              <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#1a202c", lineHeight: 1.5 }}>Git · GitHub · VS Code</div>
            </div>

            {/* Professional */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "1.5vw", padding: "2.5vw", border: "0.15vw solid #e2e8f0" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "#c8b6ff", borderRadius: "1vw", marginBottom: "1.5vh" }} />
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#718096", textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "1.2vh" }}>Professional</div>
              <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#1a202c", lineHeight: 1.5 }}>Problem Solving · Teamwork · Leadership</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2vh", borderTop: "0.15vw solid rgba(45,55,72,0.12)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>Ritika Varshney</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>07</div>
        </div>
      </div>
    </div>
  );
}
