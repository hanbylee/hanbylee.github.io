import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../../styles/GloblaLayout";
import { CleanLink } from "../CustomLink";
import { ArchiveCardContainer, ArchiveArt, ArchiveTitle, ArchiveTagContainer, ArchiveTag } from "./ArchiveCard";

const StyledArchiveContent = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 9.6rem 0;
`;

const ArchiveContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media ${(p) => p.theme.device.tablet} {
        gap: 2.4rem;
        justify-content: center;
    }
`;

function ArchiveContent() {
    useEffect(() => {
        AOS.init();
    })

    return(
        <StyledArchiveContent>
            <GlobalOuter>
                <GlobalInner>
                    <ArchiveContentContainer data-aos="fade-up" data-aos-duration="2000">
                        <CleanLink to='/gradient'>
                            <ArchiveCardContainer>
                                <ArchiveArt src="images/archives/gradient.png" />
                                <ArchiveTitle>
                                    <h5>Gradient</h5>
                                    <ArchiveTagContainer>
                                        <ArchiveTag>react</ArchiveTag>
                                        <ArchiveTag>styled-components</ArchiveTag>
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
                        <CleanLink to='/bloom'>
                            <ArchiveCardContainer>
                                <ArchiveArt src="images/archives/bloom.png" />
                                <ArchiveTitle>
                                    <h5>Bloom</h5>
                                    <ArchiveTagContainer>
                                        <ArchiveTag>react</ArchiveTag>
                                        <ArchiveTag>three.js</ArchiveTag>
                                    </ArchiveTagContainer>
                                </ArchiveTitle>
                            </ArchiveCardContainer>
                        </CleanLink>
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
                        <CleanLink to='/boba'>
                            <ArchiveCardContainer>
                                <ArchiveArt src="images/archives/boba.png" />
                                <ArchiveTitle>
                                    <h5>Boba</h5>
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