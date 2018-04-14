import React from 'react'
import Link from 'gatsby-link'
import ReactDOM from 'react-dom'
import '../layouts/index.css'

class MainPage extends React.Component {
  render() {
    return (
      <div className="flip-section">
        <h1>Welcome to my portfolio</h1>

        <span>
        {/* First card */}
        <div className="flip-container">
          <div className="flipper">
            <div className="front"
               style={{
               transform: 'rotateY(0deg)'
             }}
            >
              Writing and Speaking
            </div>
            <div className="back">
              <Link to="/writing-and-speaking/">Content for Writing and Speaking card</Link>
            </div>
          </div>
        </div>

        {/* Second card */}
        <div className="flip-container">
          <div className="flipper">
            <div className="front"
               style={{
               transform: 'rotateY(0deg)'
             }}
            >
              Twitter
            </div>
            <div className="back">
              <a href="https://twitter.com/sarachicad" target="_blank">Content for Twitter card</a>
            </div>
          </div>
        </div>

        {/* Third card */}
        <div className="flip-container">
          <div className="flipper">
            <div className="front"
               style={{
               transform: 'rotateY(0deg)'
             }}
            >
              Freelance Software Development
            </div>
            <div className="back">
              <Link to="/freelance/">Content for Freelance card</Link>
            </div>
          </div>
        </div>

        {/* Fourth card */}
        <div className="flip-container">
          <div className="flipper">
            <div className="front"
               style={{
               transform: 'rotateY(0deg)'
             }}
            >
              Women Who Code
            </div>
            <div className="back">
              <Link to="/women-who-code/">Content for WWCode card</Link>
            </div>
          </div>
        </div>

        {/* Fifth card */}
        <div className="flip-container">
          <div className="flipper">
            <div className="front"
               style={{
               transform: 'rotateY(0deg)'
             }}
            >
              Github
            </div>
            <div className="back">
              <Link to="/github/">Content for Github card</Link>
            </div>
          </div>
        </div>

        {/* Sixth card */}
        <div className="flip-container">
          <div className="flipper">
            <div className="front"
               style={{
               transform: 'rotateY(0deg)'
             }}
            >
              Medium
            </div>
            <div className="back">
              <Link to="/medium/">Content for Medium card</Link>
            </div>
          </div>
        </div>

        {/* 7th card */}
        <div className="flip-container">
          <div className="flipper">
            <div className="front"
               style={{
               transform: 'rotateY(0deg)'
             }}
            >
              About
            </div>
            <div className="back">
              <Link to="/about/">Content for About card</Link>
            </div>
          </div>
        </div>

        {/* 8th card */}
        <div className="flip-container">
          <div className="flipper">
            <div className="front"
               style={{
               transform: 'rotateY(0deg)'
             }}
            >
              Contact
            </div>
            <div className="back">
              <Link to="/contact/">Content for Contact card</Link>
            </div>
          </div>
        </div>

        {/* 9th card */}
        <div className="flip-container">
          <div className="flipper">
            <div className="front"
               style={{
               transform: 'rotateY(0deg)'
             }}
            >
              LinkedIn
            </div>
            <div className="back">
              <a href="https://www.linkedin.com/in/sarainescalderon" target="_blank">Content for LinkedIn card</a>
            </div>
          </div>
        </div>

        </span>


        <ul>
          <span>
            <p>Instagram</p>
            <p>WhatsApp</p>
            <p>Oculus</p>
          </span>
        </ul>

      </div>
    );
  }
}

export default MainPage