import styled from "styled-components";
import Header from "../components/Header";
import { Bottom } from "../components/Bottom";
import Footer from "../components/Footer";
import ArchiveContent from "../components/archive/ArchiveContent";


const StyledArchive = styled.div`
    background: black;
`;

function Archive() {
    return(
        <StyledArchive>
            <Header />
            <ArchiveContent />
            <Bottom />
            <Footer />
        </StyledArchive>
    );
}

export default Archive;