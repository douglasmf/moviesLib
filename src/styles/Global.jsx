import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    --primary: #f7d354;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Helvetica;
  }

  body {
    width: 100vw;
    background-color: #000;
    color: #fff;
    overflow-x: hidden;
  }
 
  a {
    text-decoration: none;
    color: #f7d354;
    transition: .5s;
  }

  a:hover {
    color: #b8930c;
  }
`;