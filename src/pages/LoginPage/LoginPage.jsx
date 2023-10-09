import { styled } from "styled-components"
import text_logo from "../../assets/text_logo.png"
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function SignInPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const navigate = useNavigate();

    function saveToken(respToken) {
        localStorage.setItem('token', respToken);
        navigate('/home');
    }

    function signIn(e) {
        e.preventDefault();

        axios.post(`${import.meta.env.VITE_API_URL}/signin`, { email, password })
            .then((res) => saveToken(res.data.token))
            .catch((err) => alert(err.message));
    }


    return (
        <SignInContainer>
            <img src={text_logo} alt="logo" />
            <h1>Login</h1>
            <form onSubmit={signIn}>
                <TextField
                    id="outlined-textarea"
                    label="E-mail"
                    placeholder="E-mail"
                    multiline
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <FormControl sx={{ m: 1, width: '25ch', margin: '8px 0' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}    
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Senha"
                        required
                    />
                </FormControl>
                <Button variant="contained" type="submit">Entrar</Button>
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
        margin-bottom: 15px;
        width: 200px;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 8px;
    }
    a{
        color: black;
        text-decoration: none;
    }
    h1{
        font-size: 28px;
    }
`;

const LinkSignUp = styled.div`
    margin-top: 14px;
    color: #1976D2;
`

