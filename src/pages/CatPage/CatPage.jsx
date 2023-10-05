import styled from "styled-components"
import Navbar from "../../components/Navbar"
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CatPage() {
    const [cat, setCat] = useState([]);
    const navigate= useNavigate();
    const {catId} = useParams();

    const token = localStorage.getItem('token');

    const auth = {
        headers: {
          authorization: `Bearer ${token}`
        }
    }

    useEffect(()=>{
        if(!token) return navigate('/');

        axios.get(`${import.meta.env.VITE_API_URL}/cats/${catId}`, auth)
            .then(res => setCat(res.data))
            .catch(err => alert(err.response.data));
    },[]);

    return (
        <CatPageContainer>
            <Link to={'/home'}>
                <button>{"<-"}</button>
            </Link>
            <CatImg src={cat.photo} alt="cat" />
            <div>
                <div>
                    <InfoTitle>Sobre</InfoTitle>
                    <h3>Nome</h3>
                    <h4>{cat.name}</h4>
                    <h3>Características</h3>
                    <h4>{cat.characteristics}</h4>
                </div>
                <div>
                    <InfoTitle>Informações para contato</InfoTitle>
                    <h3>Tutor</h3>
                    <h4>{cat.username}</h4>
                    <h3>Telefone</h3>
                    <h4>{cat.user_phone}</h4>
                </div>
            </div>
            <Navbar/>
        </CatPageContainer>
    )
}

const CatPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    h3{
        font-style: italic;
        font-size: 20px;
        margin: 3px 0 3px 8px;
    }
    h4{
        margin: 3px 0 3px 8px;
    }
`

const CatImg = styled.img`
    width: calc(100vw - 40px);
    margin: 15px 0;

`

const InfoTitle = styled.div`
    font-weight: 700;
    font-size: 25px;
    margin: 8px 0 ;
`