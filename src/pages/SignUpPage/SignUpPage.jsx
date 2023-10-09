import { styled } from "styled-components";
import text_logo from "../../assets/text_logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function SignUpPage() {

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();

    function signUp(e) {
        e.preventDefault();
        if (password !== confirmPassword) return alert("Password must be equal!");

        axios.post(`${import.meta.env.VITE_API_URL}/signup`, { name, cpf, phone, email, password, confirmPassword })
            .then(() => navigate("/"))
            .catch((err) => alert(err.response.data))
    }


    return (
        <SignUpContainer>
            <img src={text_logo} alt="logo" />
            <h1>Cadastro</h1>
            <form onSubmit={signUp}>
                <TextField  sx={{ m: 1, width: '25ch', margin: '4px 0' }}
                    id="outlined-textarea"
                    label="Nome"
                    placeholder="Nome"
                    multiline
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <TextField sx={{ m: 1, width: '25ch', margin: '4px 0' }}
                    id="outlined-textarea"
                    label="CPF"
                    placeholder="CPF"
                    multiline
                    type="text"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required
                />
                <TextField sx={{ m: 1, width: '25ch', margin: '4px 0' }}
                    id="outlined-textarea"
                    label="Telefone"
                    placeholder="Telefone"
                    multiline
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                />
                <TextField sx={{ m: 1, width: '25ch', margin: '4px 0' }}
                    id="outlined-textarea"
                    label="E-mail"
                    placeholder="E-mail"
                    multiline
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <FormControl sx={{ m: 1, width: '25ch', margin: '4px 0' }} variant="outlined">
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
                <FormControl sx={{ m: 1, width: '25ch', margin: '4px 0' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
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
                <Button variant="contained" type="submit" sx={{ margin: '4px 0' }}>Cadastrar</Button>
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
        margin-bottom: 15px;
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
`

const LinkSignIn = styled.p`
    margin-top: 8px;
    color: #1976D2;
`