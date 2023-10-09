import styled from "styled-components";
import Cat from "../../components/Cat";
import Navbar from "../../components/Navbar";
import black_logo from "../../assets/black_logo.png"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ManagePage() {
    const [cats, setCats] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    const auth = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        if (!token) return navigate('/');

        axios.get(`${import.meta.env.VITE_API_URL}/users/cats`, auth)
            .then(res => setCats(res.data))
            .catch(err => alert(err.response.data));
    }, []);

    return (
        <ManageContainer>
            <header>
                <img src={black_logo} alt="logo" />
                <h1>Disponibilize seu miaudelos</h1>
            </header>
            <ul>
                {cats.map(cat => <Cat cat={cat} key={cat.id} manage={true} />)}
            </ul>
            <Navbar />
        </ManageContainer>
    )
}

const ManageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
 
`