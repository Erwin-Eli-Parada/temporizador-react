import React from "react";

export function Definidor(props){
    
    return(
        <div>
            <h3 id={"eitqueta"+props.titulo}>{props.titulo}</h3>
            <button>

            </button>
            <span id={"numero"+props.titulo}></span>
            <button>

            </button>
        </div>
    );
}