import React from "react"
import Header from "./Header"

function Donate(){
    return(
        <div>
            <Header/>
            <div className="about">
            <img
              className="about-img"
              src="https://i.imgur.com/rysHoF5.jpg"
            ></img>
            <h1 className="about-text">Donate</h1>
          </div>
          <section className="about-container">
              <div className = "donate-box">
                  <h1 className = "about-txt">$<input className= "donate-input"placeholder = "0" type = "number" min ="1"></input></h1>
                  <button className= "donate-btn">Donate</button>
              </div>
          </section>
        </div>
    )
}
export default Donate