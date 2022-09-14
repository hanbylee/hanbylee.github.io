import { GlobalOuter, ArchiveInner } from "../../styles/GloblaLayout";
import { StyledArt, ArtContainer } from "../../components/archive/ArtLayout";
import Header from "../../components/Header";
import Model from "./models/BobaModel";

function Boba() {
    return(
        <StyledArt>
            <Header />
            <GlobalOuter>
                <ArchiveInner>
					<ArtContainer style={{ cursor:'default' }}>
                        <Model />
					</ArtContainer>
					<h5>Boba</h5>
					<p></p>
                </ArchiveInner>
            </GlobalOuter>
        </StyledArt>
    );
}

export default Boba;