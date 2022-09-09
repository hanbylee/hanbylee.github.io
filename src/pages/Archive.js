import styled from "styled-components";
import Header from "../components/Header";
import { Bottom } from "../components/Bottom";
import Footer from "../components/Footer";


const StyledArchive = styled.div`
    height: 100vh;
    background: black;
`;

function Archive() {
    return(
        <StyledArchive>
            <Header />
            <Bottom />
            <Footer />
        </StyledArchive>
    );
}

export default Archive;