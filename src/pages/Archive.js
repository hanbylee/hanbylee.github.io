import styled from "styled-components";
import Header from "../components/Header";

const StyledArchive = styled.div`
    height: 100vh;
    background: black;
`;

function Archive() {
    return(
        <StyledArchive>
            <Header />
        </StyledArchive>
    );
}

export default Archive;