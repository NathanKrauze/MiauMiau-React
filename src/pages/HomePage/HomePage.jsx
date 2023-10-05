import styled from "styled-components";
import Cat from "../../components/Cat";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage(){

    const [cats, setCats] = useState([]);
    const navigate= useNavigate();

    const token = localStorage.getItem('token');

    const auth = {
        headers: {
          authorization: `Bearer ${token}`
        }
    }

    useEffect(()=>{
        if(!token) return navigate('/');

        axios.get(`${import.meta.env.VITE_API_URL}/cats`, auth)
        .then(res => setCats(res.data))
        .catch(err => alert(err.response.data));
    },[]);

    return(
        <HomeContainer >
            <h1>Miaudelos disponíveis!</h1>
            <ul>
                {cats.map(cat => <Cat cat={cat} key={cat.id}/>)}
            </ul>
            <Navbar/>
        </HomeContainer>
    )
};

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    a{
        color: black;
        text-decoration: none;
    }
`
