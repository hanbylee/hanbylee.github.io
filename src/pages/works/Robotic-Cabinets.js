import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentBox, ProjectContentImg } from "../../components/work/Project";

function RoboticCabinets() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                <ProjectInfoContainer>
                    <ProjectInfoImage src='images/robotic-cabinets/main.jpg' />
                        <div>
                            <h1>Robotic Cabinets</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>사용자의 정리 정돈을 돕는 로보틱 캐비닛 인터랙션 디자인</h5>
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
                                <p>인터랙션 리서처/엔지니어, 프로젝트 매니저</p>
                            </div>
                            <div>
                                <h6>Tool</h6>
                                <p>SolidWorks, Arduino, SPSS</p>
                            </div>
                            <div>
                                <h6>Duration</h6>
                                <p>2019.08 (3개월)</p>
                            </div>
                            <div>
                                <h6>Achievement</h6>
                                <a href="https://ieeexplore.ieee.org/document/9223550"><p>IEEE RO-MAN 2020 학회 논문</p></a>
                            </div>
                        </ProjectInfoContent>
                    </ProjectInfoContainer>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Background</h2>
                            <p>
                                컴퓨터가 개발되면서 사람들은 사운드, 비디오, 이미지 등 다양한 파일을 만들거나 다운로드하기 시작했다.
                                수납 가구에 물건을 정렬하고 저장하는 방법과 유사하게, 디지털 파일을 지정된 폴더에 정렬하고 저장할 수 있다. 
                                그러나 디지털 파일의 위치를 쉽게 검색할 수 있는 컴퓨터와 달리 수납 가구는 물건이 있는 위치를 기억해야 한다.
                            </p>
                            <ProjectContentBox>
                                <h6>Design Question:</h6>
                                <p>
                                    “사람들의 정리 정돈을 로봇 기술을 통해 도와줄 수 있는 방법은 무엇일까?”
                                </p>
                            </ProjectContentBox>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. Robot Design Approach</h3>
                            <p>로봇 디자인 방식에 따르면, 로봇의 종류는 아래와 같이 나뉠 수 있다[1].</p>
                            <ul>
                                <li>유기체 지향 로봇(organism-oriented robot): 사람, 동물과 같이 살아있는 유기체와 유사한 형태와 기능이 있는 로봇</li>
                                <li>객체 지향 로봇(object-oriented robot): 로봇 청소기와 같이 일반 제품에 로봇 기술을 적용한 로봇</li>
                            </ul>
                            <p>
                                또한, 객체 지향 로봇은 유기체 지향 로봇보다 소비자에게 더 자주 수용될 가능성이 있다[1]. 
                                객체 지향 로봇은 기존 제품의 로봇화에 중점을 두며, 우산과 액자 같은 작은 생활용품부터 서랍, 의자, 오토만 등 가구에 이르기까지 다양한 유형의 로봇 제품으로 개발될 수 있다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/robotic-cabinets/background-01.png' alt='background01'/>
                                <p>객체 지향 로봇은 유기체 지향 로봇보다 소비자에게 더 자주 수용될 가능성이 있다.</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Robotic Furniture</h3>
                            <p>
                                최근 로보틱 가구는 새로운 스마트 라이프 스타일의 패러다임을 도입하여 대중의 관심을 끌고 있다. 
                                IKEA와 Ori는 작은 공간에 사는 사람들을 위해 설계된 ROGNAN이라는 새로운 로보틱 가구 시스템을 개발했다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/robotic-cabinets/background-02.png' alt='background02'/>
                                <p>ROGNAN [출처: about.ikea.com/en]</p>
                            </ProjectContentImg>
                            <p>
                                특히, 효율적인 공간 정리를 원하는 오늘날 사람들의 요구에 알맞게 다양한 로보틱 수납 가구의 개발이 필요하다. 
                                가구는 인간의 행동이나 자세를 직접적으로 연관이 되는 제품이므로 사용성, 인체공학 등 다양한 디자인 문제를 신중히 고려해야 한다.
                            </p>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Study Design</h2>
                            <ProjectContentBox>
                                <h6>Research Question:</h6>
                                <p>
                                    “수납 가구의 로봇화는 어떻게 될 수 있으며 사용자들이 선호하는 인터랙션은 무엇인가?”
                                </p>
                            </ProjectContentBox>
                            <p>
                                사용자의 수납 가구 사용 패턴을 관찰하여 로보틱 수납 가구에 대한 디자인 인사이트를 도출하고, 사용자의 요구를 고려하여 프로토타이핑한다. 
                                로보틱 수납 가구와의 효과적인 상호 작용 방법을 찾기 위해 개발된 프로토타입에 대한 사용자의 인식을 평가한다.
                            </p>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. Participants</h3>
                            <p>피험자를 모집하여 연구실 조사(in-lab study)로 인터뷰와 실험이 진행되었다.</p>
                            <ul>
                                <li>피험자: 16명 (20~30대 / 여성 7명, 남성 9명)</li>
                            </ul>
                            <details>
                                <summary style={{cursor:'pointer'}}>피험자 내 설계 (within design)</summary>
                                <ul>
                                    <li>로보틱 캐비닛의 지능화 정도: within design - 피험자는 로보틱 캐비닛의 세 가지 조건을 모두 경험한다. (무작위 순서)</li>
                                </ul>
                            </details>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Design Requirements</h3>
                            <p>수납장, 서랍장 등 수납 가구 사용 시 사용자의 문제점과 요구를 파악하기 위해 인터뷰를 실시했다. 질문은 다음과 같다.</p>
                            <ul>
                                <li>수납 가구를 사용할 때 어떤 어려움이 있었는지 알려주세요.</li>
                                <li>위의 문제를 기술로 해결할 수 있는 방법에 대해 의견을 공유해 주세요.</li>
                            </ul>
                            <p>질문에 대한 피험자의 답변은 아래 표와 같이 정리할 수 있다.</p>
                            <ProjectContentImg>
                                <img src='images/robotic-cabinets/study-design-01.png' alt='studydesign01'/>
                                <p>수납 가구에 대한 사용자의 주된 문제점은 물건 정리와 물건 찾기였다.</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>3. Prototyping</h3>
                            <p>Wizard of Oz 기법 실험을 위한 로보틱 캐비닛을 디자인하고 개발하였다.</p>
                            <p>
                                인터뷰 결과를 바탕으로, 사용자의 정리 정돈 활동을 지원하는 로보틱 수납 가구를 만들기 위해 캐비닛을 선택했다. 
                                로보틱 수납 가구의 디자인 요구에서 선택된 인터랙션은 다음과 같다.
                            </p>
                            <ul>
                                <li>물건 정리: 사용자의 분류 기준에 따라 자동으로 물건 분류(#A)</li>
                                <li>물건 찾기: 물건을 찾기 위한 음성 인식(#C), 물건이 들어있는 수납 가구의 문이나 서랍이 열림(#F)</li>
                            </ul>
                            <p>설계된 인터랙션 시나리오는 다음과 같다.</p>
                            <ul>
                                <li>사용자가 “캐비닛”을 호출하고 음성 명령으로 물건을 넣을 위치를 물으면, 해당 위치의 문이 열린다. (1)</li>
                                <li>사용자가 “캐비닛”을 호출하고 음성 명령으로 물건이 있는 위치를 물으면, 해당 위치의 문이 열린다. (2)</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/robotic-cabinets/study-design-02.png' alt='studydesign02'/>
                            </ProjectContentImg>
                            <h4>a. 사용한 소프트웨어</h4>
                            <ul>
                                <li>3D 모델링: SolidWorks</li>
                                <li>하드웨어: Arduino</li>
                            </ul>
                            <h4>b. 제품 설계 세부 사항</h4>
                            <ul>
                                <li>서보 모터를 이용하여 캐비닛의 문을 열 수 있다.</li>
                                <li>적외선 통신을 통해 실험자는 캐비닛의 서보 모터를 제어할 수 있다.</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/robotic-cabinets/study-design-03.png' alt='studydesign03'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>4. Independent Variables</h3>
                            <p>독립 변수는 로보틱 캐비닛의 지능화 방식 3가지로 설정하였다.</p>
                            <h4>지능화 방식</h4>
                            <ul>
                                <li>일반 캐비닛</li>
                                <li>물건 정리를 돕는 로보틱 캐비닛</li>
                                <li>물건 찾기를 돕는 로보틱 캐비닛</li>
                            </ul>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>5. Procedure</h3>
                            <p>
                                피험자는 본 실험에 앞서 20가지 생활용품을 최대 4칸의 로보틱 캐비닛에 자신의 기준에 맞게 분류한다. 
                                그 기준에 맞춰 로보틱 캐비닛에 물건을 넣고 찾는 본 실험을 진행한다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/robotic-cabinets/study-design-04.png' alt='studydesign04'/>
                                <p>20가지 생활용품에 대해서 피험자마다 다른 분류 기준을 가지고 있다.</p>
                            </ProjectContentImg>
                            <p>
                                피험자는 무작위 순서로 로보틱 캐비닛의 3가지 조건을 모두 경험하며, 각 조건마다 3가지의 물건을 넣고 찾는 행위를 반복한다. 
                                로보틱 캐비닛의 조건은 모든 피험자에게 무작위 순서로 배정되었다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/robotic-cabinets/study-design-05.png' alt='studydesign05'/>
                                <img src='images/robotic-cabinets/study-design-06.png' alt='studydesign06'/>
                                <p>물건을 분류하고 있는 피험자</p>
                            </ProjectContentImg>
                            <details>
                                <summary style={{cursor:'pointer'}}>세부 실험 과정 예시</summary>
                                <h4>물건 정리를 돕는 로보틱 캐비닛의 경우</h4>
                                <ul>
                                    <li>피험자는 20가지 생활용품을 자신의 기준에 맞게 최대 4칸의 캐비닛에 분류한다. (실험자는 피험자의 기준을 표에 기록한다.)</li>
                                    <li>실험자는 임의의 물건을 피험자의 기준에 맞게 정리하도록 요청한다.</li>
                                    <li>피험자는 로보틱 캐비닛에게 물건을 어디에 넣어야 하는지 묻는다. 실험자는 피험자의 기준에 맞게 해당하는 칸의 문을 적외선 통신으로 연다.</li>
                                    <li>피험자는 로보틱 캐비닛의 열린 칸에 물건을 넣는다.</li>
                                    <li>실험자는 피험자의 기준에 맞게 물건을 로보틱 캐비닛에 정리하고, 임의의 물건을 찾도록 요청한다.</li>
                                    <li>피험자는 물건의 위치를 기억하고 찾는다.</li>
                                    <li>피험자는 한 가지 조건을 경험한 후, 해당 조건의 인상 평가를 진행한다.</li>
                                    <li>나머지 조건에 대해서도 2~7번과 같이 반복한다.</li>
                                </ul>
                            </details>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>6. Measurements</h3>
                            <p>각 실험 조건에 대해서 아래 4가지를 7점 리커트 척도로 측정하였다.</p>
                            <p>측정을 통해, 사용자가 각 조건의 로보틱 캐비닛를 얼마나 유용하게 생각했는지, 얼마나 사용이 편리하다고 생각했는지, 얼마나 지능적인 존재로 인지했는지, 얼마나 제품에 대해 만족하는지 확인하였다.</p>
                            <ul>
                                <li>유용성(perceived usefulness)[2]</li>
                                <li>사용 편의성(perceived ease of use)[2]</li>
                                <li>지능(perceived intelligence)[3]</li>
                                <li>제품 평가(product evaluation)[4, 5]</li>
                            </ul>
                            <details>
                                <summary style={{cursor:'pointer'}}>질문 아이템</summary>
                                <ProjectContentImg>
                                    <img src='images/robotic-cabinets/study-design-07.png' alt='studydesign07'/>
                                    <img src='images/robotic-cabinets/study-design-08.png' alt='studydesign08'/>
                                </ProjectContentImg>
                            </details>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Results</h2>
                            <p>실험을 통해 로보틱 캐비닛의 지능화 방식이 사용자의 인식에 미치는 영향을 조사하기 위해 일원 반복측정 분산분석(one-way RM ANOVA)을 수행했다.</p>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. Software</h3>
                            <ul>
                                <li>데이터 분석: SPSS</li>
                            </ul>
                            <p>로보틱 캐비닛의 유용성, 사교성 및 서비스 평가 측정에 대해 신뢰도 분석(Cronbach's alpha) 시, 모두 0.6 이상으로 유의한 결과가 나왔다.</p>
                            <details>
                                <summary style={{cursor:'pointer'}}>질문 아이템</summary>
                                <ProjectContentImg>
                                    <img src='images/robotic-cabinets/results-01.png' alt='results01'/>
                                    <p>각 측정에 대한 신뢰도 분석 후 Cronbach's alpha 계수</p>
                                </ProjectContentImg>
                            </details>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Main Effect</h3>
                            <ProjectContentImg>
                                <img src='images/robotic-cabinets/results-02.png' alt='results02'/>
                                <img src='images/robotic-cabinets/results-03.png' alt='results03'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>3. Usefulness</h3>
                            <p>로보틱 캐비닛의 지능화 방식이 유용성에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>물건 정리를 돕는 로보틱 캐비닛 - 물건 찾기를 돕는 로보틱 캐비닛 - 일반 캐비닛 순서로 유용하다고 인식했다.</li>
                            </ul>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>4. Ease of Use</h3>
                            <p>로보틱 캐비닛의 지능화 방식이 사용 편의성에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>물건 찾기를 돕는 로보틱 캐비닛 - 물건 정리를 돕는 로보틱 캐비닛 - 일반 캐비닛 순서로 사용이 편리하다고 인식했다.</li>
                            </ul>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>5. Intelligence</h3>
                            <p>로보틱 캐비닛의 지능화 방식이 지능에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>물건 찾기를 돕는 로보틱 캐비닛 - 물건 정리를 돕는 로보틱 캐비닛 - 일반 캐비닛 순서로 지능적인 존재라고 인식했다.</li>
                            </ul>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>6. Product Evaluation</h3>
                            <p>로보틱 캐비닛의 지능화 방식이 제품 평가에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>물건 찾기를 돕는 로보틱 캐비닛 - 물건 정리를 돕는 로보틱 캐비닛 - 일반 캐비닛 순서로 긍정적으로 인식했다.</li>
                            </ul>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Conclusion</h2>
                            <h3>1. Limitation & Future Work</h3>
                            <p>본 연구의 한계점은 다음과 같다.</p>
                            <ul>
                                <li>다양한 배경을 가진 충분한 수의 피험자를 모집한다면 실험 결과는 더 일반화 될 수 있다.</li>
                                <li>피험자가 사는 환경에서 사용되는 물건으로 실험을 한다면 로보틱 캐비닛에 대한 피험자의 자연스러운 인식과 반응을 조사할 수 있다.</li>
                                <li>사용자의 성향에 따라 선호하는 캐비닛이 다를 수 있다. 따라서 향후 사용자의 성향을 로봇 수납 가구의 설계 요소와 함께 고려해야한다.</li>
                            </ul>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Publication</h2>
                            <p>
                                <a href='https://ieeexplore.ieee.org/document/9223550' style={{ color:'white' }}>Designing Robotic Cabinets That Assist Users’ Tidying Behaviors</a><br /> 
                                2020 IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)
                            </p>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <h4>References</h4>
                        <p>[1] The Effects of Organism- Versus Object-Based Robot Design Approaches on the Consumer Acceptance of Domestic Robots (2017) by Sonya S. Kwak, Jun San Kim and Jung Ju Choi in International Journal of Social Robotics</p>
                        <p>[2] Perceived Usefulness, Perceived Ease of Use, and User Acceptance of Information Rechnology (1989) by Fred D. Davis in MIS Quarterly</p>
                        <p>[3] Measurement Instruments for the Anthropomorphism, Animacy, Likeability, Perceived Intelligence, and Perceived Safety of Robots (2009) by Christoph Bartneck, Dana Kulić, Elizabeth Croft and Susana Zoghbi in International Journal of Social Robotics</p>
                        <p>[4] Adoption of New and Really New Products: The Effects of Self-Regulation Systems and Risk Salience (2007) by Michal Herzenstein, Steven S. Posavac and J. Joško Brakus in Journal of Marketing Research</p>
                        <p>[5] The Role of Imagination-Focused Visualization on New Product Evaluation (1989) by Min Zhao, Steve Hoeffler and Darren W. Dahl in Journal of Marketing Research</p>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );
}

export default RoboticCabinets;