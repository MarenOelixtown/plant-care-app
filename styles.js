import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :root {
  --primary-color: #224722;  
  --secondary-stroke-color: #8d2828;
  --secondary-bg-color: #f1a4a4;
}
  body {
    margin: 0;    
    font-family: sans-serif;
    background: linear-gradient(0deg, rgba(196,222,169,1) 0%, rgba(231,237,222,1) 35%, rgba(255,255,255,1) 100%);
    min-height: 100vh;   
    
  }
  main {
    padding-bottom: 4rem;
  }
`;
