import { styled } from "styled-components"
import text_logo from "../../assets/text_logo.png"

export default function SignInPage(){
    return(
        <SignInContainer>
            <img src={text_logo} alt="logo"/>
            <form>
                <input placeholder="E-mail" type="email"></input>
                <input placeholder="Senha" type="password"></input>
                <button>Entrar</button>
            </form>
            <LinkSignUp>Primeira vez? cadastre-se!</LinkSignUp>
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
`;

const LinkSignUp = styled.div`
    margin-top: 8px;
`

