import styled from "styled-components";
import Cat from "../../components/Cat";
import Navbar from "../../components/Navbar";

export default function HomePage(){
    return(
        <HomeContainer >
            <h1>Miaudelos disponíveis!</h1>
            <ul>
                <Cat/>
            </ul>
            <Navbar/>
        </HomeContainer>
    )
};

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

`
