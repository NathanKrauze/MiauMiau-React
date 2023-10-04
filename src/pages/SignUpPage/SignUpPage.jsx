import { styled } from "styled-components";
import text_logo from "../../assets/text_logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpPage(){

    const[name, setName] = useState("")
    const[cpf, setCpf] = useState("")
    const[phone, setPhone] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    function signUp(e) {

        e.preventDefault();

        if (password !== confirmPassword) return alert("Password must be equal!");

        axios.post(`${import.meta.env.VITE_API_URL}/signup`, { name, cpf, phone, email, password, confirmPassword })
            .then(() => navigate("/home"))
            .catch((err) => alert(err.message))

    }


    return(
        <SignUpContainer>
            <img src={text_logo} alt="logo" />
            <form onSubmit={signUp}>
                <input 
                    placeholder="Nome" 
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required></input>
                <input 
                    placeholder="CPF" 
                    type="text"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required></input>
                <input 
                    placeholder="Telefone" 
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}></input>
                <input 
                    placeholder="E-mail" 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}></input>
                <input 
                    placeholder="Senha" 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}></input>
                <input 
                    placeholder="Confirme sua senha" 
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}></input>
                <button type="submit">Cadastrar</button>
            </form>
            <Link to={'/'}>
                <LinkSignIn>Já possui conta? faça o login!</LinkSignIn>
            </Link>
        </SignUpContainer>
    )
};

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    img{
        width: 200px;
    }
    form{
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 24px;
    }
    a{
        color: black;
        text-decoration: none;
    }
`

const LinkSignIn = styled.p`
    margin-top: 8px;
`