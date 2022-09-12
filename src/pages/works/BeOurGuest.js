import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentImg } from "../../components/work/Project";
import VideoPlayer from "../../components/VideoPlayer";

function BeOurGuest() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                    <ProjectInfoContainer>
                        <ProjectInfoImage src='images/be-our-guest/main.jpg' />
                        <div>
                            <h1>Be Our Guest</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>로보틱 테이블의 자동 운반 시스템 디자인 및 사용자의 인식 연구 프로토타이핑</h5>
                        </div>
                        <ProjectInfoContent>
                            <div>
                                <h6>Type</h6>
                                <p>Human-Robot Interaction 프로토타이핑</p>
                            </div>
                            <div>
                                <h6>Affiliation</h6>
                                <p>KIST AIㆍ로봇연구소 지능로봇연구단</p>
                            </div>
                            <div>
                                <h6>Role</h6>
                                <p>인터랙션 엔지니어</p>
                            </div>
                            <div>
                                <h6>Tool</h6>
                                <p>SolidWorks, Raspberry Pi, TurtleBot, ROS</p>
                            </div>
                            <div>
                                <h6>Duration</h6>
                                <p>2020.12 (2개월)</p>
                            </div>
                            <div>
                                <h6>Achievement</h6>
                                <p>
                                    <a href="https://dl.acm.org/doi/10.1145/3371382.3378200">ACM/IEEE HRI 2020 학회 Demo (3rd Prize)</a><span> / </span>
                                    <a href="https://doi.org/10.8080/1020200089889">기술 특허</a>
                                </p>
                            </div>
                        </ProjectInfoContent>
                    </ProjectInfoContainer>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Overview</h2>
                            <p>진행 중인 프로젝트입니다.</p>
                            <ProjectContentImg>
                                <img src='images/be-our-guest/overview-01.png' alt='overview01'/>
                                <img src='images/be-our-guest/overview-02.png' alt='overview02'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Video</h2>
                            <VideoPlayer youtubeId='5UF8mjnxXdo' />
                        </ProjectContentInner>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );
}

export default BeOurGuest;