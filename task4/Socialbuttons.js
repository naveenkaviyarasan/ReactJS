import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './Socialbuttons.css'



export function Socialbuttons(){
    return(
        <>
        <div className="back">
        <div className="container text-center position-absolute top-50 start-50 translate-middle">
            <h1 className="text-white">Social buttons</h1>
            <div className="Card">
            <button type="button" class="btn btn-warning">Like</button>
            <button type="button" class="btn btn-light">Comment</button>
            <button type="button" class="btn btn-primary">Share</button>
        </div>
        </div>
        </div>
        </>
    );
}