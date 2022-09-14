import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../../styles/GloblaLayout";
import { CleanLink } from "../CustomLink";
import { FeaturedCardContainer, CardImage, CardContent, CardTagContainer, CardTag, FeaturedTag } from "./WorkCard";

const StyledWorkIntro = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const WorkIntroContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;

    @media ${(p) => p.theme.device.tablet} {
        padding-top: 16vh;
        gap: 3.2rem;
    }
`;

function WorkIntro() {
    useEffect(() => {
        AOS.init();
    })

    return(
        <StyledWorkIntro>
            <GlobalOuter style={{minHeight: '100vh'}}>
                <GlobalInner>
                    <WorkIntroContainer data-aos="fade-up" data-aos-duration="2000">
                        <FeaturedCardContainer>
                            <CleanLink to='/this-or-that'>
                                <CardImage src="images/this-or-that/thumbnail.png" style={{objectPosition: '100% 100%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <FeaturedTag className='projectTag'>featured</FeaturedTag>
                                        <CardTag className='projectTag' style={{background:'#96E82E'}}>robot</CardTag>
                                        <CardTag className='projectTag'>research</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>This or That</h5>
                                    <h6 className='projectYear'>2020</h6>
                                </CardContent>
                            </CleanLink>
                        </FeaturedCardContainer>   
                        <FeaturedCardContainer>
                            <CleanLink to='/modular-ai'>
                                <CardImage src="images/modular-ai/thumbnail.jpg" style={{objectPosition: '60% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <FeaturedTag className='projectTag'>featured</FeaturedTag>
                                        <CardTag className='projectTag' style={{background:'#2ee895'}}>ai</CardTag>
                                        <CardTag className='projectTag'>research</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Modular AI Speaker</h5>
                                    <h6 className='projectYear'>2020</h6>
                                </CardContent>
                            </CleanLink>
                        </FeaturedCardContainer>
                        <FeaturedCardContainer>
                            <CleanLink to='/hand-in-o'>
                                <CardImage src="images/hand-in-o/thumbnail.jpeg" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <FeaturedTag className='projectTag'>featured</FeaturedTag>
                                        <CardTag className='projectTag' style={{background:'#7087FE'}}>product</CardTag>
                                        <CardTag className='projectTag'>prototyping</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Hand-in-O</h5>
                                    <h6 className='projectYear'>2018</h6>
                                </CardContent>
                            </CleanLink>
                        </FeaturedCardContainer>
                        <FeaturedCardContainer>
                            <CleanLink to='/money-planet'>
                                <CardImage src="images/money-planet/thumbnail.jpg" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <FeaturedTag className='projectTag'>featured</FeaturedTag>
                                        <CardTag className='projectTag' style={{background:'#EE87A0'}}>service</CardTag>
                                        <CardTag className='projectTag'>research</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Money Planet</h5>
                                    <h6 className='projectYear'>2018</h6>
                                </CardContent>
                            </CleanLink>
                        </FeaturedCardContainer>  
                    </WorkIntroContainer>
                </GlobalInner>
            </GlobalOuter>
        </StyledWorkIntro>
    );
}

export default WorkIntro;