import React from "react";
import { createContext, useState, useEffect} from "react";

export const MyContext = createContext();

export function MyContextProvider(props){
    const [encendido, setEncendido] = useState(false);
    const [sesion, setSesion] = useState (true);
    const [tiempoSesion, setTiempoSesion] = useState(25);
    const [tiempoBreak, setTiempoBreak] = useState(5);
    const [tiempoActualMin, setTiempoActualMin]= useState(tiempoSesion);
    const [tiempoActualSeg, setTiempoActualSeg]= useState(0);

    useEffect(()=>{
        let intervalo;
    
        if (!intervalo && encendido) {
            intervalo = setInterval(() => {
                if(tiempoActualSeg<=0){setTiempoActualSeg(59)}else{
                setTiempoActualSeg(tiempoActualSeg-1);
                }
            }, 100);
        }
        return()=>{
            console.log("se limpia intervalo"+intervalo);
            clearInterval(intervalo);
            intervalo = null;
        }
    });

    return(
        <MyContext.Provider value={{encendido, setEncendido, sesion, setSesion, tiempoSesion, setTiempoSesion, tiempoBreak, setTiempoBreak, tiempoActualMin, setTiempoActualMin, tiempoActualSeg, setTiempoActualSeg}}>
            {props.children}
        </MyContext.Provider>
    );
}
