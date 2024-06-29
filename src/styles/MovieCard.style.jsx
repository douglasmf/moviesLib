import styled from "styled-components";

export const MovieCardStyle = styled.div`
  width: 30%;
  color: #fff;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #111;
  padding: 1rem;
  img {
    max-width: 100%;
  }
  img, p, h2 {
    margin-bottom: 1rem;
  }

  svg {
    color: #f7d354;
  }

  a {
    background-color: #f7d354;
    border: 2px solid #f7d354;
    border-radius: 4px;
    color: #000;
    font-weight: bold;
    padding: 1rem 0.5rem;
    transition: .4s;
    text-align: center;
  }

  a:hover {
    background-color: transparent;
    color: #f7d354;
  }

  @media(max-width: 768px){
    width: 45%;
  }
  @media(max-width: 450px){
    width: 100%;
  }
`;