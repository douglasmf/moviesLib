import styled from "styled-components";

export const Title = styled.h2`
  color: #ffffff;
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0 1rem;
  .queryText {
    color: #f7d354;
  }
  @media (max-width: 450px){
    font-size: 2rem;
    margin: 1.5rem 0 0;
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;