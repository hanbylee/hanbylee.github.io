import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentBox, ProjectContentImg } from "../../components/work/Project";
import VideoPlayer from "../../components/VideoPlayer";

function MoneyPlanet() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                    <ProjectInfoContainer>
                        <ProjectInfoImage src='images/money-planet/main.jpg' />
                        <div>
                            <h1>Money Planet</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>대학(원)생을 위한 세계 지도 기반 자금 관리 서비스</h5>
                        </div>
                        <ProjectInfoContent>
                            <div>
                                <h6>Type</h6>
                                <p>서비스 UX 리서치</p>
                            </div>
                            <div>
                                <h6>Affiliation</h6>
                                <p>UNIST 창의디자인공학과</p>
                            </div>
                            <div>
                                <h6>Role</h6>
                                <p>인터랙션 리서처/디자이너</p>
                            </div>
                            <div>
                                <h6>Tool</h6>
                                <p>Sketch, Origami Studio</p>
                            </div>
                            <div>
                                <h6>Duration</h6>
                                <p>2018.01 (3개월)</p>
                            </div>
                            <div>
                                <h6>Achievement</h6>
                                <p>Red Dot: Design Concept 2018 - 파이널리스트</p>
                            </div>
                        </ProjectInfoContent>
                    </ProjectInfoContainer>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Overview</h2>
                            <p>
                                Money Planet은 대학(원)생들이 스트레스를 덜 받으며 돈을 관리할 수 있도록 세계 지도를 매개로 자산을 시각화 한 새로운 개념의 자금 관리 서비스이다.
                                통장을 스쳐 지나가는 스트레스 유발 숫자들 보다, 많이 모을수록 더 많은 여행지로 떠날 수 있는 기회를 보여줌으로써 학생들이 꾸준히 돈을 관리할 수 있도록 동기부여한다.
                            </p>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Background</h2>
                            <p>프로젝트의 시작은 개인과 가족의 돈 관리에 대해 흥미로운 방식으로 접근한 ‘Money Talks: Tracking Personal Finances’ 논문으로부터 영감을 얻어 시작되었다[1].</p>
                            <ProjectContentImg>
                                <img src='images/money-planet/background-01.png' alt='background01'/>
                                <p>대부분의 대학생들은 돈에 대한 걱정을 한다. [통계 출처: The Higher Education]</p>
                            </ProjectContentImg>
                            <p>
                                대학원 생활 중 주변 동료들의 돈에 대한 스트레스를 목격하고, 관련 문헌을 조사한 결과, 실제로 대다수의 대학(원)생들이 돈에 대해 심한 감정 소비를 하고 있는 것을 알 수 있었다. 
                                대학생들의 자금 관련 스트레스는 학업 성취도 감소, 수강 학점 감소, 자퇴 및 늦어지는 졸업과 같은 대학생들에게 부정적인 영향을 미치는 주요 요인 중 하나이다.
                            </p>
                            <ProjectContentBox>
                                <h6>Design Question:</h6>
                                <p>
                                    “대학(원)생들이 스트레스 없이 자금을 관리할 수 있는 방법은 무엇일까?”
                                </p>
                            </ProjectContentBox>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>User Study</h2>
                            <h3>1. Triangulation</h3>
                            <p>단일 사용자 조사 방법론 사용으로 인해 생길 수 있는 선입견, 오류들을 보완하기 위해 두 가지 이상 UX 방법론을 조사 대상에 맞춰 조합, 수행하는 삼각 검증(triangulation)을 적용하였다.</p>
                            <p>삼각 검증에 사용된 방법론은 다음과 같다.</p>
                            <ul>
                                <li>온라인 서베이: 대학(원)생들의 대략적인 금융 관리 상황을 알아보고자 진행</li>
                                <li>필드 스터디: 온라인 서베이를 바탕으로 금융 서비스를 사용하는 학생과 하지 않는 학생으로 나누어 피험자의 행동을 관찰</li>
                                <li>레트로스펙티브 인터뷰: 필드 스터디를 진행한 피험자의 기록을 기반으로 이모션 로그와 인터뷰를 진행하며 파인딩 도출</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/money-planet/user-study-01.png' alt='userstudy01'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Online Survey</h3>
                            <p>Google Form을 사용하여 서베이를 진행하였고, 96명이 참여하였다.</p>
                            <h4>a. Insight</h4>
                            <ul>
                                <li>금융 관리 서비스 사용 경험 (있다: 54명, 없다: 42명)</li>
                                <li>돈을 저축하고 싶어하는 이유 (특정 목적 달성 등)</li>
                                <li>금융 관리 앱을 사용하지 않는 이유 (지속적으로 사용하기 어려움 등</li>
                                <li>돈을 관리하는 방법 (남은 돈 확인하기 등)</li>
                                <li>장기 저축 목표를 달성하는 이유 (여행, 차, 주택 및 결혼 자금 등)</li>
                                <li>돈과 감정 (예상치 못한 큰 지출에 대한 감정: 부정적 75%)</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/money-planet/user-study-02.png' alt='userstudy02'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>3. Field Study(Purchase History)</h3>
                            <p>
                                피험자에게 주말을 포함하여 일주일 동안 모든 지출의 영수증 수집하도록 요청하였다. 
                                영수증이 없는 경우 엑셀에 지출을 기록하도록 요청하였다. purchase history는 기존 필드 스터디를 '자금 관리'라는 프로젝트 주제에 맞춰 창조한 새로운 방법론이다.
                            </p>
                            <ul>
                                <li>금융 서비스 사용자: 5명</li>
                                <li>금융 서비스 비사용자 5명</li>
                            </ul>
                            <h4>a. Insight</h4>
                            <ul>
                                <li>실험자: 피험자의 현금 사용을 포함한 모든 금융 활동을추적 가능</li>
                                <li>피험자: 레트로스펙티브 인터뷰를 할 때, 영수증을 통해 특정 지출 순간의 감정이나 경험을 쉽게 정리 가능</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/money-planet/user-study-03.png' alt='userstudy03'/>
                                <p>purchase history를 통해 모은 영수증</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>4. Retrospective Interview</h3>
                            <p>필드 스터디에서 얻어진 영수증을 시간 순서대로 나열한 보드를 통해 피험자의 지출에 대한 감정을 추적하고, 피험자의 금융 관리 방법과 관련하여 인터뷰를 진행했다.</p>
                            <ProjectContentImg>
                                <img src='images/money-planet/user-study-04.png' alt='userstudy04'/>
                                <p>purchase history 보드에 지출/수익에 따라 그 당시의 감정을 적는다.</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>5. Findings</h3>
                            <p>사용자 조사를 통해 얻어진 key finding은 다음과 같다.</p>
                            <ProjectContentImg>
                                <img src='images/money-planet/user-study-05.png' alt='userstudy05'/>
                            </ProjectContentImg>
                            <ul>
                                <li>금융 관리 앱을 사용하는 대학생은 대부분 저금이 아닌 지출 추적을 위해 활용한다.</li>
                                <li>자신의 자금 관리를 대략적으로 한다.</li>
                                <li>돈은 스트레스 요소 중 하나다.</li>
                                <li>학기를 기준으로 돈을 관리한다.</li>
                                <li>학업에 집중하기 위해 돈에 너무 여념 하지 않으려 노력한다.</li>
                                <li>여행은 대학생들이 자금을 관리하는 가장 일반적인 목적이다.</li>
                                <li>스트레스를 받는 것보다 충동적인 지출이 낫다고 생각한다.</li>
                                <li>취미 생활과 같은 곳에 투자하는 비용을 아깝다고 생각하지 않는다.</li>
                            </ul>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Data Modeling</h2>
                            <h3>1. Persona</h3>
                            <p>사용자 조사를 통해 수집한 데이터를 바탕으로 primary, secondary, supplemental 페르소나를 설계하였다.</p>
                            <ProjectContentImg>
                                <img src='images/money-planet/data-modeling-01.png' alt='datamodeling01'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h2>2. User Scenario</h2>
                            <p>페르소나를 기반으로 모바일 간략한 앱 시나리오를 제작하였다. 해당 보드는 비디오 시나리오로도 사용되었다.</p>
                            <ProjectContentImg>
                                <img src='images/money-planet/data-modeling-02.png' alt='datamodeling02'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Workshop</h2>
                            <h3>1. HMWs</h3>
                            <p>How Might We 질문을 통해 다음과 같이 3 가지 주요 디자인 방향을 정할 수 있었다.</p>
                            <ul>
                                <li>How might we help students to set/achieve a goal?</li>
                                <li>How might we help students to track their expenditure/income?</li>
                                <li>How might we help students to reflect their expenditure for behavior changing?</li>
                            </ul>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Affinity Diagram</h3>
                            <p>어피니티 다이어그램을 통해 다음과 같이 4가지 키워드를 설정할 수 있었다.</p>
                            <ul>
                                <li>여행과 관련짓기</li>
                                <li>금융 관리의 시각화</li>
                                <li>충동적인 지출 허용</li>
                                <li>상황에 맞는 정보 제공</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/money-planet/workshop-01.png' alt='workshop01'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>3. Concept Sketch</h3>
                            <p>어피니티 다이어그램에서 나온 키워드를 바탕으로 22개의 컨셉 스케치를 진행하였다.</p>
                            <ProjectContentImg>
                                <img src='images/money-planet/workshop-02.png' alt='workshop02'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>UI Design</h2>
                            <h3>1. Sitemap</h3>
                            <ProjectContentImg>
                                <img src='images/money-planet/ui-design-01.png' alt='uidesign01'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Wire Framing</h3>
                            <p>스케치한 키 스크린을 바탕으로 lo-fi 프로토타입을 만들었다. thinking aloud 및 휴리스틱 평가와 같은 사용성 테스트로 프로토타입을 평가했다.</p>
                            <ul>
                                <li>What: 이 앱은 대학생들이 자금을 추적하고 관리하도록 지원한다.</li>
                                <li>How : 등록된 계좌의 금액을 기반으로, 3 가지 색상으로 구분된 세계 지도와 여러 금융 관리 팁을 제공하여 사용자가 금융 목표를 달성하는 데 도움이 된다.</li>
                                <li>Why : 추상적인 자금 관리 방식을 사용하면 대학생들은 스트레스를 덜 받는다.</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/money-planet/ui-design-02.png' alt='uidesign02'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1st Iteration</h3>
                            <p>등록된 계좌의 금액에 따라 여행을 갈 수 있는 나라에 대한 시각화가 ‘가능’, ‘보통’, ‘불가능‘의 세 가지 색상으로 세계 지도에 표현된다.</p>
                            <p>
                                사용자의 소비 패턴에 따라 필요하거나 원하는 것에 지출할 수 있도록 장려한다. 
                                Money Planet은 많은 학업 압박을 받는 학생들을 위해 “티끌 모아 태산이다”를 강요하지 않는다. 
                                오히려 “시험이 있는 날엔, 당신의 라떼에 샷을 추가할 가치가 있습니다!”와 같이 유쾌한 방법으로 지출할 수 있도록 만든다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/money-planet/ui-design-03.png' alt='uidesign03'/>
                                <img src='images/money-planet/ui-design-04.png' alt='uidesign04'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2nd Iteration</h3>
                            <p>휴리스틱 평가의 시각적인 부분에 대한 피드백을 반영하여, 저축의 상징인 동전을 닮은 원으로 지도를 구성하여 금융 관리 앱 정체성이 들어나도록 만들었으며, 숫자의 지루함을 극복하기 위해 게임같은 시각화를 통해 동기를 부여한다.</p>
                            <ProjectContentImg>
                                <img src='images/money-planet/ui-design-05.png' alt='uidesign05'/>
                                <img src='images/money-planet/ui-design-06.jpg' alt='uidesign06'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Video</h2>
                            <VideoPlayer youtubeId='WebD6vN2rt8' />
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <h4>References</h4>
                        <p>[1] Money Talks: Tracking Personal Finances (2014) by Joseph Jofish Kaye, Mary McCuistion, Rebecca Gulotta and David A. Shamma in ACM CHI</p>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );
}

export default MoneyPlanet;