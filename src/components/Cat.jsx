import { FormControlLabel, Switch } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Cat({ cat, manage }) {
    const { id, name, photo } = cat;

    const [available, setAvailable] = useState(cat.available);

    const token = localStorage.getItem('token');

    const auth = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    function updateDisponibility(e) {
        setAvailable(e.target.checked);
        const available = e.target.checked;
        axios.put(`${import.meta.env.VITE_API_URL}/cats/${id}`, { available }, auth)
            .then(() => console.log('atualizado'))
            .catch(err => alert(err.response.data))
    }

    if (manage) return (
        <>
            <CatContainer>
                <img src={photo} alt="cat" />
                <Line></Line>
                <h2>{name}</h2>
                <FormControlLabel
                    control={<Switch
                        checked={available}
                        onChange={(e) => updateDisponibility(e)} />}
                    label="Disponível?"
                    labelPlacement="top"
                />
            </CatContainer>
        </>
    )

    else if (!available) return(
            <></>
        )
     else return (
        <>
            <Link to={`/cat/${id}`}>
                <CatContainer>
                    <img src={photo} alt="cat" />
                    <Line></Line>
                    <h2>{name}</h2>
                </CatContainer>
            </Link>
        </>
    )
}

const CatContainer = styled.li`
    margin: 13px ;
    display: flex;
    align-items: center;
    width: calc(100vw - 26px);
    position: relative;
    padding: 8px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 3px;
    border: 1px solid #a3a3a3;
    img{
        width: 140px;
        height: 90px;
        object-fit: cover;
        border-radius: 3px;
    }
    h2{
        height: 100%;
        font-weight: 700;
        font-size: 22px;
    }
    label{
        position: absolute;
        top: 17px;
        right: -5px;
    }
`
const Line = styled.span`
    height: 90px;
    margin: 0 15px;
    border-left: 1px solid #a3a3a3;
`