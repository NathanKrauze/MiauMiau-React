import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: Roboto, sans-serif;
    }
    h1{
        width: 100vw;
        background-color: #FFC278;
        height: 55px;
        display: flex;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        padding-left: 13px;
        padding-top: 15px;
        font-size: 25px;
    }
    ul{
        margin-top: 70px;
        padding-bottom: 70px;
    }
`