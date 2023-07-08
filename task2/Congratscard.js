import React from "react";
import './Congratscard.css'
import 'bootstrap/dist/css/bootstrap.css'

export function Card(){
    return(
      <>
      <div className="stack">
        <div className="text-center">
        <h1>Congratulations</h1>
        <div className="card-box p-5 m-auto">
          <img src ="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"/>
          <p>Naveen</p>
          <p>Vishnu Institute of Computer Education and Technology Bhimavaram</p>
          <img src = "https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"/>
        </div>
        </div>

      </div>
      </>
    );
}

