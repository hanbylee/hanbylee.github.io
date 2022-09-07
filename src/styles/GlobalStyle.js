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
        font-size: 6.4rem;
        font-weight: 700;
    }
`;

export default GlobalStyle;