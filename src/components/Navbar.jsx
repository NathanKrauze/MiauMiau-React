import styled from "styled-components";
import black_logo from "../assets/black_logo.png";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <NavbarContainer>
            <img src={black_logo} alt="logo" />
            <div>
                <div>icon</div>
                <Link to={'/home'}>
                    <LinkTitle>Tela inicial</LinkTitle>
                </Link>
            </div>
            <div>
                <div>icon</div>
                <Link to={'/manage'}>
                    <LinkTitle>Gerenciar</LinkTitle>
                </Link>
            </div>
            <div>
                <div>icon</div>
                <Link to={'/add'}>
                    <LinkTitle>Adicionar</LinkTitle>
                </Link>
            </div>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #FFC278;
    width: 100vw;
    height: 70px;
    box-shadow: 0 0 6px -1px black;
    img{
        width: 40px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    a{
        color: black;
        text-decoration: none;
    }
`

const LinkTitle = styled.h2`
    font-size: 14px;
`