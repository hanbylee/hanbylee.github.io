import styled from "styled-components";
import Header from "../components/Header";

const StyledAbout = styled.div`
    height: 100vh;
    background: black;
`;

function About() {
    return(
        <StyledAbout>
            <Header />
        </StyledAbout>
    );
}

export default About;