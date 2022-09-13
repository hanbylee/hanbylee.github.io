import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentImg } from "../../components/work/Project";
import VideoPlayer from "../../components/VideoPlayer";

function EmotionReflector() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                    <ProjectInfoContainer>
                        <ProjectInfoImage src='images/emotion-reflector/main.jpg' />
                        <div>
                            <h1>Emotion Reflector</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>감정 인식 스마트 미러</h5>
                        </div>
                        <ProjectInfoContent>
                            <div>
                                <h6>Type</h6>
                                <p>Human-Computer Interaction 프로토타이핑</p>
                            </div>
                            <div>
                                <h6>Affiliation</h6>
                                <p>한국콘텐츠진흥원(KOCCA)</p>
                            </div>
                            <div>
                                <h6>Role</h6>
                                <p>인터랙션 엔지니어/디자이너</p>
                            </div>
                            <div>
                                <h6>Tool</h6>
                                <p>SolidWorks, Raspberry Pi, Processing, Python</p>
                            </div>
                            <div>
                                <h6>Duration</h6>
                                <p>2019.11 (1개월)</p>
                            </div>
                            <div>
                                <h6>Achievement</h6>
                                <p>Red Dot: Design Concept 2020 파이널리스트</p>
                            </div>
                        </ProjectInfoContent>
                    </ProjectInfoContainer>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Overview</h2>
                            <p>
                                이모션 리플렉터는 사용자가 느끼는 감정을 정확하게 표현할 수 있도록 지원하는 스마트 거울이다.
                                표정 인식을 기반으로 시각/청각 피드백을 통해 6가지 보편 감정을 표현한다. 
                                이모션 리플렉터는 사용자가 자기 표출(self-expression)을 연습할 수 있도록 하여 사용자가 자신의 감정에 묻히는 것을 방지하고 자신의 정신 상태에 대한 객관적인 시각을 키울 수 있다. 
                                또한, 기록된 감정에 따라 사운드가 생성되어 사용자가 자기 표출을 연습하도록 유도한다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/emotion-reflector/overview-01.png' alt='overview01'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentOuter>
                            <ProjectContentInner>
                                <h2>Implementation</h2>
                                <h3>1. Metaphoric Design</h3>
                                <p>사용자가 자신의 얼굴을 거울을 통해 보면서 표정이 자연스럽게 인식될 수 있도록 이모션 리플렉터를 디자인하고 개발하였다.</p>
                                <ProjectContentImg>
                                    <img src='images/emotion-reflector/implementation-01.png' alt='implementation01'/>
                                </ProjectContentImg>
                            </ProjectContentInner>
                            <ProjectContentInner>
                                <h3>2. Interaction Design</h3>
                                <p>Ekman의 6가지 보편 감정인 화남(anger), 혐오(disgust), 두려움(fear), 행복(happiness), 슬픔(sadness)과 놀람(surprise)을 기반으로 표정 인식을 진행하였다. (트레이닝된 감정 인식 모델 사용)</p>
                                <ProjectContentImg>
                                    <img src='images/emotion-reflector/implementation-02.png' alt='implementation02'/>
                                </ProjectContentImg>
                            </ProjectContentInner>
                            <ProjectContentInner>
                                <h3>3. Scenario Design</h3>
                                <ProjectContentImg>
                                    <img src='images/emotion-reflector/implementation-03.png' alt='implementation03'/>
                                </ProjectContentImg>
                            </ProjectContentInner>
                            <ProjectContentInner>
                                <h3>4. Iteration Design</h3>
                                <p>두 번째 프로토타입은 벽에 걸 수 있는 형태로 설계하고, 기존보다 더 감성적인 그래픽으로 개발하였다.</p>
                                <ProjectContentImg>
                                    <img src='images/emotion-reflector/implementation-04.png' alt='implementation04'/>
                                </ProjectContentImg>
                            </ProjectContentInner>
                        </ProjectContentOuter>
                        <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Video</h2>
                            <VideoPlayer youtubeId='QK5-5I0bJDk' />
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );
}

export default EmotionReflector;