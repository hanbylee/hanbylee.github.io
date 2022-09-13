import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentImg } from "../../components/work/Project";
import VideoPlayer from "../../components/VideoPlayer";

function Dino() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                    <ProjectInfoContainer>
                        <ProjectInfoImage src='images/dino/main.png' />
                        <div>
                            <h1>Dino</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>교통 약자를 위한 카풀 서비스</h5>
                        </div>
                        <ProjectInfoContent>
                            <div>
                                <h6>Type</h6>
                                <p>UI/UX 디자인</p>
                            </div>
                            <div>
                                <h6>Affiliation</h6>
                                <p>JunctionX Seoul 2021 (해커톤) - Autocrypt 트랙</p>
                            </div>
                            <div>
                                <h6>Role</h6>
                                <p>UX/UI 디자이너</p>
                            </div>
                            <div>
                                <h6>Tool</h6>
                                <p>Figma</p>
                            </div>
                            <div>
                                <h6>Duration</h6>
                                <p>2021.05 (2일)</p>
                            </div>
                            <div>
                            </div>
                        </ProjectInfoContent>
                    </ProjectInfoContainer>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Challenge</h2>
                            <ProjectContentImg>
                                <img src='images/dino/challenge-01.png' alt='challenge01'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Desktop Research</h2>
                            <h3>1. Persona</h3>
                            <ProjectContentImg>
                                <img src='images/dino/desktop-research-01.png' alt='desktopresearch01'/>
                                <img src='images/dino/desktop-research-02.png' alt='desktopresearch02'/>
                                <img src='images/dino/desktop-research-03.png' alt='desktopresearch03'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Video</h2>
                            <VideoPlayer youtubeId='LA_htkMqLas' />
                        </ProjectContentInner>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );
}

export default Dino;