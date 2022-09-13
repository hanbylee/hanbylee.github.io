import styled from "styled-components";
import { CleanLink } from "../CustomLink";
import { GlobalOuter, GlobalInner } from "../../styles/GloblaLayout";
import { CardContainer, CardImage, CardContent, CardTagContainer, CardTag, FeaturedTag } from "./WorkCard";

const StyledWorkContent = styled.div`
    width: 100%;
    margin-bottom: 6.4rem;
`;

const WorkContentDivider = styled.div`
    width: 100%;
    display: flex;
    gap: 1.6rem;
    margin-top: 12.8rem;
`;

const WorkContentTag = styled.div`
    padding: 0 3.2rem;
    border-radius: 6.4rem;
    border: 0.1rem solid black;

    h3 {
        color: black;
    }
`;

const WorkContentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 3.2rem;
    flex-wrap: wrap;
    margin-top: 3.2rem;
`;

function WorkContent() {
    return(
        <StyledWorkContent>
            <GlobalOuter>
                <GlobalInner>
                    <WorkContentDivider>
                        <WorkContentTag style={{background:'#2ee895'}}>
                            <h3>ai</h3>
                        </WorkContentTag>
                        <WorkContentTag style={{background:'#96E82E'}}>
                            <h3>robot</h3>
                        </WorkContentTag>
                    </WorkContentDivider>
                    <WorkContentContainer>
                        <CardContainer>
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
                        </CardContainer>
                        <CardContainer>
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
                        </CardContainer>
                        <CardContainer>
                            <CleanLink to='/robotic-cabinets'>
                                <CardImage src="images/robotic-cabinets/thumbnail.png" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <CardTag className='projectTag' style={{background:'#96E82E'}}>robot</CardTag>
                                        <CardTag className='projectTag'>research</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Robotic Cabinets</h5>
                                    <h6 className='projectYear'>2019</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                        <CardContainer>
                            <CleanLink to='/first-things-first'>
                                <CardImage src="images/first-things-first/thumbnail.png" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <CardTag className='projectTag' style={{background:'#96E82E'}}>robot</CardTag>
                                        <CardTag className='projectTag'>research</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>First Things First</h5>
                                    <h6 className='projectYear'>2019</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                        <CardContainer>
                            <CleanLink to='/tapebot'>
                                <CardImage src="images/tapebot/thumbnail.jpg" style={{objectPosition: '0% 0%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <CardTag className='projectTag' style={{background:'#96E82E'}}>robot</CardTag>
                                        <CardTag className='projectTag' style={{background:'lightgray'}}>prototyping</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>TapeBot</h5>
                                    <h6 className='projectYear'>2019</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                        <CardContainer>
                            <CleanLink to='/be-our-guest'>
                                <CardImage src="images/be-our-guest/thumbnail.png" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <CardTag className='projectTag' style={{background:'#96E82E'}}>robot</CardTag>
                                        <CardTag className='projectTag' style={{background:'lightgray'}}>prototyping</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Be Our Guest</h5>
                                    <h6 className='projectYear'>2020</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                    </WorkContentContainer>
                    <WorkContentDivider>
                        <WorkContentTag style={{background:'#2E9AE8'}}>
                            <h3>graphics</h3>
                        </WorkContentTag>
                    </WorkContentDivider>
                    <WorkContentContainer>
                        <CardContainer>
                            <CleanLink to='/emotion-reflector'>
                                <CardImage src="images/emotion-reflector/thumbnail.jpg" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <CardTag className='projectTag' style={{background:'#2E9AE8'}}>graphics</CardTag>
                                        <CardTag className='projectTag' style={{background:'lightgray'}}>prototyping</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Emotion Reflector</h5>
                                    <h6 className='projectYear'>2020</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                        <CardContainer>
                            <CleanLink to='/news-printer'>
                                <CardImage src="images/news-printer/thumbnail.jpg" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <CardTag className='projectTag' style={{background:'#2E9AE8'}}>graphics</CardTag>
                                        <CardTag className='projectTag' style={{background:'lightgray'}}>prototyping</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Interactive News Printer</h5>
                                    <h6 className='projectYear'>2017</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                        <CardContainer>
                            <CleanLink to='/innerstagram'>
                                <CardImage src="images/innerstagram/thumbnail.jpg" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <CardTag className='projectTag' style={{background:'#2E9AE8'}}>graphics</CardTag>
                                        <CardTag className='projectTag' style={{background:'lightgray'}}>prototyping</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Innerstagram</h5>
                                    <h6 className='projectYear'>2018</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                    </WorkContentContainer>
                    <WorkContentDivider>
                        <WorkContentTag style={{background:'#7087FE'}}>
                            <h3>product</h3>
                        </WorkContentTag>
                    </WorkContentDivider>
                    <WorkContentContainer>
                        <CardContainer>
                            <CleanLink to='/hand-in-o'>
                                <CardImage src="images/hand-in-o/thumbnail.jpeg" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <FeaturedTag className='projectTag'>featured</FeaturedTag>
                                        <CardTag className='projectTag' style={{background:'#7087FE'}}>product</CardTag>
                                        <CardTag className='projectTag' style={{background:'lightgray'}}>prototyping</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Hand-in-O</h5>
                                    <h6 className='projectYear'>2018</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                        <CardContainer>
                            <CleanLink to='/light-flow'>
                                <CardImage src="images/light-flow/thumbnail.png" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <CardTag className='projectTag' style={{background:'#7087FE'}}>product</CardTag>
                                        <CardTag className='projectTag' style={{background:'lightgray'}}>prototyping</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Light Flow</h5>
                                    <h6 className='projectYear'>2018</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                        <CardContainer>
                            <CleanLink to='/sound-creator'>
                                <CardImage src="images/sound-creator/thumbnail.jpg" style={{objectPosition: '30% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <CardTag className='projectTag' style={{background:'#7087FE'}}>product</CardTag>
                                        <CardTag className='projectTag' style={{background:'lightgray'}}>prototyping</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Sound Creator</h5>
                                    <h6 className='projectYear'>2017</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                    </WorkContentContainer>
                    <WorkContentDivider>
                        <WorkContentTag style={{background:'#EE87A0'}}>
                            <h3>service</h3>
                        </WorkContentTag>
                    </WorkContentDivider>
                    <WorkContentContainer>
                        <CardContainer>
                            <CleanLink to='/money-planet'>
                                <CardImage src="images/money-planet/thumbnail.jpg" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <FeaturedTag className='projectTag'>featured</FeaturedTag>
                                        <CardTag className='projectTag' style={{background:'#EE87A0'}}>service</CardTag>
                                        <CardTag className='projectTag'>research</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Money Planet</h5>
                                    <h6 className='projectYear'>2017</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                        <CardContainer>
                            <CleanLink to='/arval-together'>
                                <CardImage src="images/arval-together/thumbnail.jpg" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <CardTag className='projectTag' style={{background:'#EE87A0'}}>service</CardTag>
                                        <CardTag className='projectTag' style={{background:'lightgray'}}>prototyping</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Arval Together</h5>
                                    <h6 className='projectYear'>2018</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                        <CardContainer>
                            <CleanLink to='/dino'>
                                <CardImage src="images/dino/thumbnail.png" style={{objectPosition: '50% 50%'}}/>
                                <CardContent>
                                    <CardTagContainer>
                                        <CardTag className='projectTag' style={{background:'#EE87A0'}}>service</CardTag>
                                        <CardTag className='projectTag' style={{background:'lightgray'}}>prototyping</CardTag>
                                    </CardTagContainer>
                                    <h5 className='projectTitle'>Dino</h5>
                                    <h6 className='projectYear'>2021</h6>
                                </CardContent>
                            </CleanLink>
                        </CardContainer>
                        <CardContainer style={{filter: 'opacity(0.5)'}}>
                            <CardImage src="images/bell-therapeutics/thumbnail.gif" style={{objectPosition: '50% 50%'}}/>
                            <CardContent>
                                <CardTagContainer>
                                    <CardTag className='projectTag' style={{background:'#EE87A0'}}>service</CardTag>
                                    <CardTag className='projectTag' style={{background:'gray'}}>web development</CardTag>
                                    <CardTag className='projectTag' style={{background:'#90C5EB'}}>react</CardTag>
                                </CardTagContainer>
                                <h5 className='projectTitle'>Bell Therapeutics</h5>
                                <h6 className='projectYear'>2022 (wip)</h6>
                            </CardContent>
                        </CardContainer>
                        <CardContainer style={{filter: 'opacity(0.5)'}}>
                            <CardImage src="images/wonder-wondo/thumbnail.gif" style={{objectPosition: '50% 50%'}}/>
                            <CardContent>
                                <CardTagContainer>
                                    <CardTag className='projectTag' style={{background:'#EE87A0'}}>service</CardTag>
                                    <CardTag className='projectTag' style={{background:'gray'}}>web development</CardTag>
                                    <CardTag className='projectTag' style={{background:'#90C5EB'}}>react</CardTag>
                                </CardTagContainer>
                                <h5 className='projectTitle'>Wonder Wondo</h5>
                                <h6 className='projectYear'>2022 (wip)</h6>
                            </CardContent>
                        </CardContainer>
                    </WorkContentContainer>
                </GlobalInner>
            </GlobalOuter>
        </StyledWorkContent>
    );
}

export default WorkContent;