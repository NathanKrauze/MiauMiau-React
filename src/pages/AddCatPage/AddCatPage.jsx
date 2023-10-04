import styled from "styled-components";
import logo from "../../assets/logo.png"
import Navbar from "../../components/Navbar";

export default function AddCatPage() {
    return (
        <AddContainer>
            <BackImg src={logo} alt="" />
            <AddText>Registre<br /> seu<br /> Miaudelo!!</AddText>
            <form>
                <input placeholder="Nome" type="text"></input>
                <input placeholder="Foto" type="url"></input>
                <input placeholder="Características" type="text"></input>
                <button>Registrar</button>
            </form>
            <Navbar />
        </AddContainer>
    )
}

const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: white;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 110px;
        z-index: 1;
    }
`

const BackImg = styled.img`
    width: 400px;
    position: fixed;
    bottom: -67px;
    left: -95px;
    z-index: 0;
`

const AddText = styled.h2`
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 30px;
    margin-bottom: 18px;
    z-index: 1;
`