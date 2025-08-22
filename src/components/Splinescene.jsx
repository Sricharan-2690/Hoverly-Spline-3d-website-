import React, { Suspense } from "react";
import { motion } from "framer-motion";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function App() {
  return (
  <div
  style={{
    width: "1200px",
    height: "800px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: "-190px", // adjust this value to reduce gap
  }}
>
      <Suspense fallback={<div>Loading...</div>}>
    <Spline scene="https://prod.spline.design/1jwzl8DLJ66Tafyp/scene.splinecode" />
 
 

      </Suspense>
    {/* Left Text */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "180px",
          transform: "translateY(-50%)",
          fontSize: "32px",
          fontWeight: "600",
          fontFamily: "'Inter', sans-serif",
          color: "white",
        }}
      >
        🤖 Meet <span style={{ color: "#3b82f6" }}>Hoverly</span>
      </motion.div>

      {/* Right Text */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        style={{
          position: "absolute",
          top: "50%",
          right: "180px",
          transform: "translateY(-50%)",
          fontSize: "32px",
          fontWeight: "600",
          fontFamily: "'Inter', sans-serif",
          color: "white",
        }}
      >
        💬 Ask me <span style={{ color: "#a855f7" }}>anything!</span>
      </motion.div>


      <div
  style={{
    position: "absolute",
    bottom: "135px",      // sticks to bottom
    right: "120px",       // sticks to right
    width: "200px",   // adjust width
    height: "60px",   // adjust height
    backgroundColor: "black", // same bg as your site
    zIndex: "10",     // ensures it sits on top of spline badge
  }}
></div>

    </div>
  );
}
