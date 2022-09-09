import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.css";

const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
    }

    :root {
        font-size: 10px;
    }

    body {
        margin: 0;
        overflow: overlay;
        overflow-x: hidden;

        ::-webkit-scrollbar { 
            width: 1rem;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 0.5rem;
            background-color: rgba(255, 255, 255, 0.2);
        }
    }

    h1 {
        font-family: ${(p) => p.theme.font.family.sans};
        font-size: clamp(3.2rem, 8.6vw, 4.8rem);
        font-weight: 600;
        color: white;
        line-height: 240%;
    }

    h2 {
        font-family: ${(p) => p.theme.font.family.sans};
        font-size: clamp(2.8rem, 7.5vw, 3.6rem);
        font-weight: 600;
        color: white;
        line-height: 240%;
    }

    h3 {
        font-family: ${(p) => p.theme.font.family.sans};
        font-size: clamp(2.4rem, 6.4vw, 3rem);
        font-weight: 500;
        color: white;
        line-height: 240%;
    }

    h4 {
        font-family: ${(p) => p.theme.font.family.sans};
        font-size: clamp(2rem, 5.4vw, 2.4rem);
        font-weight: 500;
        color: white;
        line-height: 160%;
    }

    h5 {
        font-family: ${(p) => p.theme.font.family.sans};
        font-size: clamp(1.6rem, 4.3vw, 2rem);
        font-weight: 500;
        color: white;
        line-height: 160%;
    }

    h6 {
        font-family: ${(p) => p.theme.font.family.sans};
        font-size: clamp(1.2rem, 3.2vw, 1.6rem);
        font-weight: 500;
        color: white;
        line-height: 160%;
    }

    p {
        font-family: ${(p) => p.theme.font.family.korean};
        font-size: clamp(1.2rem, 3.2vw, 1.6rem);
        font-weight: 300;
        color: white;
        line-height: 180%;
        margin-bottom: 1.6rem;
    }
`;

export default GlobalStyle;