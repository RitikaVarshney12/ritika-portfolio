export default function Slide5Attendance() {
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
          <div style={{ backgroundColor: "#ffbca6", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>Project 01</div>
        </div>

        <div style={{ display: "flex", gap: "4vw", flex: 1, marginTop: "3.5vh" }}>
          {/* Left */}
          <div style={{ flex: 1.1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "inline-block", backgroundColor: "#e2e8f0", color: "#4a5568", fontSize: "1vw", fontWeight: 700, padding: "0.5vh 1vw", borderRadius: "0.5vw", marginBottom: "2vh", textTransform: "uppercase", letterSpacing: "0.1vw" }}>
              Computer Vision · Python
            </div>
            <h2 style={{ fontSize: "3.2vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, margin: "0 0 2vh 0", letterSpacing: "-0.05vw" }}>
              Smart Attendance System
            </h2>
            <p style={{ fontSize: "1.7vw", color: "#4a5568", lineHeight: 1.5, margin: "0 0 3vh 0" }}>
              Automated attendance via facial recognition and computer vision
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1vw", marginBottom: "3vh" }}>
              <div style={{ backgroundColor: "#2d3748", color: "#fff", fontSize: "1.2vw", fontWeight: 700, padding: "0.5vh 1.2vw", borderRadius: "1vw" }}>Python</div>
              <div style={{ backgroundColor: "#ffffff", color: "#2d3748", fontSize: "1.2vw", fontWeight: 700, padding: "0.5vh 1.2vw", borderRadius: "1vw", border: "0.15vw solid #e2e8f0" }}>OpenCV</div>
              <div style={{ backgroundColor: "#ffffff", color: "#2d3748", fontSize: "1.2vw", fontWeight: 700, padding: "0.5vh 1.2vw", borderRadius: "1vw", border: "0.15vw solid #e2e8f0" }}>Flask</div>
              <div style={{ backgroundColor: "#ffffff", color: "#2d3748", fontSize: "1.2vw", fontWeight: 700, padding: "0.5vh 1.2vw", borderRadius: "1vw", border: "0.15vw solid #e2e8f0" }}>SQLite</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
                <div style={{ width: "0.7vw", height: "0.7vw", borderRadius: "50%", backgroundColor: "#ffbca6", flexShrink: 0 }} />
                <div style={{ fontSize: "1.5vw", color: "#4a5568" }}>Real-time face detection and recognition (97%+ accuracy)</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
                <div style={{ width: "0.7vw", height: "0.7vw", borderRadius: "50%", backgroundColor: "#ffbca6", flexShrink: 0 }} />
                <div style={{ fontSize: "1.5vw", color: "#4a5568" }}>Automated attendance logging with secure data storage</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
                <div style={{ width: "0.7vw", height: "0.7vw", borderRadius: "50%", backgroundColor: "#ffbca6", flexShrink: 0 }} />
                <div style={{ fontSize: "1.5vw", color: "#4a5568" }}>Live dashboard with attendance analytics</div>
              </div>
            </div>
          </div>

          {/* Right — visual mock */}
          <div style={{ flex: 0.9, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "22vw", height: "22vw", backgroundColor: "#2d3748", borderRadius: "2vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", boxShadow: "0 2vw 4vw rgba(0,0,0,0.15)" }}>
              {/* Face detection frame */}
              <div style={{ width: "12vw", height: "12vw", border: "0.3vw solid #aed9e0", borderRadius: "1vw", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ position: "absolute", top: "-0.3vw", left: "-0.3vw", width: "2vw", height: "2vw", borderTop: "0.5vw solid #ffbca6", borderLeft: "0.5vw solid #ffbca6", borderRadius: "0.3vw 0 0 0" }} />
                <div style={{ position: "absolute", top: "-0.3vw", right: "-0.3vw", width: "2vw", height: "2vw", borderTop: "0.5vw solid #ffbca6", borderRight: "0.5vw solid #ffbca6", borderRadius: "0 0.3vw 0 0" }} />
                <div style={{ position: "absolute", bottom: "-0.3vw", left: "-0.3vw", width: "2vw", height: "2vw", borderBottom: "0.5vw solid #ffbca6", borderLeft: "0.5vw solid #ffbca6", borderRadius: "0 0 0 0.3vw" }} />
                <div style={{ position: "absolute", bottom: "-0.3vw", right: "-0.3vw", width: "2vw", height: "2vw", borderBottom: "0.5vw solid #ffbca6", borderRight: "0.5vw solid #ffbca6", borderRadius: "0 0 0.3vw 0" }} />
                <div style={{ width: "6vw", height: "6vw", backgroundColor: "#718096", borderRadius: "50%", opacity: 0.4 }} />
              </div>
              <div style={{ marginTop: "2vh", backgroundColor: "#aed9e0", color: "#1a202c", fontSize: "1.1vw", fontWeight: 700, padding: "0.5vh 1.5vw", borderRadius: "1vw" }}>
                IDENTIFIED ✓
              </div>
              <div style={{ position: "absolute", bottom: "1.5vw", right: "1.5vw", width: "3vw", height: "3vw", backgroundColor: "#ffbca6", borderRadius: "50%" }} />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2vh", borderTop: "0.15vw solid rgba(45,55,72,0.12)" }}>
          <div style={{ fontSize: "1.2vw", color: "#718096" }}>github.com/RitikaVarshney12/Smart-Attendance</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>05</div>
        </div>
      </div>
    </div>
  );
}
