import { GlobalOuter, ArchiveInner } from "../../styles/GloblaLayout";
import { StyledArt, ArtContainer } from "../../components/archive/ArtLayout";
import Header from "../../components/Header";
import { Suspense, useRef } from 'react'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Model from "./models/ReflectionModel";

RectAreaLightUniformsLib.init();

function Light() {
    const ref = useRef()
    useFrame((_) => (ref.current.rotation.x = _.clock.elapsedTime))
    return (
        <group ref={ref}>
            <rectAreaLight width={15} height={100} position={[30, 30, -10]} intensity={5} onUpdate={(self) => self.lookAt(0, 0, 0)} />
        </group>
    )
}

function Reflection() {
    return(
        <StyledArt>
            <Header />
            <GlobalOuter>
                <ArchiveInner>
					<ArtContainer style={{background:'#7C87E9'}}>
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 10, -20], fov: 20 }}>
                            <fog attach="fog" args={['#7987F0', 60, 100]} />
                            <Suspense fallback={null}>
                                <ambientLight intensity={0.5} />
                                <Model position={[0.3, 0, -2]} rotation={[0, -10, 0]}/>
                                <spotLight position={[50, 50, -30]} castShadow />
                                <pointLight position={[-10, -10, -10]} color="#7987F0" intensity={3} />
                                <pointLight position={[0, -5, 5]} intensity={0.5} />
                                <directionalLight position={[0, -5, 0]} color="#7987F0" intensity={2} />
                                <Light />
                                <Environment preset="warehouse" />
                            </Suspense>
                            <OrbitControls makeDefault />
                        </Canvas>
					</ArtContainer>
					<h5>Reflection</h5>
					<p>마우스 클릭한 상태로 회전, 스크롤 시 확대/축소</p>
                </ArchiveInner>
            </GlobalOuter>

        </StyledArt>
    );
}

export default Reflection;