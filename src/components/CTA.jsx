import React from 'react'
import { Container } from 'react-bootstrap'

export default function CTA() {
  return (
    <section id="cta" className="section">
      <Container>
        <div className="card-surface p-5 text-center">
          <h3 className="section-title mb-2">Ready to ship your next big thing?</h3>
          <p className="section-subtitle">Book a call and let’s build something that converts.</p>
    <a href="tel:+919440386496" className="btn btn-gradient">Book a Call</a>

        </div>
      </Container>
    </section>
  )
}
