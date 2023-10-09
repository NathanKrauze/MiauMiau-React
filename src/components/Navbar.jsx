import styled from "styled-components";
import black_logo from "../assets/black_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AddBox, Home, Settings } from "@mui/icons-material";
import { useContext, useState } from "react";
import PageContext from "../contexts/PageContext";

export default function Navbar() {

    const {currentPage, setCurrentPage} = useContext(PageContext);
    const navigate = useNavigate()

    const changePage = (event, newValue) => {
        setCurrentPage(newValue);
        switch(newValue){
            case 'Página Inicial':
                navigate('/home');
                break;
            case 'Gerenciar':
                navigate('/manage');
                break;
            case 'Adicionar':
                navigate('/add');
                break;
            default:
                navigate('/home');
        }
      };

    return (
        <NavbarContainer>
            <BottomNavigation sx={{ width: 500, backgroundColor: '#FFC278' }} value={currentPage} onChange={changePage}>
                <BottomNavigationAction
                    label="Página Inicial"
                    value="Página Inicial"
                    icon={<Home />}
                />
                <BottomNavigationAction
                    label="Gerenciar"
                    value="Gerenciar"
                    icon={<Settings />}
                />
                <BottomNavigationAction
                    label="Adicionar"
                    value="Adicionar"
                    icon={<AddBox />}
                />
            </BottomNavigation>
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
    height: 65px;
    box-shadow: 0 0 6px -1px black;
    img{
        width: 40px;
    }
    a{
        color: black;
        text-decoration: none;
    }
`

const LinkTitle = styled.h2`
    font-size: 14px;
`