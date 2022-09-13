import { GlobalOuter, ArchiveInner } from "../../styles/GloblaLayout";
import { StyledArt, ArtContainer } from "../../components/archive/ArtLayout";
import Header from "../../components/Header";
import { Canvas, extend } from '@react-three/fiber'
import { Effects, OrbitControls, OrthographicCamera, BakeShadows } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import Model from "./models/BloomModel";

extend({ UnrealBloomPass })

export default function App() {
  return (
    <StyledArt>
        <Header />
        <GlobalOuter>
            <ArchiveInner>
                <ArtContainer>
                    <Canvas shadows gl={{ antialias: false }} >
                        <color attach="background" args={['black']} />
                        <fog attach="fog" args={['#202030', 10, 25]} />
                        <ambientLight intensity={0.1} />
                        <directionalLight castShadow intensity={0.2} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} position={[10, 10, -10]} />
                        <Model />
                        <Effects disableGamma>
                            <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
                        </Effects>
                        <BakeShadows />
                        <OrthographicCamera makeDefault far={100} near={0.1} position={[-12, 10, 0]} zoom={100} />
                        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={1}/>
                    </Canvas>    
                </ArtContainer>
                <h5>Bloom</h5>
                <p>마우스 클릭한 상태로 회전</p>
            </ArchiveInner>
        </GlobalOuter>
    </StyledArt>
  )
}
