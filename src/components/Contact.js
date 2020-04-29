import React from "react"
import Header from "./Header"

function Contact(){
    return(
        <div>
            <Header/>
            <div className="about">
            <img
              className="about-img"
              src="https://res.cloudinary.com/kevin14/image/upload/v1588199110/ghx0wkoqqzrygo5gvs08.jpg"
            ></img>
            <h1 className="about-text">Contact</h1>
          </div>
          <section className="about-container">
              <div className = "about-box">
                  <h1 className = "about-txt">Phone number : 2145444575</h1>
                  <h1 className = "about-txt">Email : fakeemail@email.com</h1>
              </div>
          </section>
        </div>
    )
}
export default Contact