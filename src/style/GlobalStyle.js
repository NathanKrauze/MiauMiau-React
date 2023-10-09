import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: Roboto, sans-serif;
        background-color: white;
    }
    header{
        width: 100vw;
        background-color: #FFC278;
        height: 65px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        padding-left: 13px;
        font-size: 25px;
        z-index: 1;
        box-shadow: 0 0 6px -1px black;
        img{
            height: 40px;
            margin-right: 12px;
        }
    }
    ul{
        margin-top: 70px;
        padding-bottom: 70px;
    }
    a{
        color: black;
        text-decoration: none;
    }
`