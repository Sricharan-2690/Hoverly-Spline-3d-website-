import React, { useEffect, useState } from "react"
import "../styles/hero.css"
import logo from "./logo.png" // ✅ import image since it's in the same folder
import heroVideo from "./website logo animatio.mp4"
import Splinescene from "./Splinescene"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Map scroll position to Z and rotation
  const zDepth = Math.min(180, Math.max(-100, scrollY * 0.25))
  const rotateX = Math.min(10, Math.max(-10, scrollY * 0.02))

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-headline">
          Building <span className="gradient-text">Web-apps </span> optimized for
          <span className="gradient-text"> Conversion</span>, Credibility & Scale
        </h1>

        <p className="hero-subtext">
          From high-conversion landing pages to enterprise level web-apps,
          tailored for your specific needs.
        </p>

        {/* Desktop: Spline + CTA */}
        <div className="desktop-only">
          <Splinescene />
          <div className="hero-cta">
            <a
              href="https://wa.me/919440386496"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gradient"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>

        {/* Mobile: WhatsApp button + Video */}
        <div className="mobile-only">
          <div className="hero-cta">
            <a
              href="https://wa.me/919440386496"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gradient"
            >
              Chat on WhatsApp →
            </a>
          </div>

          <div className="hero-frame"></div>
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="hero-mockup"
          />
        </div>
      </div>
    </section>
  )
}
