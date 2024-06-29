import styled from "styled-components";

export const HomeContainer = styled.main`
    max-width: 1200px;
    margin: 4rem auto;
    
    display: flex;
    justify-content: center;
    .movie{
        width: 50%;
        height: 600px;
        img{
            height: 500px;
        }
    }
    @media (max-width: 769px) {
        .movie {
            width: 70%;
            
        }
    }
    @media (max-width: 565px) {
        .movie {
            width: 80%;
            
        }
    }
`;

