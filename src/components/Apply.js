import React from "react"
import Header from "./Header"

function Apply(){
    return(
    <div>
        <Header/>
        <div className="about">
            <img
              className="about-img"
              src="https://res.cloudinary.com/kevin14/image/upload/v1588199013/zoxwro7cwsxq59e5rkwq.jpg"
            ></img>
            <h1 className="about-text">Apply</h1>
          </div>
          <section className="about-container">
              <div className = "about-box">
                  <h1>Aplication</h1>
                  <h1 className = "about-txt">First Name : <input></input></h1>
                  <h1 className = "about-txt">Last Name : <input></input></h1>
                  <h1 className = "about-txt">Phone Number : <input></input></h1>
                  <h1 className = "about-txt">Email : <input></input></h1>
                  <button>Submit</button>
              </div>
          </section>
    </div>
    )
}
export default Apply