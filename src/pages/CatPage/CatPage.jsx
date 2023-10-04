import styled from "styled-components"
import Navbar from "../../components/Navbar"

export default function CatPage() {
    return (
        <CatPageContainer>
            <CatImg src="https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg" alt="cat" />
            <div>
                <div>
                    <InfoTitle>Sobre</InfoTitle>
                    <h3>Nome</h3>
                    <h4>Felix</h4>
                    <h3>Características</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam congue quam vitae auctor ultricies.
                        Curabitur laoreet metus eu dignissim porttitor.
                        Quisque quis eleifend elit. Morbi et faucibus diam.
                        Donec sodales.</h4>
                </div>
                <div>
                    <InfoTitle>Informações para contato</InfoTitle>
                    <h3>Tutor</h3>
                    <h4>Nathan Kraze</h4>
                    <h3>telefone</h3>
                    <h4>27998765432</h4>
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
    margin-bottom: 15px;

`

const InfoTitle = styled.div`
    font-weight: 700;
    font-size: 25px;
    margin: 8px 0 ;
`