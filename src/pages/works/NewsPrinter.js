import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentImg } from "../../components/work/Project";
import VideoPlayer from "../../components/VideoPlayer";

function NewsPrinter() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                <ProjectInfoContainer>
                        <ProjectInfoImage src='images/news-printer/main.jpg' />
                        <div>
                            <h1>Interactive News Printer</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>뉴스 콘텐츠 커스터마이징 프린터</h5>
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
                                <p>SolidWorks, Arduino, Leapmotion, Processing</p>
                            </div>
                            <div>
                                <h6>Duration</h6>
                                <p>2017.10 (2개월)</p>
                            </div>
                            <div>
                                <h6>Achievement</h6>
                                <p>HCI Korea 2018 Creative Award 대상</p>
                            </div>
                        </ProjectInfoContent>
                    </ProjectInfoContainer>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Overview</h2>
                            <p>
                                우리 세대는 음악과 영화를 CD가 아닌 스트리밍으로 듣고 본다. 뉴스 또한 신문, TV 방송이 아닌 모바일로 쉽게 접근하는 시대 속에서 살고있다.
                                인터랙티브 뉴스 프린터를 통해 모바일 터닝 시대에서 가볍게 소비되는 뉴스가 아닌, 단 하나의 뉴스라도 사용자의 취향을 더해 소비하고 소장할 수 있도록 만드는 방식에 대해 탐구하였다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/news-printer/overview-01.jpg' alt='overview01'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. Target Brand</h3>
                            <p>본 수업에서는 브랜드를 선택하여 해당 브랜드의 창의적인 인터랙티브 제품을 만드는 프로젝트를 진행하였다. 타겟 브랜드는 ‘JTBC 뉴스룸‘이며, 슬로건은 ‘다채로운 즐거움’ 이다.</p>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Implementation</h2>
                            <h3>1. Prototype Development</h3>
                            <p>뉴스의 그래픽을 커스터마이징하고, 포스트 카드를 출력할 수 있는 자판기 형태로 제작하였다.</p>
                            <ProjectContentImg>
                                <img src='images/news-printer/implementation-01.png' alt='implementation01'/>
                                <img src='images/news-printer/implementation-02.png' alt='implementation02'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Interaction Design</h3>
                            <p>사용자는 흰색 바탕의 포스트 카드 뉴스를 제스처를 통해 그래픽 패턴과 색상을 변경하면서 커스터마이징 할 수 있다.</p>
                            <ul>
                                <li>그래픽 형태 컨트롤: JTBC의 메인 그래픽 형태를 Y축을 통해 변경</li>
                                <li>그래픽 색상 컨트롤: JTBC의 메인 그래픽 색상을 X축을 통해 변경</li>
                                <li>뉴스 프린트: 커스터마이징된 포스트 카드 뉴스를 버튼을 눌러 출력</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/news-printer/implementation-03.png' alt='implementation03'/>
                                <img src='images/news-printer/implementation-04.jpg' alt='implementation04'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Video</h2>
                            <VideoPlayer youtubeId='cqqwCsLrd6s' />
                        </ProjectContentInner>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );
}

export default NewsPrinter;