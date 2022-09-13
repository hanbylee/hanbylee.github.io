import { GlobalOuter, ArchiveInner } from "../../styles/GloblaLayout";
import { StyledArt, ArtContainer } from "../../components/archive/ArtLayout";
import Header from "../../components/Header";
import Model from "./models/CloudsModel";

function Clouds() {
    return(
        <StyledArt>
            <Header />
            <GlobalOuter>
                <ArchiveInner>
					<ArtContainer style={{background: 'linear-gradient(180deg, #79A9F0 0%, #EE7D76 70%, #F6B06F 100%)'}}>
						<Model />
					</ArtContainer>
					<h5>Clouds</h5>
					<p>마우스 클릭한 상태로 회전, 스크롤 시 확대/축소</p>
                </ArchiveInner>
            </GlobalOuter>
        </StyledArt>
    );
}

export default Clouds;