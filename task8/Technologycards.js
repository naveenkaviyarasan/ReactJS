import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import data from "./pngwings.png"
import data1 from "./pngwing7.png"
import data2 from "./pngwing2.png"
import data3 from "./pngwing6.png"



export function TechnologyCard(){
  return(
      <div className="Main  d-flex text-align-center justify-content-center ">
        <div className="w-75">
          <div className=" ">
            <h1 className="text-center">Learn 4.0 Technology </h1>
          </div>
          <div className="mt-5 ">
            <p className="text-center">Get trined by alumuni of IIT and top companies like Amazon,microsoft,intent Nivida Qualcomnn etc.Learn direct fro profermance Develop</p>
          </div>
          <div className="row gap-3 justify-content-center d-flex">
          <div class="card  col-lg-5 col-md-5 col-sm-12 rounded-5  w-30 border-danger border-start-0 border-end-0 border-bottom-0 border-5">
  <div class="card-body">
    <h5 class="card-title">Data Scienst</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
  <div>
  <img src={data} class="card-img-bottom w-50 h-75 float-end "/>
  </div>
</div>

<div class="card col-lg-5 col-md-5 col-sm-12 rounded-5  border-success border-start-0 border-end-0 border-bottom-0 border-5">
  <div class="card-body">
    <h5 class="card-title">NOT Developer</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
  <div>
  <img src={data2} class="card-img-bottom w-50 h-75  float-end" alt="..."/>
  </div>
</div>

<div class="card col-lg-5 col-md-5 col-sm-12 rounded-5  border-primary border-start-0 border-end-0 border-bottom-0 border-5 ">
  <div class="card-body">
    <h5 class="card-title">VR Developer</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
  <div>
  <img src={data3} alt="..."className="image w-50 h-75  d-flex float-end"/>
  </div>
</div>

<div class="card col-lg-5 col-md-5 col-sm-12 rounded-5  border-warning border-start-0 border-end-0 border-bottom-0 border-5  ">
  <div class="card-body">
    <h5 class="card-title">ML Engineering</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
  <div>
  <img src={data1} class="card-img-bottom w-50 h-75 float-end" alt="..."/>
  </div>
</div>

          </div>
        </div>
      </div>


  );
}