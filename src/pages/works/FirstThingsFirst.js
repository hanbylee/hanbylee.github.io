import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentImg, ProjectContentBox } from "../../components/work/Project";
import VideoPlayer from "../../components/VideoPlayer";

function FirstThingsFirst() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                <ProjectInfoContainer>
                        <ProjectInfoImage src='images/first-things-first/main.png' />
                        <div>
                            <h1>First Things First</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>홈 로봇의 서비스 시나리오에 따른 사용자의 인식 연구</h5>
                        </div>
                        <ProjectInfoContent>
                            <div>
                                <h6>Type</h6>
                                <p>Human-Robot Interaction 리서치</p>
                            </div>
                            <div>
                                <h6>Affiliation</h6>
                                <p>KIST AIㆍ로봇연구소 지능로봇연구단</p>
                            </div>
                            <div>
                                <h6>Role</h6>
                                <p>인터랙션 리서처</p>
                            </div>
                            <div>
                                <h6>Tool</h6>
                                <p>SPSS</p>
                            </div>
                            <div>
                                <h6>Duration</h6>
                                <p>2019.09 (1개월)</p>
                            </div>
                            <div>
                                <h6>Achievement</h6>
                                <a href="https://dl.acm.org/doi/10.1145/3371382.3378317"><p>ACM/IEEE HRI 2020 학회 Late-Breaking Report</p></a>
                            </div>
                        </ProjectInfoContent>
                    </ProjectInfoContainer>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Background</h2>
                            <p>
                                가사 노동은 대부분의 사람들이 하기를 꺼려 하는 일이다. 다행히도, 이런 가사 노동을 돕는 다양한 로봇들이 개발되고 있다 (PR2, Aeolus, Blue). 
                                계속해서 가사 노동은 로봇으로 대체될 것으로 예상된다[1].
                            </p>
                            <ProjectContentImg>
                                <img src='images/first-things-first/background-01.png' alt='background01'/>
                                <p>가사노동을 돕는 다양한 로봇들이 개발되고 있다.</p>
                            </ProjectContentImg>
                            <p>우리는 가사노동을 다음과 같이 정의했다.</p>
                            <ul>
                                <li>일상적으로 반복됨</li>
                                <li>시장에서 거래되지 않음</li>
                                <li>무보수</li>
                                <li>집 안에서 일어남</li>
                            </ul>
                            <p>Bugmann과 Copleston의 연구에 따르면, 사람들이 로봇에게 맡기고 싶어하는 주요 가사노동은 다음과 같다[2].</p>
                            <ul>
                                <li>청소(일반 청소, 진공 청소, 정리 등)</li>
                                <li>요리(아침 준비, 점심 준비, 음료 만들기 등)</li>
                                <li>세탁</li>
                            </ul>
                            <ProjectContentBox>
                                <h6>Design Question:</h6>
                                <p>
                                    “앞으로 개발되어야 하는 홈 로봇 서비스는 어떻게 디자인될 수 있을까?”
                                </p>
                            </ProjectContentBox>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Study Design</h2>
                            <p>홈 로봇의 서비스를 개발하기 위해, 가사노동 중 청소, 세탁, 요리를 선택하였다.</p>
                            <ProjectContentBox>
                                <h6>Research Question:</h6>
                                <p>
                                    “우선순위로 개발되어야 하는 홈 로봇 서비스는 무엇인가?”
                                </p>
                            </ProjectContentBox>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. Stimuli</h3>
                            <p>사람들이 가장 많이 사용하고 싶은 로봇의 서비스를 찾기 위해 각각 5~6 가지 기능을 포함하는 세 가지 서비스에 대한 설명을 제공했다.</p>
                            <h4>a. Cleaning</h4>
                            <ul>
                                <li>공기 청정기가 로봇에게 거실 청소를 요청하면 로봇은 창문을 열어 환기를 시킬 수 있다.</li>
                                <li>로봇은 책, 컵, 쿠션과 같은 물건을 적절한 위치로 되돌릴 수 있다. (1-1)</li>
                                <li>로봇은 로봇청소기(진공, 물걸레 등)의 청소 시작을 명령 내릴 수 있다. (1-2)</li>
                                <li>로봇은 재활용을 위해 쓰레기통에서 캔, 유리, 플라스틱 등을 분류할 수 있다. (1-3)</li>
                                <li>청소가 완료되면 로봇은 환기를 위해 열린 창문을 닫고 청소 작업을 종료할 수 있다.</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/first-things-first/study-design-01.png' alt='studydesign01'/>
                            </ProjectContentImg>
                            <h4>b. Laundry</h4>
                            <ul>
                                <li>세탁물 바구니에 세탁물이 가득 차 있음을 알리면 로봇이 세탁 바구니를 세탁기로 옮긴다. (2-1)</li>
                                <li>로봇은 바구니에서 세탁물을 집어 세탁기에 넣을 수 있다.</li>
                                <li>로봇은 세탁기와 건조기에게 명령을 내려서 세탁물을 세탁하고 말릴 수 있다. (2-2)</li>
                                <li>세탁 및 건조가 완료되면 로봇이 세탁물을 수거 할 수 있다.</li>
                                <li>로봇은 세탁물을 접을 수 있다. (2-3)</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/first-things-first/study-design-02.png' alt='studydesign02'/>
                            </ProjectContentImg>
                            <h4>c. Cooking</h4>
                            <ul>
                                <li>로봇은 냉장고의 재료를 정리할 수 있다.</li>
                                <li>남은 재료와 과거 식사를 고려하여 로봇이 식사 메뉴를 추천할 수 있다. (3-1)</li>
                                <li>사용자가 요리를 할 때, 로봇은 재료, 조미료 및 요리 도구를 전달하여 도울 수 있다. (3-2)</li>
                                <li>로봇은 냄비 나 그릇을 테이블로 옮길 수 있다. (3-3)</li>
                                <li>식사 후, 로봇은 빈 접시를 식기세척기로 옮길 수 있다.</li>
                                <li>로봇은 식기세척기에 설거지를 명령 내릴 수 있다.</li>
                            </ul>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Measurements</h3>
                            <p>로봇의 서비스 시나리오에 따라서 아래 2가지를 측정하였다. 측정을 통해, 사용자가 각 시나리오의 로봇의 서비스에 얼마나 만족하는지, 구매 의도가 얼마나 있는지 확인하였다.</p>
                            <ul>
                                <li>서비스 평가(service evaluation)[3]</li>
                                <li>구매 의도(purchase intention)[4]</li>
                            </ul>
                            <p>또한, 서비스 평가 및 구매의도에 영향을 미치는 로봇의 속성(attribute)과 작업(task)을 평가했다.</p>
                            <details>
                                <summary style={{cursor:'pointer'}}>질문 아이템</summary>
                                <ProjectContentImg>
                                    <img src='images/first-things-first/study-design-04.png' alt='studydesign04'/>
                                    <img src='images/first-things-first/study-design-05.png' alt='studydesign05'/>
                                    <p>측정에 대한 아이템</p>
                                </ProjectContentImg>
                            </details>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>3. Participants</h3>
                            <p>피험자를 모집하여 온라인 서베이로 진행되었다.</p>
                            <ul>
                                <li>피험자: 36명 (25세~42세, 여성 24명, 남성 12명)</li>
                            </ul>
                            <details>
                                <summary style={{cursor:'pointer'}}>피험자 내 설계 (within design)</summary>
                                <ul>
                                    <li>로봇이 제공하는 서비스: within design - 피실험자는 로봇이 제공하는 청소, 세탁, 요리 등 3가지 서비스를 모두 평가한다. (무작위 순서)</li>
                                </ul>
                            </details>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Results</h2>
                            <p>실험을 통해 모듈형 스마트 스피커의 발화와 촉각이 사용자의 인식에 미치는 영향을 조사하기 위해 일원 반복측정 분산분석(one-way RM ANOVA), Tukey HSD 사후 검정(Tukey HSD post hoc test)과 다중 회귀분석(multiple regression)을 수행했다.</p>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. Service Evaluation by Service Types</h3>
                            <p>
                                로봇 서비스 유형의 서비스 평가 측정은 Cronbach α=.977로, 모든 문항에 대해 유의한 결과가 나왔다.
                                서비스 유형에 따라 서비스 평가에 유의한 영향이 있었다.
                            </p>
                            <ul>
                                <li>세 서비스 중 세탁 (M = 6.60, SD = 0.74)은 청소 (M = 6.50, SD = 0.88)와 요리(M = 6.06, SD = 1.13)에 비해 가장 긍정적인 서비스로 평가되었다.</li>
                                <li>Tukey HSD 사후 검정은 세탁과 요리(p = 0.042) 간에 유의한 차이를 보였지만 청소와 세탁(p = 0.888), 청소와 요리(p = 0.121) 간에는 차이가 없었다.</li>
                            </ul>
                            <h4>a. Cleaning</h4>
                            <p>
                                청소 서비스 측면에서는 로봇의 AI 수준과 작업의 오염 수준, 난이도가 서비스 평가에 영향을 미쳤다. 
                                작업의 오염 수준과 난이도는 구매 의도에 영향을 미쳤다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/first-things-first/results-01.png' alt='results01'/>
                            </ProjectContentImg>
                            <h4>b. Laundry</h4>
                            <p>세탁 서비스 측면에서는 작업의 난이도가 서비스 평가에 영향을 미쳤다. 로봇의 조종 수준과 작업의 난이도는 구매 의도에 영향을 미쳤다.</p>
                            <ProjectContentImg>
                                <img src='images/first-things-first/results-02.png' alt='results02'/>
                            </ProjectContentImg>
                            <h4>c. Cooking</h4>
                            <p>요리 서비스 측면에서는 로봇의 AI 수준과 작업의 오염 수준, 난이도가 서비스 평가에 영향을 미쳤다. 작업의 위험도와 난이도는 구매 의도에 영향을 미쳤다.</p>
                            <ProjectContentImg>
                                <img src='images/first-things-first/results-03.png' alt='results03'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Publication</h2>
                            <p>
                                <a href='https://dl.acm.org/doi/10.1145/3371382.3378317'>First Things First: A Survey Exploring Key Services and Functions of a Robot</a><br /> 
                                2020 ACM/IEEE International Conference on Human-Robot Interaction(HRI) Late-Breaking Report
                            </p>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Video</h2>
                            <VideoPlayer youtubeId='faVdcVmok_o' />
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                    <h4>References</h4>
                        <p>[1] Executive Summary World Robotics 2018 Service Robots</p>
                        <p>[2] What Can a Personal Robot Do for You? (2011) by Guido Bugmann and Simon N. Copleston in Towards Autonomous Robotic Systems</p>
                        <p>[3] Gracefully Mitigating Breakdowns in Robotic Services (2010) by Min Kyung Lee, Sara Kiesler, Jodi Forlizzi, Siddhartha Srinivasa and Paul Rybski in ACM/IEEE HRI</p>
                        <p>[4] Mental Simulation and Product Evaluation: The Affective and Cognitive Dimensions of Process versus Outcome Simulation (2011) by Min Zhao, Steve Hoeffler and Gal Zauberman in Journal of Marketing Research</p>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );
}

export default FirstThingsFirst;