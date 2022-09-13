import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentImg } from "../../components/work/Project";
import VideoPlayer from "../../components/VideoPlayer";

function Innerstagram() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                <ProjectInfoContainer>
                        <ProjectInfoImage src='images/innerstagram/main.jpg' />
                        <div>
                            <h1>Innerstagram</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>인물 사진과 컬러를 이용한 감정 저널링 시스템 디자인</h5>
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
                                <p>인터랙션 엔지니어</p>
                            </div>
                            <div>
                                <h6>Tool</h6>
                                <p>Arduino, Processing, Leap Motion</p>
                            </div>
                            <div>
                                <h6>Duration</h6>
                                <p>2018.05 (2개월)</p>
                            </div>
                            <div>
                                <h6>Achievement</h6>
                                <p>
                                    <a href="https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10402928">HCI Korea 2020 학회 논문 - 포스터</a>
                                </p>
                            </div>
                        </ProjectInfoContent>
                    </ProjectInfoContainer>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Overview</h2>
                            <p>Innerstagram은 내 마음에 드는 오늘의 색상을 선택하여, 해당 색상들이 덮여진 셀피를 찍고 즉석으로 출력된 사진에 내 현재 감정과 맥락 등을 기록하는 감정 저널링 시스템이다.</p>
                            <ProjectContentImg>
                                <img src='images/innerstagram/overview-01.jpg' alt='overview01'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Background</h2>
                            <p>소셜 미디어에 나의 가짜 모습을 올림으로서, 잃어가는 진짜 내 자신을 바라보는 방법을 고민해보기 위해 프로젝트를 시작하였다. 꾸준히 내 감정을 나의 기준에 맞는 색상으로 인덱싱하여, 불렛 저널처럼 기록할 수 있는 방법을 고안해 보았다.</p>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>User Scenario</h2>
                            <p>Innerstgram의 시나리오는 다음과 같은 순서로 이루어진다.</p>
                            <ul>
                                <li>색상을 최대 두 가지 선택한다.</li>
                                <li>색상이 비친 내 얼굴을 찍는다.</li>
                                <li>사진을 프린트한다.</li>
                                <li>일기를 쓰듯 내 감정과 맥락 등을 기록한다.</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/innerstagram/user-scenario-01.png' alt='userscenario01'/>
                                <img src='images/innerstagram/user-scenario-02.jpg' alt='userscenario02'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Video</h2>
                            <VideoPlayer youtubeId='wq558pLrr_o' />
                        </ProjectContentInner>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );
}

export default Innerstagram;