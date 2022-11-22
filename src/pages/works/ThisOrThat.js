import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentBox, ProjectContentImg } from "../../components/work/Project";

function ThisOrThat() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                    <ProjectInfoContainer>
                        <ProjectInfoImage src='images/this-or-that/00_main.jpg' />
                        <div>
                            <h1>This or That</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>소셜 로봇의 포인팅 제스처와 발화 방식에 따른 사용자의 인식 연구</h5>
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
                                <p>인터랙션 리서처/엔지니어</p>
                            </div>
                            <div>
                                <h6>Tool</h6>
                                <p>SolidWorks, Raspberry Pi, TurtleBot, SPSS</p>
                            </div>
                            <div>
                                <h6>Duration</h6>
                                <p>2020.02 (3개월)</p>
                            </div>
                            <div>
                                <h6>Achievement</h6>
                                <a href="https://ieeexplore.ieee.org/document/9341067"><p>IEEE/RSJ IROS 2020 학회 논문</p></a>
                            </div>
                        </ProjectInfoContent>
                    </ProjectInfoContainer>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Background</h2>
                            <p>
                                우리는 같은 공간에 있는 사람과 대화할 때 주변의 사물, 장소 등이 자주 토픽이 되고, 제스처나 지시어를 사용해 위치 정보를 공유한다.
                                로봇 또한, 휴대폰이나 스마트 스피커와 달리 언어적 의사소통뿐만 아니라 비언어적 의사소통을 가능하게 하는 물리적인 형태(physical embodiment)를 가지고 있다.
                            </p>
                            <p>
                                하지만, HRI 측면에서 로봇의 포인팅 연구는 몇 가지 제한이 있었다.
                            </p>
                            <ProjectContentBox>
                                <h6>Design Question:</h6>
                                <p>
                                    “인간과 로봇이 효과적으로 상호작용할 수 있는 로봇의 포인팅 방식은 무엇일까?”
                                </p>
                            </ProjectContentBox>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. Locative Deixis</h3>
                            <p>
                                직시어는 대화에서 자주 사용된다. 특히, 위치격 직시어(예시: 이거, 저거)는 주변에 있는 특정 대상을 청자 또는 독자가 이해할 수 있도록 언어를 사용해서 참조할 때 사용된다.
                                하지만, 로봇은 언어적 의사소통에 있어 대부분 서술적 직시어(예시: 왼쪽에서 두 번째)를 사용한다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/this-or-that/11_background.png' loading='lazy' alt='background01'/>
                                <p>직시어는 위치격 직시어와 서술적 직시어로 나뉠 수 있다.</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Pointing Gesture</h3>
                            <p>
                                포인팅 제스처는 유아가 첫 단어를 말하기 전 배우는 의사소통 기술 중 하나다[1].
                                사람들은 복잡한 서술을 생략하기 위해 팔, 머리, 눈, 입술, 코와 같은 다양한 신체 부위를 사용하여 포인팅 제스처를 취한다[2].
                                하지만, 대부분의 로봇 포인팅 제스처에 대한 연구는 손가락으로 가리키는 것으로 제한되었다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/this-or-that/12_background.png' loading='lazy' alt='background02'/>
                                <p>사람은 다양한 신체 부위를 사용하여 포인팅 제스처를 취할 수 있다.</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>3. Head Pointing</h3>
                            <p>
                                사람은 머리를 움직여서 특정 대상을 가리키기도 한다.
                                HRI 연구에 따르면 로봇이 머리를 움직여서 가리키는 것은 인간의 행동과 비슷한 효과를 나타낸다[3].
                                사람은 시선과 돌출된 코를 통해 포인팅 제스처를 취할 수 있는 반면에, 소셜 로봇의 머리는 대부분 평면 디스플레이를 사용하기 때문에 정확한 포인팅이 가능한지 알 수 없다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/this-or-that/13_background.png' loading='lazy' alt='background03'/>
                                <p>사람은 시선과 돌출된 코를 통해 포인팅 제스처를 쉽게 취할 수 있다.</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Study Design</h2>
                            <ProjectContentBox>
                                <h6>Research Question:</h6>
                                <p>
                                “로봇의 언어적, 비언어적 포인팅은 사용자의 인식에 어떤 영향을 끼치며, 효과적인 포인팅 인터랙션은 무엇일까?”
                                </p>
                            </ProjectContentBox>
                            <p>
                                로봇의 포인팅 관련 발화 및 제스처를 다양한 조건으로 프로토타이핑한 후, 상황에 따라 로봇의 표현에 대한 사용자의 인식을 정량 조사한다.
                            </p>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. Independent Varialbes</h3>
                            <p>
                                로봇은 사용자에게 언어뿐만 아니라 포인팅 제스처를 통해 물체의 위치를 알릴 수 있다. 또한, 포인팅 제스처는 시선(eye pointing) 확장이다[4].
                                즉, 시선은 포인팅 제스처의 기본이다.
                            </p>
                            <p>독립 변수는 언어 2가지, 포인팅 제스처 2가지, 시선 2가지로 설정하였다.</p>
                            <h4 className='korean'>a. 언어</h4>
                            <ul>
                                <li>지시적(deictic)</li>
                                <li>서술적(descriptive)</li>
                            </ul>
                            <h4 className='korean'>b. 포인팅 제스처</h4>
                            <ul>
                                <li>코가 있는(with nose)</li>
                                <li>코가 없는(without nose)</li>
                            </ul>
                            <h4 className='korean'>c. 시선</h4>
                            <ul>
                                <li>눈이 있는(with eyes)</li>
                                <li>눈이 없는(without eyes)</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/this-or-that/21_study-design.png' loading='lazy' alt='studydesign01'/>
                                <p>독립 변수: 언어(2가지) X 포인팅 제스처(2가지) X 시선(2가지)</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Prototyping</h3>
                            <p>Wizard of Oz 기법 실험을 위한 로봇을 디자인하고 개발하였다.</p>
                            <h4 className='korean'>a. 사용한 소프트웨어</h4>
                            <ul>
                                <li>3D 모델링: SolidWorks</li>
                                <li>하드웨어: Raspberry Pi</li>
                                <li>로봇플랫폼: TurtleBot</li>
                            </ul>
                            <details>
                                <summary style={{cursor:'pointer'}}>제품 설계 세부 사항</summary>
                                <ul>
                                    <li>로봇 프로토타입은 ROS 기반 모바일 로봇인 TurtleBot3를 기반으로 방향을 변경하면서 이동할 수 있다.</li>
                                    <li>블루투스 통신으로 로봇의 언어 타입을 제어할 수 있다.</li>
                                    <li>Raspberry Pi와 연결된 모니터를 통해 로봇의 시선을 제어할 수 있다.</li>
                                    <li>로봇의 움직임은 블루투스 통신을 통해 조이스틱 컨트롤러를 통해 수동으로 제어된다.</li>
                                </ul>
                            </details>
                            <ProjectContentImg>
                                <img src='images/this-or-that/22_study-design.png' loading='lazy' alt='studydesign02'/>
                                <p>제품 프로토타입</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>3. Participants</h3>
                            <p>피험자를 모집하여 연구실 조사(in-lab study)로 실험이 진행되었다.</p>
                            <ul>
                                <li>피험자: 48명 (23세~37세 / 여성 26명, 남성 22명)</li>
                            </ul>
                            <details>
                                <summary style={{cursor:'pointer'}}>피험자 설계 세부 사항 [혼합 설계 (mixed design)]</summary>
                                <ul>
                                    <li>언어: within design - 피험자는 두 가지 언어를 모두 경험한다. (무작위 순서)</li>
                                    <li>포인팅 제스처: within design - 피험자는 두 가지 포인팅 제스처를 모두 경험한다. (무작위 순서)</li>
                                    <li>시선: between design - 피험자는 한 가지 시선을 경험한다.</li>
                                </ul>
                            </details>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>4. Experiments</h3>
                            <p>로봇이 사용자와 상호작용하는 상황에 따라, 2가지의 실험을 진행하였다.</p>
                            <ul>
                                <li>명령형 포인팅 상황: 가리킨 객체에 대한 요청 - 자리 안내(seat guide)</li>
                                <li>서술형 포인팅 상황: 가리킨 객체에 대한 설명 - 전시 안내(exhibition guide)</li>
                            </ul>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>5. Measurements</h3>
                            <p>각 실험 조건에 대해서 아래 4가지를 7점 리커트 척도로 측정하였다.</p>
                            <p>
                                측정을 통해, 사용자가 각 로봇의 표현 방식에 따라 사용자에게 위치 정보를 얼마나 효과적으로, 사회적으로, 자연스럽게 제공하는지 확인하였다.
                                또한, 로봇에 대한 전반적인 인상을 알아보기위해 제품 평가를 조사하였다.
                            </p>
                            <ul>
                                <li>효율성(perceived effectiveness)[5]</li>
                                <li>사교성(perceived sociability)[6]</li>
                                <li>자연스러움(perceived naturalness)[5]</li>
                                <li>제품 평가(product evaluation)[7, 8]</li>
                            </ul>
                            <p>진행되었던 실험 중, 전시 안내 상황에서는 로봇의 설명에 대한 인식을 알아보기 위해 아래 2가지를 추가적으로 측정하였다.</p>
                            <ul>
                                <li>유능함(perceived competency)[6]</li>
                                <li>신뢰성(perceived trustworthiness)[6]</li>
                            </ul>
                            <details>
                                <summary style={{cursor:'pointer'}}>질문 아이템</summary>
                                <ProjectContentImg>
                                    <img src='images/this-or-that/23_study-design.png' loading='lazy' alt='studydesign03'/>
                                    <img src='images/this-or-that/24_study-design.png' loading='lazy' alt='studydesign04'/>
                                    <p>4가지 공통 측정과 2가지 추가 측정에 대한 아이템</p>
                                </ProjectContentImg>
                            </details>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Seat Guide</h2>
                            <p>로봇은 피험자를 맞이하고 자리를 안내한다. 피험자는 연구실에 배치된 5개의 의자 중 로봇이 포인팅 하는 의자에 앉도록 요청받았다.</p>
                            <ProjectContentImg>
                                <img src='images/this-or-that/31_seat-guide.png' loading='lazy' alt='seatguide01'/>
                                <img src='images/this-or-that/seat-guide-02.png' loading='lazy' alt='seatguide02'/>
                                <p>자리 안내 실험 환경</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. Procedure</h3>
                            <p>피험자는 무작위 순서로 총 4번의 착석 요청을 받았으며, 각 착석 이후에 로봇의 인상을 평가했다. 로봇의 언어 및 제스처 표현 예는 다음과 같다.</p>
                            <ProjectContentImg>
                                <img src='images/this-or-that/seat-guide-03.png' alt='seatguide03'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>3. Results</h3>
                            <p>실험을 통해 각 조건의 로봇이 사용자의 인식에 미치는 영향을 조사하기 위해 이원 반복측정 분산분석(two-way RM ANOVA)을 수행했다.</p>
                            <p>로봇의 효율성, 사교성, 자연스러움 및 제품 평가 측정에 대해 신뢰도 분석(Cronbach's alpha) 시, 모두 0.6 이상으로 유의한 결과가 나왔다.</p>
                            <h4 className='korean'>a. 사용한 소프트웨어</h4>
                            <ul>
                                <li>데이터 분석: SPSS</li>
                            </ul>
                            <details>
                                <summary style={{cursor:'pointer'}}>신뢰도 분석 결과</summary>
                                <ProjectContentImg>
                                    <img src='images/this-or-that/seat-guide-04.png' alt='seatguide04'/>
                                    <p>각 측정에 대한 신뢰도 분석 후 Cronbach's alpha 계수</p>
                                </ProjectContentImg>
                            </details>
                            <h4>a. 주효과</h4>
                            <ProjectContentImg>
                                <img src='images/this-or-that/seat-guide-05.png' alt='seatguide05'/>
                                <img src='images/this-or-that/seat-guide-06.png' alt='seatguide06'/>
                            </ProjectContentImg>
                            <h4>b. Effectiveness</h4>
                            <p>포인팅 제스처가 효율성에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>코가 있는 로봇이 코가 없는 로봇보다 더 효율적이라고 인식했다.</li>
                            </ul>
                            <h4>c. Sociability</h4>
                            <p>포인팅 제스처가 사교성에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>코가 있는 로봇이 코가 없는 로봇보다 더 사교적이라고 인식했다.</li>
                            </ul>
                            <h4>d. Product Evaluation</h4>
                            <p>언어와 포인팅 제스처가 제품 평가에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>서술적 발화를 하는 로봇이 지시적 발화를 하는 로봇보다 더 긍정적이라고 인식했다.</li>
                                <li>코가 있는 로봇이 코가 없는 로봇보다 더 긍정적이라고 인식했다.</li>
                            </ul>
                            <h4>e. Accuracy of Location Information Perception</h4>
                            <p>위치 정보 인식의 정확성은 다음과 같다. (피험자가 안내 로봇이 의도한 자리에 앉은 확률)</p>
                            <ProjectContentImg>
                                <img src='images/this-or-that/seat-guide-07.png' alt='seatguide07'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Exhibition Guide</h2>
                            <p>
                                피험자는 안내 로봇을 통해 로봇 쇼룸에 전시된 로봇에 대한 설명을 듣는다.
                                안내 로봇은 전시된 5개의 로봇을 하나씩 포인팅 하면서 설명하고, 피험자는 메모지에 안내 로봇이 포인팅 한 순서대로 메모한다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/this-or-that/exhibition-guide-01.png' alt='exhibitionguide01'/>
                                <img src='images/this-or-that/exhibition-guide-02.png' alt='exhibitionguide02'/>
                                <p>전시 안내 실험 환경</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. Procedure</h3>
                            <p>피험자는 무작위 순서로 총 4번의 조건을 경험했으며, 각 조건 이후에 로봇의 인상을 평가했다. 로봇의 언어 및 제스처 표현 예는 다음과 같다.</p>
                            <ProjectContentImg>
                                <img src='images/this-or-that/exhibition-guide-03.png' alt='exhibitionguide03'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>3. Results</h3>
                            <p>실험을 통해 각 조건의 로봇이 사용자의 인식에 미치는 영향을 조사하기 위해 이원 반복측정 분산분석(two-way RM ANOVA)을 수행했다.</p>
                            <p>로봇의 효율성, 사교성, 자연스러움, 유능함, 신뢰성 및 제품 평가 측정에 대해 신뢰도 분석(Cronbach's alpha) 시, 모두 0.6 이상으로 유의한 결과가 나왔다.</p>
                            <h4 className='korean'>a. 사용한 소프트웨어</h4>
                            <ul>
                                <li>데이터 분석: SPSS</li>
                            </ul>
                            <details>
                                <summary style={{cursor:'pointer'}}>신뢰도 분석 결과</summary>
                                <ProjectContentImg>
                                    <img src='images/this-or-that/exhibition-guide-04.png' alt='exhibitionguide04'/>
                                    <p>각 측정에 대한 신뢰도 분석 후 Cronbach's alpha 계수</p>
                                </ProjectContentImg>
                            </details>
                            <h4>a. 주효과</h4>
                            <ProjectContentImg>
                                <img src='images/this-or-that/exhibition-guide-05.png' alt='exhibitionguide05'/>
                                <img src='images/this-or-that/exhibition-guide-06.png' alt='exhibitionguide06'/>
                            </ProjectContentImg>
                            <h4>b. 상호작용 효과</h4>
                            <ProjectContentImg>
                                <img src='images/this-or-that/exhibition-guide-07.png' alt='exhibitionguide07'/>
                            </ProjectContentImg>
                            <h4>c. Effectiveness</h4>
                            <p>언어와 포인팅 제스처가 효율성에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>서술적 발화를 하는 로봇이 지시적 발화를 하는 로봇보다 더 효율적이라고 인식했다.</li>
                                <li>코가 있는 로봇이 코가 없는 로봇보다 더 효율적이라고 인식했다.</li>
                            </ul>
                            <h4>d. Sociability</h4>
                            <p>언어와 포인팅 제스처가 사교성에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>서술적 발화를 하는 로봇이 지시적 발화를 하는 로봇보다 더 사교적이라고 인식했다.</li>
                                <li>코가 있는 로봇이 코가 없는 로봇보다 더 사교적이라고 인식했다.</li>
                            </ul>
                            <p>또한, 언어와 포인팅 제스처가 사교성에 미치는 상호작용 효과가 존재했다.</p>
                            <ul>
                                <li>지시적 발화를 하는 로봇일 때, 코가 있는 로봇이 코가 없는 로봇보다 더 사교적이라고 인식했다.</li>
                            </ul>
                            <p>로봇에 대해 사용자가 인식하는 사교성을 높이기 위해 지시적 발화(deictic speech) 유형에는 코 포인팅을 적용할 수 있다.</p>
                            <h4>e. Naturalness</h4>
                            <p>언어와 포인팅 제스처가 자연스러움에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>서술적 발화를 하는 로봇이 지시적 발화를 하는 로봇보다 더 자연스럽다고 인식했다.</li>
                                <li>코가 있는 로봇이 코가 없는 로봇보다 더 자연스럽다고 인식했다.</li>
                            </ul>
                            <p>또한, 포인팅 제스처와 시선이 자연스러움에 미치는 상호작용 효과가 존재했다.</p>
                            <ul>
                                <li>눈이 있는 로봇일 때, 코가 있는 로봇이 코가 없는 로봇보다 더 자연스럽다고 인식했다.</li>
                                <li>눈이 없는 로봇일 때, 코가 있는 로봇이 코가 없는 로봇보다 더 자연스럽다고 인식했다.</li>
                            </ul>
                            <p>로봇에 대해 사용자가 인식하는 자연스러움을 높이기 위해 로봇의 시선 유무와 상관없이 코 포인팅을 적용할 수 있다.</p>
                            <h4>f. Competency</h4>
                            <p>언어와 포인팅 제스처가 유능함에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>서술적 발화를 하는 로봇이 지시적 발화를 하는 로봇보다 더 유능하다고 인식했다.</li>
                                <li>코가 있는 로봇이 코가 없는 로봇보다 더 유능하다고 인식했다.</li>
                            </ul>
                            <h4>g. Trustworthiness</h4>
                            <p>언어와 포인팅 제스처가 신뢰성에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>서술적 발화를 하는 로봇이 지시적 발화를 하는 로봇보다 더 신뢰할 수 있다고 인식했다.</li>
                                <li>코가 있는 로봇이 코가 없는 로봇보다 더 신뢰할 수 있다고 인식했다.</li>
                            </ul>
                            <h4>h. Product Evaluation</h4>
                            <p>언어와 포인팅 제스처가 제품 평가에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>서술적 발화를 하는 로봇이 지시적 발화를 하는 로봇보다 더 긍정적으로 인식했다.</li>
                                <li>코가 있는 로봇이 코가 없는 로봇보다 더 긍정적으로 인식했다.</li>
                            </ul>
                            <p>또한, 언어와 시선이 제품 평가에 미치는 상호작용 효과가 존재했다.</p>
                            <ul>
                                <li>눈이 있는 로봇일 때, 서술적 발화를 하는 로봇이 지시적 발화를 하는 로봇보다 더 긍정적이라고 인식했다.</li>
                                <li>눈이 없는 로봇일 때, 서술적 발화를 하는 로봇이 지시적 발화를 하는 로봇보다 더 긍정적이라고 인식했다.</li>
                            </ul>
                            <p>로봇에 대해 사용자가 인식하는 제품 평가을 높이기 위해 로봇의 시선 유무와 상관없이 서술적 발화(descriptive speech)를 적용할 수 있다.</p>
                            <h4>i. Accuracy of Location Information Perception</h4>
                            <p>언어와 포인팅 제스처, 시선이 위치 정보 인식의 정확성에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>지시적 발화를 하는 로봇보다 서술적 발화를 하는 로봇을 통해 정보를 더 정확하게 인식했다.</li>
                                <li>코가 없는 로봇보다 코가 있는 로봇을 통해 정보를 더 정확하게 인식했다.</li>
                                <li>눈이 있는 로봇보다 눈이 없는 로봇을 통해 정보를 더 정확하게 인식했다.</li>
                            </ul>
                            <p>또한, 언어와 포인팅 제스처가 유용성에 미치는 상호작용 효과가 존재했다.</p>
                            <ul>
                                <li>지시적 발화를 하는 로봇일 때, 코가 없는 로봇보다 코가 있는 로봇을 통해 정보를 더 정확하게 인식했다.</li>
                            </ul>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Conclusion</h2>
                            <h3>1. Interpretation of Results</h3>
                            <p>결과에 대한 해석은 다음과 같다.</p>
                            <ul>
                                <li>사람들은 명령문과 평서문 포인팅 상황에 상관없이 서술적 언어 유형과 코 포인팅을 사용하여 위치 정보를 제공하는 것을 전반적으로 선호하였다.</li>
                                <li>위치 정보 인식의 정확성은 언어 유형이 중요하다. 자리 안내 상황에서는 피실험자와 로봇이 마주보고 있었기 때문에 왼쪽과 오른쪽을 반대로 생각하는 사람들이 존재했다.</li>
                            </ul>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Implication</h3>
                            <p>본 연구는 다음과 같은 영향을 줄 수 있다.</p>
                            <ul>
                                <li>인간의 사회적 상호작용 연구에 기여할 수 있다. 인간 연구에서는 코를 탈부착할 수 없지만, 인공물인 로봇에서는 코의 영향에 관한 연구가 가능하다.</li>
                                <li>로봇의 발화 스타일 디자인 연구에 기여할 수 있다. 서술적 언어 유형에서는 사용자와 기준점을 일치시켜야 하며, 마주봐야 하는 경우에는 지시적 언어 유형으로 제공되어야 한다.</li>
                                <li>로봇의 디자인 개선에 기여할 수 있다. 로봇이 제공한 정보가 사용자에게 치명적인 영향을 미치지 않는 경우, 사용자가 더 선호하는 서술적 언어 유형으로 제공하도록 디자인되어야 한다.</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/this-or-that/conclusion-01.png' alt='conclusion01'/>
                                <p>사용자와 로봇이 기준점이 같은 경우와 다른 경우</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>3. Limitation & Future Work</h3>
                            <p>본 연구의 한계점은 다음과 같다.</p>
                            <ul>
                                <li>본 연구는 단일 환경을 설정했지만, 사용자와 로봇 사이의 거리를 고려하여 보다 다양하고 자연스러운 실험 환경에서 연구를 수행할 수 있다.</li>
                                <li>본 연구는 위치 정보 인식의 정확성을 측정했지만, 사용자가 위치를 인식하는데 걸린 시간을 측정해서 각 조건의 유효성을 알아볼 수 있다.</li>
                            </ul>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Publication</h2>
                            <p>
                                <a href='https://ieeexplore.ieee.org/document/9341067'>This or That: The Effect of Robot’s Deictic Expression on User’s Perception</a><br /> 
                                2020 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)
                            </p>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <h4>References</h4>
                        <p>[1] Pointing: Where Language, Culture, and Cognition Meet (2003) by Sotaro Kita</p>
                        <p>[2] The Role of Gesture in Communication and Thinking (1999) by Susan Goldin-Meadow in Trends in Cognitive Sciences</p>
                        <p>[3] We Are Not Contortionists: Coupled Adaptive Learning for Head and Body Orientation Estimation in Surveillance Video (2012) by Cheng Chen and Jean-Marc Odobez in IEEE Conference on Computer Vision and Pattern Recognition</p>
                        <p>[4] Becoming Human: From Pointing Gestures to Syntax (2011) by Teresa Bejarano</p>
                        <p>[5] Robot Deictics: How Gesture and Context Shape Referential Communication (2014) by Allison Sauppé and Bilge Mutlu in ACM/IEEE HRI</p>
                        <p>[6] Rhetorical Robots: Making Robots More Effective Speakers Using Linguistic Cues of Expertise (2013) by Sean Andrist, Erin Spannan and Bilge Mutlu in ACM/IEEE HRI</p>
                        <p>[7] Adoption of New and Really New Products: The Effects of Self-Regulation Systems and Risk Salience (2007) by Michal Herzenstein, Steven S. Posavac and J. Joško Brakus in Journal of Marketing Research</p>
                        <p>[8] The Role of Imagination-Focused Visualization on New Product Evaluation (1989) by Min Zhao, Steve Hoeffler and Darren W. Dahl in Journal of Marketing Research</p>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );
}

export default ThisOrThat;