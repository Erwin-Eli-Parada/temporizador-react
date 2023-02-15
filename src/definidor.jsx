import React, { useContext } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "./contexto";

export function Definidor(props){
    const {setTiempoActualMin, tiempoSesion, setTiempoSesion, tiempoBreak, setTiempoBreak} = useContext(MyContext)

    return(
        <div>
            <h3 id={props.titulo+"-label"}>tiempo de {props.titulo}</h3>
            <button id={props.titulo+"-increment"} onClick={e=>{
                if(props.tipo==="descanso"){
                    if(tiempoBreak<60){
                        setTiempoBreak(tiempoBreak+1);
                    }
                }else{
                    if(tiempoSesion<60){
                        setTiempoSesion(tiempoSesion+1);
                        setTiempoActualMin(tiempoSesion+1);
                    }
                }
            }}>
                <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
            </button>
            <span id={props.titulo+"-length"}> {props.tipo==="descanso"?tiempoBreak:tiempoSesion} </span>
            <button id={props.titulo+"-decrement"} onClick={e=>{
                if(props.tipo==="descanso"){
                    if(tiempoBreak>1){
                        setTiempoBreak(tiempoBreak-1);
                    }
                }else{
                    if(tiempoSesion>1){
                        setTiempoSesion(tiempoSesion-1);
                        setTiempoActualMin(tiempoSesion-1);
                    }
                }
            }}>
                <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            </button>
            
        </div>
    );
}