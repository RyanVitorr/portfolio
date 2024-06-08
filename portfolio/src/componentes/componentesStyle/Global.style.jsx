import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    :root {
        --cor1: white;
        --cor2: black;
        --cor3: rgba(78, 117, 190, 0.74);
        --cor4: rgb(80, 80, 80);
        --cor5: rgba(221, 221, 221, 0.849);
        --cor6: rgba(240, 239, 239, 0.973);
        --cor7: rgb(221, 221, 221);
    }

    body {
        background-color: var(--cor7);
    }

`