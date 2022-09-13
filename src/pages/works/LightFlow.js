import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentImg } from "../../components/work/Project";
import VideoPlayer from "../../components/VideoPlayer";

function LightFlow() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                    <ProjectInfoContainer>
                        <ProjectInfoImage src='images/light-flow/main.png' />
                        <div>
                            <h1>Light Flow</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>펌핑 인터랙션을 적용한 빛 제어 시스템 디자인</h5>
                        </div>
                        <ProjectInfoContent>
                            <div>
                                <h6>Type</h6>
                                <p>Human-Computer Interaction 프로토타이핑</p>
                            </div>
                            <div>
                                <h6>Affiliation</h6>
                                <p>UNIST 창의디자인공학과</p>
                            </div>
                            <div>
                                <h6>Role</h6>
                                <p>인터랙션 엔지니어/디자이너</p>
                            </div>
                            <div>
                                <h6>Tool</h6>
                                <p>SolidWorks, Arduino</p>
                            </div>
                            <div>
                                <h6>Duration</h6>
                                <p>2018.11 (1개월)</p>
                            </div>
                            <div>
                            </div>
                        </ProjectInfoContent>
                    </ProjectInfoContainer>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Overview</h2>
                            <p>사용자에게 새로운 경험을 제공하고자, 펌핑하는 행위를 통해 조명을 밝히는 시스템을 디자인 하였다. 또한, Light Flow는 tangible 인터랙션을 통해, 사람들이 대략적으로 빛의 사용량을 인식할 수 있도록 만든다.</p>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Implementation</h2>
                            <p>메인 램프에 달려있는 고무 펌프를 작은 램프에 연결하여 메인 램프의 빛을 작은 램프로 이동시킬 수 있다.</p>
                            <ProjectContentImg>
                                <img src='images/light-flow/implementation-01.jpg' alt='implementation01'/>
                                <p>Light FLow의 하드웨어 설계</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Video</h2>
                            <VideoPlayer youtubeId='fOJDitKY7wA' />
                        </ProjectContentInner>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );
}

export default LightFlow;