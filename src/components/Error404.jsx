import React from "react";
import "../assets/css/error.css"

export default function Error404() {
    return (
        <div id="notfound" className={"container"}>
            <div className="notfound">
                <div className="notfound-404">
                    <h3>Oops! Página no encontrada</h3>
                    <h1><span>4</span><span>0</span><span>4</span></h1>
                </div>
                <h2>¡Hey! No encontramos la ruta que estás buscando. </h2>
            </div>
        </div>
    )
}