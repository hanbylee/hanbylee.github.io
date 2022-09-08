import styled from "styled-components";

const GlobalOuter = styled.div`
    display: flex;
    width: 100%;
    max-width: 144rem;
    height: inherit;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const GlobalInner = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    margin: 0 ${(p) => p.theme.size.innerMargin};
`;

export { GlobalOuter, GlobalInner };