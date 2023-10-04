import styled from "styled-components";
import Cat from "../../components/Cat";
import Navbar from "../../components/Navbar";

export default function ManagePage(){
    return(
        <ManageContainer>
            <h1>Gerencie seus gatinhos!</h1>
            <ul>
                <Cat/>
            </ul>
            <Navbar/>
        </ManageContainer>
    )
}

const ManageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`