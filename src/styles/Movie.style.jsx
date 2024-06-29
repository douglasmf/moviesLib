import styled from "styled-components";

export const MovieContainer = styled.main`
  color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 2rem auto;
  svg {
    font-size: 1.5rem;
    color: var(--primary);
  }
  .movieCard {
    width: 100%;
    text-align: center;
    img {
        margin-bottom: 1rem;
    }
    h2 {
        margin-bottom: 1rem;
        font-size: 2rem;
    }
    p {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
    }
  }
  @media (max-width: 999px){
    max-width: 550px;
  }
  @media (max-width: 769px){
    max-width: 450px;
    .movieCard{
      h2{
        font-size: 1.7rem;
      }
    }
  }
  @media (max-width: 485px){
    max-width: 400px;
    .movieCard{
      h2{
        font-size: 1.6rem;
      }
    }
  }
`;
export const Tagline = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

export const Info = styled.div`
  margin-bottom: 1.5rem;
  h3 {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  @media (max-width: 485px){
    padding: 0 1rem; 
  }
`;

export const InfoDescription = styled(Info)`
    p {
        line-height: 1.4rem;
    }
`;
