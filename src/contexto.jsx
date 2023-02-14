import React from "react";
import { createContext } from "react";

export const MyContext = createContext();

export function MyContextProvider(props){

    return(
        <MyContext.Provider>
            {props.children}
        </MyContext.Provider>
    );
}