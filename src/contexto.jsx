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
        setTimeout(()=>{
            setTiempoActualSeg(t=>{
                if(tiempoActualSeg===0){setTiempoActualSeg(59)}
                return encendido===true?t-1:t
            });
        },1000);
    },[tiempoActualSeg,encendido]);

    return(
        <MyContext.Provider value={{encendido, setEncendido, sesion, setSesion, tiempoSesion, setTiempoSesion, tiempoBreak, setTiempoBreak, tiempoActualMin, setTiempoActualMin, tiempoActualSeg, setTiempoActualSeg}}>
            {props.children}
        </MyContext.Provider>
    );
}