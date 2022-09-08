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
    }

    h1 {
        font-family: ${(p) => p.theme.font.family.sans};
        font-size: clamp(3.2rem, 3.4vw, 4.8rem);
        font-weight: 700;
        color: white;
        line-height: 120%;
    }

    h2 {

    }

    h3 {

    }

    h4 {
        font-family: ${(p) => p.theme.font.family.sans};
        font-size: clamp(2rem, 1.7vw, 2.4rem);
        font-weight: 500;
        color: white;
    }

    h5 {
        font-family: ${(p) => p.theme.font.family.sans};
        font-size: clamp(1.6rem, 1.4vw, 2rem);
        font-weight: 500;
        color: white;
    }

    h6 {
        font-family: ${(p) => p.theme.font.family.serif};
        font-size: 2rem;
        font-weight: 500;
        color: white;
    }

    p {
        font-family: ${(p) => p.theme.font.family.korean};
        font-size: 1.6rem;
        font-weight: 500;
        color: white;
    }
`;

export default GlobalStyle;