import React, { useEffect, useState } from "react";
import Amazon from "./pngwingc8.png"


export function FakestoreApi() {
    const [viewData, setViewData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setViewData(data))
    });
    return (
        <>
        <img src={Amazon} class="rounded mx-auto d-block w-25 h-25 mt-2" alt="..."></img>
            <div className="row mt-3">
            {viewData.map((value, index) => (
                <>
                    <div class="card col-lg-3 p-4">
                        <div class="row g-0">
                            <div class="col-md-4">
                                {value.id}
                                <img src={value.image} class="card-img w-40"  alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p className="card-text">Category:{value.category}</p>
                                    <h5 class="card-title">{value.title}</h5>
                                    <h6 className="card-title">Price $:{value.price}</h6>
                                    <p class="card-text">{value.description} </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </>
            ))}
            </div>

        </>
    );
}