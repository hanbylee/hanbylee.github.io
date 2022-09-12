import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentImg } from "../../components/work/Project";
import VideoPlayer from "../../components/VideoPlayer";

function TapeBot() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                    <ProjectInfoContainer>
                        <ProjectInfoImage src='images/tapebot/main.jpg' />
                        <div>
                            <h1>TapeBot</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>지능형 마스킹 테이프 기반 아동용 로보틱 키트</h5>
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
                                <p>인터랙션 엔지니어/디자이너</p>
                            </div>
                            <div>
                                <h6>Tool</h6>
                                <p>SolidWorks, Arduino, Adobe</p>
                            </div>
                            <div>
                                <h6>Duration</h6>
                                <p>2019.10 (1개월)</p>
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
                            <h2>Background</h2>
                            <p>
                                아이들이 창의력을 높이고 로봇 기술을 배울 수 있도록 LEGO 마인드스톰과 ROBOTIS 플레이 시리즈와 같은 다양한 유형의 교육용 로봇 키트가 개발되었다.
                                로봇은 환경을 인식하고 그에 따라 반응할 수 있는 인공물이며, TapeBot은 로봇의 외부 환경을 디자인하는 모듈형 로봇 키트다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/tapebot/background-01.png' alt='background01'/>
                                <p>When everyone focuseson the MAIN CHARACTER, we focus on the BACKGROUND.</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Implementation</h2>
                            <h3>1. TapeBot Design</h3>
                            <p>TapeBot은 지능형 테이프와 캐릭터 로봇으로 이루어져 있다.</p>
                            <ProjectContentImg>
                                <img src='images/tapebot/implementation-01.png' alt='implementation01'/>
                            </ProjectContentImg>
                            <p>우리는 다음과 같은 이유로 TapeBot의 환경을 구축하기 위해 지능형 테이프를 선택했다.</p>
                            <ul>
                                <li>제품에 관한 기대를 감소시켜 소비자의 수용을 증가시킨다.</li>
                                <li>어린이에게 친숙한 소재이자 다양한 길이/형태로 잘라 쓸 수 있다. (모듈형 디자인)</li>
                            </ul>
                            <p>TapeBot의 캐릭터 로봇은 아두이노 보드, RFID 리더, 틸트 센서, 스피커로 구성된다.</p>
                            <ProjectContentImg>
                                <img src='images/tapebot/implementation-02.png' alt='implementation02'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Interaciton Design</h3>
                            <p>TapeBot의 인터랙션은 다음과 같다.</p>
                            <ul>
                                <li>지능형 테이프에 내장된 RFID 태그를 감지하여 테이프 패턴 디자인에 따라 특정 사운드를 생성한다.</li>
                                <li>틸트 센서를 사용하여 로봇의 기울기에 따라 다른 사운드를 생성한다.</li>
                            </ul>
                            <p>인터랙션의 예시는 다음과 같다.</p>
                            <ul>
                                <li>잔디 패턴 테이프가 평평한 바닥에 부착되어 있을 때, 양의 울음소리가 생성된다.</li>
                                <li>잔디 패턴 테이프가 경사에 부착되어 있을 때, 산 새 지저귀는 소리가 생성된다.</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/tapebot/implementation-03.png' alt='implementation03'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                        <h2>Publication</h2>
                            <p>
                                <a href='hhttps://dl.acm.org/doi/10.1145/3371382.3378200'>TapeBot: Modular Robotic Kit for Creating an Interactive Environment</a><br /> 
                                2020 ACM/IEEE International Conference on Human-Robot Interaction(HRI) Demo
                            </p>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Video</h2>
                            <VideoPlayer youtubeId='JyFbIBUp92c' />
                        </ProjectContentInner>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );

}

export default TapeBot;