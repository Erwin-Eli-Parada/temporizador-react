import React from "react";
import { useContext } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlay, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "./contexto";

export function Reloj(props){
    const {tiempoActualMin, tiempoActualSeg, encendido, setEncendido} = useContext(MyContext);

    return(
        <div id="reloj">
            <h2>Sesion</h2>
            <span id="contador">{tiempoActualMin+":"+((tiempoActualSeg/10)<1?"0"+tiempoActualSeg:tiempoActualSeg)}</span>
            <div id="botones">
                <button id="play-pause" onClick={e=>{
                    setEncendido(!encendido)
                }}>
                    <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                </button>
                <button id="restar">
                    <FontAwesomeIcon icon={faRotateRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
}