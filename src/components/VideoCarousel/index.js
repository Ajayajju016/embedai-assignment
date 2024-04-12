import React, {Component} from 'react'
import './index.css'

class VideoCarousel extends Component {
  render() {
    return (
      <div className="video-container">
        <video autoPlay preload="auto" id="hero-scenario-video">
          <source
            src="https://characterai.io/static/editorial/scenarios/waterfall.mp4"
            type="video/mp4"
          />
        </video>
        <div className="card-container">
          <div className="card">
            <a
              href="/chat/zADxAm8Kj3mG-Q_-BW4Sid_2R93_6Wbwn624Dcj97eA"
              className="card-link"
            >
              <span className="card-image" title="Vida Life Coach"></span>
              <div className="card-title">Vida Life Coach</div>
              <div className="card-description">
                I'm your personal life coach here to help you live your best
                life and give you guidance and support whenever you need it.
              </div>
            </a>
          </div>
          <div className="card">
            <a
              href="/chat/-5jgnIpNmQuiuD6bL55MOtASTbvscvGR_cqvfqAE08M"
              className="card-link"
            >
              <span className="card-image" title="Gym Assistant"></span>
              <div className="card-title">Gym Assistant</div>
              <div className="card-description">
                I am Gym Assistant. How can I help with your fitness goals?
                Please also do your own research and consult a medical
                professional if you have any concerns!
              </div>
            </a>
          </div>
        </div>
        <p className="change-btn">change...</p>
      </div>
    )
  }
}

export default VideoCarousel
