import React from "react";
import { useContext } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlay, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "./contexto";

export function Reloj(props){
    const {tiempoActualMin, setTiempoActualMin, tiempoActualSeg, setTiempoActualSeg, encendido, setEncendido, tiempoSesion} = useContext(MyContext);

    return(
        <div id="reloj">
            <h2>Sesion</h2>
            <span id="contador">{tiempoActualMin+":"+((tiempoActualSeg/10)<1?"0"+tiempoActualSeg:tiempoActualSeg)}</span>
            <div id="botones">
                <button id="play-pause" onClick={e=>{
                    setEncendido(!encendido);
                    // if(encendido){
                    //     contar(tiempoActualSeg, setTiempoActualSeg);
                    // }else{
                    //     noContar();
                    // }
                }}>
                    <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                </button>
                <button id="restart" onClick={e=>{
                    setEncendido(false);
                    setTiempoActualMin(tiempoSesion);
                    setTiempoActualSeg(0);
                }}>
                    <FontAwesomeIcon icon={faRotateRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
}

// let intervaloId;

// function contar(tiempoActualSeg, setTiempoActualSeg) {
//     if (!intervaloId) {
//         intervaloId = setInterval(() => {
//             setTiempoActualSeg(() => {
//                 console.log("aqui esta el establecer, tiempo actual es"+tiempoActualSeg);
//                 if (tiempoActualSeg <= 0) { return 59 }
//                 return tiempoActualSeg - 1
//             });
//         }, 1000);
//     }
//     console.log("aqui esta intervalo" + intervaloId);
// }

// function noContar() {
//     console.log("aqui se limpia " + intervaloId);
//     clearInterval(intervaloId);
//     intervaloId = null;
// }