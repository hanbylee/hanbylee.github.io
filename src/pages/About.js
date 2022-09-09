import styled from "styled-components";
import Header from "../components/Header";
import { Bottom } from "../components/Bottom";
import Footer from "../components/Footer";

const StyledAbout = styled.div`
    height: 100vh;
    background: black;
`;

function About() {
    return(
        <StyledAbout>
            <Header />
            <Bottom />
            <Footer />
        </StyledAbout>
    );
}

export default About;