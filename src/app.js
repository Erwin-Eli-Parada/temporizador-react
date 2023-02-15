import React from "react";
import { Definidor } from "./definidor";
import { Reloj } from "./reloj";

export function App(props){
    return(
        <div id="temporizador">
            <h1>Reloj de 25 + 5</h1>
            <div id="cuerpo">
                <Definidor titulo="Tiempo de descanso"></Definidor>
                <Definidor titulo="Tiempo de sesion"></Definidor>
                <Reloj></Reloj>
            </div>
        </div>
    );
}