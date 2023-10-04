import { styled } from "styled-components"
import text_logo from "../../assets/text_logo.png"
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";

export default function SignInPage(){

    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const {setToken} = useContext(AuthContext);

    const navigate = useNavigate();

    function saveToken(respToken){
        setToken(respToken);
        localStorage.setItem('token', respToken);
        navigate('/home');
    }

    function signIn(e) {
        e.preventDefault();

        axios.post(`${import.meta.env.VITE_API_URL}/signin`, {email, password})
            .then((res) => saveToken(res.data.token))
            .catch((err) => alert(err.message));
    }


    return(
        <SignInContainer>
            <img src={text_logo} alt="logo"/>
            <form onSubmit={signIn}>
                <input
                    placeholder="E-mail" 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required/>
                <input 
                    placeholder="Senha" 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required/>
                <button>Entrar</button>
            </form>
            <Link to={'/sign-up'}>
                <LinkSignUp>Primeira vez? cadastre-se!</LinkSignUp>
            </Link>
        </SignInContainer>
    )
}

const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    img{
        width: 200px;
    }
    form{
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 24px;
    }
    a{
        color: black;
        text-decoration: none;
    }
`;

const LinkSignUp = styled.div`
    margin-top: 8px;
`

