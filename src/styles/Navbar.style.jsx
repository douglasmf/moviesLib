import styled from "styled-components";

export const NavbarStyle = styled.nav`
  max-width: 100%;
  padding: 1rem 3rem 1rem 2rem;
  background-color: #121212;
  @media (max-width: 568px){
    padding: 1rem 1.5rem 1rem 1.5rem; 
  }
  
`;

export const NavbarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  a {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  @media (max-width: 450px){
    .titulo {
      display: none;
    }
  }
`;

export const Form = styled.form`
  width: 40%;
  display: flex;
  align-items: center;
  gap: .3rem;
  input {
    width: 100%;
    padding: .6rem .8rem;
    border-radius: 4px;
    border: none;
    outline: none;
    
  }
  input:focus {
    outline: 3px solid #f7d354;
  }
  button {
    background-color: #f7d354;
    border: 2px solid #f7d354;
    border-radius: 4px;
    color: #000;
    padding: 0.3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .4s;
  }
  button:hover {
    background-color: transparent;
    color: #f7d354;
  }

  @media(max-width: 450px){
    width: 50%;
  }
`;

export const ButtonOpenMenu = styled.button`
  background-color: transparent;
  border: none;
  svg {
    font-size: 2.5rem;
    color: #fff;
  }
  @media (min-width: 770px){
    display: none;
  }
`;

export const MenuSM = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  padding: 3rem 2rem 2rem 2rem;
  background-color: #111;
  display: ${props => (props.open ? 'block' : 'none')};
  transition: 1s;
  h4 {
    text-align: center;
    color: #f7d354;
    margin-bottom: .3rem;
  }
  @media (min-width: 769px){
    display: none;
  }

  @media (max-width: 550px){
    width: 50%;
    padding: 2rem 1rem 1rem 1rem;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 2rem;
  a{
    font-size: .9rem;
    font-weight: bold;
    color: #fff;
    transition: .5s;
    letter-spacing: .1rem;
    
  }
  a:hover {
    color: #f7d354;
  }

  @media (max-width: 550px){
    a {
      font-size: .8rem;
    }
  }
`;

export const ButtonCloseMenu = styled.button`
  position: absolute;
  top: 2%;
  right: 6%;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: #fff;
`;

export const MenuLgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MenuLG = styled.nav`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  a {
    font-weight: bold;
    letter-spacing: .1rem;
    color: #fff;
    transition: .4s;
  }

  a:hover {
    color:#f7d354;
  }

  @media (max-width: 769px){
    display: none;
  }
`;
