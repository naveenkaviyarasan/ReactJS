import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle';


export function Menu(){
    return(
        <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid"><Link to={"/"} style={{ textDecoration: 'none' }}>
    <a class="navbar-brand">Moodle Task</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><Link to={"/Helloworld"} style={{ textDecoration: 'none' }}>
          <a class="nav-link active text-danger" aria-current="page">HELLOWORLD</a></Link>
        </li>
        <li class="nav-item"><Link to={"/Congratscard"} style={{ textDecoration: 'none' }}>
          <a class="nav-link text-success" href="#">CONGRATSCARD</a></Link>
        </li>
        <li class="nav-item"><Link to={"/Superover"} style={{ textDecoration: 'none' }}>
          <a class="nav-link text-primary" href="#">SUPEROVER</a></Link>
        </li>
        <li class="nav-item"><Link to={"/Socialbutton"} style={{ textDecoration: 'none' }}>
          <a class="nav-link text-warning" href="#">SOCIALBUTTON</a></Link>
        </li>
        <li class="nav-item"><Link to={"/Notifications"} style={{ textDecoration: 'none' }}>
          <a class="nav-link text-danger" href="#">NOTIFICATIONS</a></Link>
        </li>
        <li class="nav-item"><Link to={"/Login"} style={{ textDecoration: 'none' }}>
          <a class="nav-link text-danger" href="#">LOGIN</a></Link>
        </li>
        <li class="nav-item"><Link to={"/TechnologyCard"} style={{ textDecoration: 'none' }}>
          <a class="nav-link text-success" href="#">Technology</a></Link>
        </li>
        <li class="nav-item"><Link to={"/Hooks"} style={{ textDecoration: 'none' }}>
          <a class="nav-link text-success" href="#">Hooks</a></Link>
        </li>
        <li class="nav-item"><Link to={"/FakestoreApi"} style={{ textDecoration: 'none' }}>
          <a class="nav-link text-success" href="#">FakestoreApi</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        </>
    );
}