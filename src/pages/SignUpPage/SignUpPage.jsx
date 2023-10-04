import { styled } from "styled-components";
import text_logo from "../../assets/text_logo.png";

export default function SignUpPage(){
    return(
        <SignUpContainer>
            <img src={text_logo} alt="logo" />
            <form>
                <input placeholder="Nome" type="text"></input>
                <input placeholder="CPF" type="text"></input>
                <input placeholder="Telefone" type="text"></input>
                <input placeholder="E-mail" type="email"></input>
                <input placeholder="Senha" type="password"></input>
                <input placeholder="Confirme sua senha" type="password"></input>
                <button type="submit">Cadastrar</button>
            </form>
            <LinkSignIn>Já possui conta? faça o login!</LinkSignIn>
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

`

const LinkSignIn = styled.div`
    margin-top: 8px;
`