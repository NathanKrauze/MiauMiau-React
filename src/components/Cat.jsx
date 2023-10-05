import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Cat({ cat }) {
    const { id, name, photo } = cat;

    return (
        <>
            <Link to={`/cat/${id}`}>
                <CatContainer>
                    <img src={photo} alt="cat" />
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
    img{
        width: 140px;
    }
    h2{
        margin-left: 15px;
    }
    a{
        color: black;
        text-decoration: none;
    }
`