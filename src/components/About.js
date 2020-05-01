import React from "react"
import Header from "./Header"
import '../menu.css'

function About(){
    return(
        <div>
            <Header/>
            <div className="about">
            <img
              className="about-img"
              src="https://i.imgur.com/N3DdBIG.jpg"
            ></img>
            <h1 className="about-text">About Us</h1>
          </div>
          <section className="about-container">
              <div className = "about-box">
                  <h1 className = "about-txt">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h1>
                  <h2 className = "about-txt">- Us</h2>
              </div>
          </section>
        </div>
    )
}
export default About