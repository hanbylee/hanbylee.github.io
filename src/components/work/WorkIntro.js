import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../../styles/GloblaLayout";
import { CardContainer, CardImage, CardContent, CardTagContainer, CardTag, FeaturedTag } from "../Card";

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

    .projectTitle {
        color: white;
        font-weight: 700;
    }

    .projectYear {
        color: white;
    }

    @media ${(p) => p.theme.device.tablet} {
        padding-top: 16vh;
        gap: 3.2rem;
    }

    @media ${(p) => p.theme.device.desktop} {
        
    }
`;

const WorkLink = styled(Link)`
    text-decoration: none;
`;

function WorkIntro() {
    return(
        <StyledWorkIntro>
            <GlobalOuter style={{minHeight: '100vh'}}>
                <GlobalInner>
                    <WorkIntroContainer>
                        <CardContainer>
                            <WorkLink to='/this-or-that'>
                                <CardImage src="images/this-or-that/thumbnail.png" style={{objectPosition: '100% 100%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <FeaturedTag className='projectTag'>featured</FeaturedTag>
                                        <CardTag className='projectTag' style={{background:'#2ee895'}}>robot</CardTag>
                                        <CardTag className='projectTag'>research</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>This or That</h5>
                                    <h6 className='projectYear'>2020</h6>
                                </CardContent>
                            </WorkLink>
                        </CardContainer>   
                        <CardContainer>
                            <WorkLink to='/modular-ai'>
                                <CardImage src="images/modular-ai/thumbnail.jpg" style={{objectPosition: '60% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <FeaturedTag className='projectTag'>featured</FeaturedTag>
                                        <CardTag className='projectTag' style={{background:'#67C3B8'}}>ai</CardTag>
                                        <CardTag className='projectTag'>research</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Modular AI Speaker</h5>
                                    <h6 className='projectYear'>2020</h6>
                                </CardContent>
                            </WorkLink>
                        </CardContainer>
                        <CardContainer>
                            <WorkLink to='#'>
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
                            </WorkLink>
                        </CardContainer>
                        <CardContainer>
                            <WorkLink to='#'>
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
                            </WorkLink>
                        </CardContainer>  
                    </WorkIntroContainer>
                </GlobalInner>
            </GlobalOuter>
        </StyledWorkIntro>
    );
}

export default WorkIntro;