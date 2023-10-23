import React from "react";

export const EjemploS = () => {
    return React.createElement(
        "button",
        { id: "botoncito" },
        "ClickeameS"
    );
};

export const EjemploCJSX = () => {
    return <button id="botoncito">
        clickeame
    </button>
};

export const EjemploFuncional = () => {
    const saludo = "Hola";
    return <h1>{saludo}</h1>
};

