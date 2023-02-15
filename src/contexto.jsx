import React from "react";
import { createContext, useState, useEffect} from "react";

export const MyContext = createContext();

export function MyContextProvider(props){
    const [encendido, setEncendido] = useState(false);
    const [sesion, setSesion] = useState (true);
    const [tiempoSesion, setTiempoSesion] = useState(25);
    const [tiempoBreak, setTiempoBreak] = useState(5);
    const [tiempoActual, setTiempoActual]= useState(tiempoSesion);

    useEffect(()=>{
        setTimeout(()=>{
            setTiempoActual(t=>encendido===true?t-1:t);
        },1000);
    },[tiempoActual,encendido]);

    return(
        <MyContext.Provider value={{encendido, setEncendido, sesion, setSesion, tiempoSesion, setTiempoSesion, tiempoBreak, setTiempoBreak, tiempoActual, setTiempoActual}}>
            {props.children}
        </MyContext.Provider>
    );
}