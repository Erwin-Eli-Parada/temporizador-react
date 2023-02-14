import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyContextProvider } from './contexto';
import { App } from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <MyContextProvider>
        <App />
    </MyContextProvider>
);


//root y contexto
    //temporizador
        //titulo
        //cuerpo
            //Definidor
                //etiqueta
                //boton arriba
                //numero
                //boton abajo
            //Definidor
                //etiqueta
                //boton arriba
                //numero
                //boton abajo    
            //reloj
                //etiqueta
                //contador
                //botones
                    //play-pause
                    //restart
