import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function Definidor(props){
    
    return(
        <div>
            <h3 id={"eitqueta"+props.titulo}>{props.titulo}</h3>
            <button>
                <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
            </button>
            <span id={"numero"+props.titulo}></span>
            <button>
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            </button>
            
        </div>
    );
}