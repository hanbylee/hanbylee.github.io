import Header from "../../components/Header";
import { Bottom } from "../../components/Bottom";
import Footer from "../../components/Footer";
import { GlobalOuter, ProjectInner } from "../../styles/GloblaLayout";
import { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentBox, ProjectContentImg } from "../../components/work/Project";

function ModularAI() {
    return(
        <ProjectContainer>
            <Header />
            <GlobalOuter>
                <ProjectInner>
                    <ProjectInfoContainer>
                        <ProjectInfoImage src='images/modular-ai/main.jpg' />
                        <div>
                            <h1>Modular AI Speaker</h1>
                            <h5 className='korean' style={{ fontWeight:300 }}>AI 스피커의 발화와 촉각 유형이 사용자의 인식에 미치는 영향</h5>
                        </div>
                        <ProjectInfoContent>
                            <div>
                                <h6>Type</h6>
                                <p>Human-AI Interaction 리서치</p>
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
                                <p>2020.08 (2개월)</p>
                            </div>
                            <div>
                                <h6>Achievement</h6>
                                <a href="https://doi.org/10.1109/RO-MAN50785.2021.9515471"><p>IEEE RO-MAN 2021 학회 논문</p></a>
                            </div>
                        </ProjectInfoContent>
                    </ProjectInfoContainer>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Background</h2>
                            <p>
                                AI 스피커는 대화형 AI가 탑재된 음성 기반 스피커이다.
                                페르소나, 보이스 종류, NLP 엔진 등과 같이 다양한 AI의 특성을 통해 AI 스피커의 개성을 표현할 수 있으며, 이는 사용자의 인식과 만족도에 영향을 줄 수 있다.
                            </p>
                            <p>
                                하지만, 사용자는 AI 스피커를 사용하기 전까지 AI 특성을 파악하기 어렵다.
                                그에 비해, AI 스피커의 외형은 사용자가 바로 인지할 수 있는 요소 중 하나이다.
                            </p>
                            <ProjectContentBox>
                                <h6>Design Question:</h6>
                                <p>“AI 스피커의 페르소나 포지셔닝과 외형에 따라 사용자의 인식은 어떻게 달라질까?”</p>
                            </ProjectContentBox>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. AI Persona: Verbal Communication</h3>
                            <p>
                                대화형 AI를 디자인하기 위해서 제일 처음으로 고려되는 부분은 AI 페르소나이다.
                                CASA(Computers are Social Actors) 패러다임[1]에 의하면, 대화형 인터페이스와 같은 컴퓨터의 의인화는 사용자가 컴퓨터를 사회적 행위자로 인식하게 만든다.
                                사용자는 AI 스피커를 사회적 행위자로 인식함에 따라, 인간-인간 상호작용의 사회적 규범을 인간-컴퓨터 상호작용에 적용하여 AI 스피커와 특정 관계를 형성하기를 기대한다[2].
                            </p>
                            <p>
                                그 중, 사용자가 AI 스피커에 대해 가장 기대하는 관계는 비서(51.3%)와 친구(48.7%)이다[2]. 
                                이러한 AI 페르소나의 관계 형성을 잘 보여줄 수 있는 요소는 언어적 표현이다. 
                                특히, 수직적 관계와 수평적 관계에 따라 언어적 표현이 분명하게 달라진다[3]. 
                                한국어의 어법 문화에서 관계에 대한 언어적 표현으로는 수직적 관계인 비서는 존댓말을, 수평적 관계인 친구는 반말을 적용할 수 있다.
                            </p>
                            <ProjectContentImg>
                                <img src='images/modular-ai/background-01.png' alt='background01'/>
                                <p>AI 페르소나의 관계 포지셔닝에 따라 발화 방식이 달라질 수 있다.</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Appearance: Texture</h3>
                            <p>
                                사용자가 스마트 스피커를 통해 인식할 수 있는 또 다른 특성으로는 외형적 요소인 형태, 색상, 텍스처(재질) 등을 들 수 있다.
                                다양한 외형적 요소 중 텍스처는 컴퓨터나 로봇의 의인화 관련 연구에 많이 적용되고 있으며 다음과 같은 특성이 있다.
                            </p>
                            <ul>
                                <li>텍스처는 직접적이고 직관적이며 감정 정보를 전달하는 데 적합하다[4].</li>
                                <li>텍스처는 정서적 소통을 더욱 풍부하게 만들고 특정 감정을 유발할 수 있다[4].</li>
                            </ul>
                            <p>
                                텍스처를 통한 촉감의 5가지 형용사 척도(flat-bumpy는 rough-smooth의 동의어로 처리) 중, 서로 직교에 가까운 2가지 주요 축은 soft(flexible)-hard와 smooth-rough이다[5].
                                이 두 축은 텔레프레젠스 로봇의 텍스처와 사회적 관계에 관한 인간-로봇 상호작용 실험에서도 의인화와 비의인화 촉감의 기준이 되었다[6].
                            </p>
                            <ProjectContentImg>
                                <img src='images/modular-ai/background-02.png' alt='background02'/>
                                <p>촉감의 주요 형용사 척도 (soft-hard / smooth-rough)</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Study Design</h2>
                            <ProjectContentBox>
                                <h6>Research Question:</h6>
                                <p>“AI 스피커의 말투와 텍스처가 사용자의 인식에 어떤 영향을 줄 수 있을까?”</p>
                            </ProjectContentBox>
                            <p>스마트 스피커의 말투와 텍스처를 모듈화하여 프로토타이핑한 후, 사용자 인식에 대한 정량 조사를 진행한다.</p>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. Independent Variables</h3>
                            <p>독립 변수는 말투 요소 2가지와 텍스처 요소 4가지로 설정하였다.</p>
                            <h4 className='korean'>a. 말투</h4>
                            <ul>
                                <li>assistant-like: 존댓말</li>
                                <li>companion-like: 반말</li>
                            </ul>
                            <h4 className='korean'>b. 텍스처</h4>
                            <ul>
                                <li>soft+smooth: 부드러운 천</li>
                                <li>soft+rough: 거친 천</li>
                                <li>hard+smooth: 부드러운 플라스틱</li>
                                <li>hard+rough: 거친 플라스틱</li>
                            </ul>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Prototyping</h3>
                            <p>Wizard of Oz 기법 실험을 위한 모듈형 스마트 스피커의 전원부와 텍스처 모듈을 디자인하고 개발하였다.</p>
                            <h4 className='korean'>a. 사용한 소프트웨어</h4>
                            <ul>
                                <li>3D 모델링: SolidWorks</li>
                                <li>하드웨어: Arduino</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/modular-ai/study-design-01.png' alt='studydesign01'/>
                                <p>제품 프로토타입: 전원부 X 텍스처 모듈</p>
                            </ProjectContentImg>
                            <details>
                                <summary style={{cursor:'pointer'}}>제품 설계 세부 사항</summary>
                                <ul>
                                    <li>모듈형 스마트 스피커는 전원부와 텍스처 모듈로 나뉠 수 있으며, 텍스처 모듈은 전원부 위에 올려놓을 수 있다.</li>
                                    <li>텍스처 모듈은 부드러운 천, 거친 천, 부드러운 플라스틱, 거친 플라스틱으로 이루어졌으며, 총 4가지이다.</li>
                                    <li>텍스처 모듈을 쉽게 탈부착할 수 있도록 전원부와 텍스처 모듈 모서리에 네오디움 자석이 붙어있다.</li>
                                    <li>전원부에는 아두이노, 블루투스 모듈, 스피커, 버튼, LED가 포함되어 있다.</li>
                                </ul>
                            </details>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>3. Script Design</h3>
                            <p>피험자는 최근 유행하는 음식, 노래, TV 프로그램에 대해 질문하고, 스마트 스피커는 다음과 같은 스크립트로 답변한다.</p>
                            <ProjectContentImg>
                                <img src='images/modular-ai/study-design-02.png' alt='studydesign02'/>
                                <p>스마트 스피커의 스크립트 설계</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>4. Participants</h3>
                            <p>피험자를 모집하여 연구실 조사(in-lab study)로 실험이 진행되었다.</p>
                            <ul>
                                <li>피험자: 48명 (23세~39세 / 여성 23명, 남성 25명)</li>
                            </ul>
                            <details>
                                <summary style={{cursor:'pointer'}}>피험자 설계 세부 사항[혼합 설계 (mixed design)]</summary>
                                <ul>
                                    <li>말투: between design - 피험자는 한 가지 발화만 경험한다.</li>
                                    <li>텍스처: within design - 피험자는 네 가지 텍스처를 모두 경험한다. (무작위 순서)</li>
                                </ul>
                            </details>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>5. Participants</h3>
                            <p>텍스처 모듈은 모든 피험자에게 무작위 순서로 배정되어있으며 실험 과정은 다음과 같다.</p>
                            <ul>
                                <li>피험자는 왼쪽 텍스처 모듈부터 전원부 위에 올려놓는다.</li>
                                <li>텍스처 모듈을 전원부 위에 놓으면 스마트 스피커의 인사가 시작된다.</li>
                                <li>피험자는 음식, 노래, TV 프로그램에 대해 스마트 스피커에 질문한다.</li>
                                <li>피험자는 한 가지 텍스처 모듈을 경험한 후, 해당 스마트 스피커의 인상 평가를 진행한다.</li>
                                <li>나머지 텍스처 모듈에 대해서도 위와 같이 반복한다.</li>
                            </ul>
                            <ProjectContentImg>
                                <img src='images/modular-ai/study-design-03.png' alt='studydesign03'/>
                                <p>피험자는 무작위 순서로 배정된 텍스처 모듈을 모두 경험한다.</p>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>6. Measurements</h3>
                            <p>각 실험 조건에 대해서 아래 3가지를 7점 리커트 척도로 측정하였다.</p>
                            <p>측정을 통해, 피험자가 각 조건의 스마트 스피커를 얼마나 유용하게 생각했는지, 얼마나 사회적인 존재로 인지했는지, 얼마나 서비스에 대해 만족하는지 확인하였다.</p>
                            <ul>
                                <li>유용성(perceived usefulness)[7]</li>
                                <li>사교성(perceived sociability)[7]</li>
                                <li>서비스 평가(service evaluation)[8]</li>
                            </ul>
                            <details>
                                <summary style={{cursor:'pointer'}}>질문 아이템</summary>
                                <ProjectContentImg>
                                    <img src='images/modular-ai/study-design-04.png' alt='studydesign04'/>
                                    <p>3가지 측정에 대한 아이템</p>
                                </ProjectContentImg>
                            </details>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Results</h2>
                            <p>실험을 통해 모듈형 스마트 스피커의 발화와 텍스처가 사용자의 인식에 미치는 영향을 조사하기 위해 이원 반복측정 분산분석(two-way RM ANOVA)을 수행했다.</p>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>1. Software</h3>
                            <ul>
                                <li>데이터 분석: SPSS</li>
                            </ul>
                            <p>스마트 스피커의 유용성, 사교성 및 서비스 평가 측정에 대해 신뢰도 분석(Cronbach's alpha) 시, 모두 0.6 이상으로 유의한 결과가 나왔다.</p>
                            <details>
                                <summary style={{cursor:'pointer'}}>신뢰도 분석 결과</summary>
                                <ProjectContentImg>
                                    <img src='images/modular-ai/results-01.png' alt='result01'/>
                                    <p>각 측정에 대한 신뢰도 분석 후 Cronbach's alpha 계수</p>
                                </ProjectContentImg>
                            </details>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Main Effect</h3>
                            <ProjectContentImg>
                                <img src='images/modular-ai/results-02.png' alt='result02'/>
                                <img src='images/modular-ai/results-03.png' alt='result03'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>3. Interaction Effect</h3>
                            <ProjectContentImg>
                                <img src='images/modular-ai/results-04.png' alt='result04'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>4. Usefulness</h3>
                            <p>smooth-rough축이 유용성에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>거친(rough) 스마트 스피커가 부드러운(smooth) 스마트 스피커보다 더 유용하다고 인식했다.</li>
                            </ul>
                            <p>또한, 말투와 soft-hard축이 유용성에 미치는 상호작용 효과가 존재했다.</p>
                            <ul>
                                <li>말투가 존댓말(assistant-like)일 때, 플라스틱(hard) 스마트 스피커가 천(soft) 스마트 스피커보다 더 유용하다고 인식했다.</li>
                                <li>말투가 반말(companion-like)일 때, 천(soft) 스마트 스피커가 플라스틱(hard) 스마트 스피커보다 더 유용하다고 인식했다.</li>
                            </ul>
                            <p>스마트 스피커에 대해 사용자가 인식하는 유용성을 높이기 위해 존댓말(assistant-like) 유형에는 플라스틱(hard) 소재를, 반말(companion-like) 유형에는 천(soft) 소재를 적용할 수 있다.</p>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>5. Sociability</h3>
                            <p>soft-hard축이 사교성에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>천(soft) 스마트 스피커가 플라스틱(hard) 스마트 스피커보다 더 사교적이라고 인식했다.</li>
                            </ul>
                            <p>또한, 말투와 soft-hard축이 사교성에 미치는 상호작용 효과가 존재했다.</p>
                            <ul>
                                <li>말투가 존댓말(assistant-like)일 때, 사교성에 대한 차이가 유의하지 않았다.</li>
                                <li>말투가 반말(companion-like)일 때, 천(soft) 스마트 스피커가 플라스틱(hard) 스마트 스피커보다 더 사교적이라고 인식했다.</li>
                            </ul>
                            <p>스마트 스피커에 대해 사용자가 인식하는 사교성을 높이기 위해 반말(companion-like) 유형에는 천(soft) 소재를 적용할 수 있다.</p>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>6. Service Evaluation</h3>
                            <p>soft-hard축과 smooth-rough축이 서비스 평가에 미치는 주 효과는 유의미했다.</p>
                            <ul>
                                <li>천(soft) 스마트 스피커가 플라스틱(hard) 스마트 스피커보다 더 서비스가 좋다고 인식했다.</li>
                                <li>거친(rough) 스마트 스피커가 부드러운(smooth) 스마트 스피커보다 더 서비스가 좋다고 인식했다.</li>
                            </ul>
                            <p>또한, 말투와 soft-hard축이 서비스 평가에 미치는 상호작용 효과가 존재했다.</p>
                            <ul>
                                <li>말투가 존댓말(assistant-like)일 때, 플라스틱(hard) 스마트 스피커가 천(soft) 스마트 스피커보다 더 서비스가 좋다고 인식했다.</li>
                                <li>말투가 반말(companion-like)일 때, 천(soft) 스마트 스피커가 플라스틱(hard) 스마트 스피커보다 더 서비스가 좋다고 인식했다.</li>
                            </ul>
                            <p>스마트 스피커에 대해 사용자가 인식하는 서비스 평가를 높이기 위해 존댓말(assistant-like) 유형에는 플라스틱(hard) 소재를, 반말(companion-like) 유형에는 천(soft) 소재를 적용할 수 있다.</p>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Conclusion</h2>
                            <h3>1. Implication</h3>
                            <p>스마트 스피커의 발화 방식에 따라 스마트 스피커의 텍스처 설정이 달라질 수 있다.</p>
                            <ul>
                                <li>격식체를 사용하는 스마트 스피커를 사용자가 더 유용하고 서비스가 좋다고 느끼길 바랄 때, 딱딱한 소재를 적용할 수 있다.</li>
                                <li>비격식체를 사용하는 스마트 스피커를 사용자가 더 유용하고 사교적이며 서비스가 좋다고 느끼길 바랄 때, 유연한 소재를 적용할 수 있다.</li>
                            </ul>
                            <p>또한, 상황에 따라 스마트 스피커의 텍스처 설정이 달라질 수 있다.</p>
                            <ul>
                                <li>거친 마감: 유용한 정보를 제공하는 상황에서 적용 가능</li>
                                <li>유연한 소재: 사교적인 정서 교감을 제공하는 상황에서 적용 가능</li>
                            </ul>
                            <p>결과적으로 스마트 스피커의 특성이나 사용자의 상황에 따라 적절한 텍스처 적용할 수 있다. 스마트 스피커 외형의 모듈화를 통해 기존보다 AI 설정을 쉽게 변경하거나 사용자의 상호작용을 증진시킬 수 있을 것이다.</p>
                            <ProjectContentImg>
                                <img src='images/modular-ai/conclusion-01.png' alt='conclusion01'/>
                            </ProjectContentImg>
                        </ProjectContentInner>
                        <ProjectContentInner>
                            <h3>2. Limitation & Future Work</h3>
                            <p>본 연구의 한계점은 다음과 같다.</p>
                            <ul>
                                <li>스마트 스피커와 관련된 관계 기반 음성 유형 외에도 다른 요인이 사용자의 인식에 영향을 미칠 수 있다.</li>
                                <li>사용자의 인식에 미치는 영향은 텍스처뿐만 아니라 색상이나 형태와 같은 다른 시각적 요소에 따라 다를 수 있다.</li>
                                <li>사용자의 기분, 성격과 같은 특성도 고려할 수 있다.</li>
                            </ul>
                            <p>따라서, 본 연구는 스마트 스피커의 다양한 음성과 외형 요인을 탐구하고, 사용자의 특성에 따라 요구되는 스마트 스피커의 속성 조사를 위한 향후 연구가 필요하다.</p>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                        <ProjectContentInner>
                            <h2>Publication</h2>
                            <p>
                                <a href='https://doi.org/10.1109/RO-MAN50785.2021.9515471' style={{ color:'white' }}>Effect of AI Agent’s Speech and Tactility Types on Users’ Perception</a><br /> 
                                2021 IEEE International Conference on Robot & Human Interactive Communication (RO-MAN)
                            </p>
                        </ProjectContentInner>
                    </ProjectContentOuter>
                    <ProjectContentOuter>
                    <h4>References</h4>
                        <p>[1] Computers are Social Actors (1994) by Clifford Nass, Jonathan Steuer, and Ellen R. Tauber in ACM CHI</p>
                        <p>[2] An Empirical Study on Expectation of Relationship Between Human and Smart Devices—With Smart Speaker as an Example (2019) by Shilong Wu, Sinan He, Yu Peng, Weiying Li, Moli Zhou and Daisong Guan in IEEE DSC</p>
                        <p>[3] Am I Acceptable to You? Effect of a Robot’s Verbal Language Forms on People’s Social Distance from Robots (2013) by Yunkyung Kim, Sonya S. Kwak and Myung-suk Kim in Computers in Human Behavior</p>
                        <p>[4] Emotion Evoked by Texture and Application to Emotional Communication (2015) by Yurika Ebe and Hiroyuki Umemuro in ACM CHI</p>
                        <p>[5] Individual Differences in Perceptual Space for Tactile Textures: Evidence from Multidimensional Scaling (2000) by Mark Hollins, Sliman Bensmaïa, Kristie Karlof and Forrest Young in Perception & Psychophysics</p>
                        <p>[6] The Effect of Tactility and Socio-Relational Context on Social Presence and User Satisfaction (2019) by Dahyun Kang in ACM/IEEE HRI</p>
                        <p>[7] The Influence of Social Presence on Acceptance of a Companion Robot by Older People (2008) by Marcel Heerink, Ben Kröse, Vanessa Evers and Bob Wielinga in Journal of Physical Agents</p>
                        <p>[8] Gracefully Mitigating Breakdowns in Robotic Services (2010) by Min Kyung Lee, Sara Kiesler, Jodi Forlizzi, Siddhartha Srinivasa and Paul Rybski in ACM/IEEE HRI</p>
                    </ProjectContentOuter>
                </ProjectInner>
            </GlobalOuter>
            <Bottom />
            <Footer />
        </ProjectContainer>
    );
}

export default ModularAI;