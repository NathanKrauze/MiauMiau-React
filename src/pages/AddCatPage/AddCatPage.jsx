import styled from "styled-components";
import logo from "../../assets/logo.png"
import Navbar from "../../components/Navbar";
import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";

export default function AddCatPage() {

    const[name, setName] = useState('');
    const[photo, setPhoto] = useState('');
    const[characteristics, setCharacteristics] = useState('');

    const token = localStorage.getItem("token");

    const auth = {
        headers: {
          authorization: `Bearer ${token}`
        }
    };

    function addCat(e) {
        e.preventDefault();

        axios.post(`${import.meta.env.VITE_API_URL}/cats`, { name, photo, characteristics}, auth)
            .then(()=>alert('Miaudelo registrado com sucesso :)'))
            .catch((err) => alert(err.message))
    }

    return (
        <AddContainer>
            <BackImg src={logo} alt="" />
            <AddText>Registre<br /> seu<br /> Miaudelo!!</AddText>
            <form onSubmit={addCat}>
            <input 
                    placeholder="Nome" 
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required/>
                <input 
                    placeholder="Foto" 
                    type="text"
                    value={photo}
                    onChange={e => setPhoto(e.target.value)}
                    required/>
                <input 
                    placeholder="Características" 
                    type="text"
                    value={characteristics}
                    onChange={e => setCharacteristics(e.target.value)}
                    required/>
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