import styled from "styled-components"

export default function Cat() {
    return (
        <>
            <CatContainer>
                <img src="https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg" alt="cat" />
                <h2>Felix</h2>
            </CatContainer>
            <CatContainer>
                <img src="https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg" alt="cat" />
                <h2>Felix</h2>
            </CatContainer>
            <CatContainer>
                <img src="https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg" alt="cat" />
                <h2>Felix</h2>
            </CatContainer>
            <CatContainer>
                <img src="https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg" alt="cat" />
                <h2>Felix</h2>
            </CatContainer>
            <CatContainer>
                <img src="https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg" alt="cat" />
                <h2>Felix</h2>
            </CatContainer>
            <CatContainer>
                <img src="https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg" alt="cat" />
                <h2>Felix</h2>
            </CatContainer>
            <CatContainer>
                <img src="https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg" alt="cat" />
                <h2>Felix</h2>
            </CatContainer>
            <CatContainer>
                <img src="https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg" alt="cat" />
                <h2>Felix</h2>
            </CatContainer>
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
`