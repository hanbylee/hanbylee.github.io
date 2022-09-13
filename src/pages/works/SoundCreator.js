import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentImg } from "../../components/work/Project";
import VideoPlayer from "../../components/VideoPlayer";

function SoundCreator() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                <ProjectInfoContainer>
                        <ProjectInfoImage src='images/sound-creator/main.jpg' />
                        <div>
                            <h1>Sound Creator</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>인터랙티브 사운드 데스크 토이</h5>
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
                                <p>SolidWorks, Arduino, Leap Motion, Garageband</p>
                            </div>
                            <div>
                                <h6>Duration</h6>
                                <p>2017.04 (1개월)</p>
                            </div>
                            <div>
                                <h6>Achievement</h6>
                                <p>Design Korea 2017 전시</p>
                            </div>
                        </ProjectInfoContent>
                    </ProjectInfoContainer>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Overview</h2>
                            <p>공공장소에서 다양한 사람들이 사용할 수 있는 데스크 토이를 디자인하였다. 핸드 제스처 피젯팅을 위해 시각과 청각을 자극하는 사운드 크리에이터를 개발하였다.</p>
                            <ProjectContentImg>
                                <img src='images/sound-creator/overview-01.png' alt='overview01'/>
                                <p>손의 위치와 높이에 따라 빛과 사운드가 달라지는 피젯 토이</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Implementation</h2>
                            <p>책상 위에 두거나 벽에 고정하여, 누구나 핸드 제스처를 통해 빛과 소리를 만들 수 있다.</p>
                            <ul>
                                <li>높이에 따른 사운드 매핑: 손의 높이에 따라, 빛의 색상 변화가 나타나며, 소리의 선명도가 달라짐</li>
                                <li>원형의 사운드 매핑: 1~2 옥타브의 음을 제품의 가장자리를 따라 적용</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/sound-creator/implementation-01.jpg' alt='implementation01'/>
                                <p>소프트웨어 설계</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Exhibition</h2>
                            <ProjectContentImg>
                                <img src='images/sound-creator/exhibition-01.jpg' alt='exhibition01'/>
                                <p>Design Korea 2017, KINTEX, Goyang</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Video</h2>
                            <VideoPlayer youtubeId='DJRkd_WlnzQ' />
                        </ProjectContentInner>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );
}

export default SoundCreator;