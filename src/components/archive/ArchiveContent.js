import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../../styles/GloblaLayout";
import { CleanLink } from "../CustomLink";
import { ArchiveCardContainer, ArchiveArt, ArchiveTitle, ArchiveTagContainer, ArchiveTag } from "./ArchiveCard";

const StyledArchiveContent = styled.div`
    width: 100%;
    padding: 9.6rem 0;
`;

const ArchiveContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.4rem;
`;

function ArchiveContent() {
    return(
        <StyledArchiveContent>
            <GlobalOuter>
                <GlobalInner>
                    <ArchiveContentContainer>
                        <CleanLink to='/clouds'>
                            <ArchiveCardContainer>
                                <ArchiveArt src="images/archives/clouds.png" />
                                <ArchiveTitle>
                                    <h5>Clouds</h5>
                                    <ArchiveTagContainer>
                                        <ArchiveTag>react</ArchiveTag>
                                        <ArchiveTag>three.js</ArchiveTag>
                                    </ArchiveTagContainer>
                                </ArchiveTitle>
                            </ArchiveCardContainer>
                        </CleanLink>
                        <CleanLink to='/reflection'>
                            <ArchiveCardContainer>
                                <ArchiveArt src="images/archives/reflection.png" />
                                <ArchiveTitle>
                                    <h5>Reflection</h5>
                                    <ArchiveTagContainer>
                                        <ArchiveTag>react</ArchiveTag>
                                        <ArchiveTag>three.js</ArchiveTag>
                                    </ArchiveTagContainer>
                                </ArchiveTitle>
                            </ArchiveCardContainer>
                        </CleanLink>
                    </ArchiveContentContainer>
                </GlobalInner>
            </GlobalOuter>
        </StyledArchiveContent>
    );
}

export default ArchiveContent;