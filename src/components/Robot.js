import { Suspense, useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

function Robot(props) {
    const [leftLightColor, setLeftLightColor] = useState('#2ee895');
    const [rightLightColor, setRightLightColor] = useState('#7087FE');
    let randomColorLeft = Math.floor(Math.random()*16777215).toString(16);
    let randomColorRight = Math.floor(Math.random()*16777215).toString(16);

    const handleClick = () => {
        setLeftLightColor('#' + randomColorLeft);
        setRightLightColor('#' + randomColorRight);
    };

    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/robot.glb');
    const { actions } = useAnimations(animations, group);
    const orbitControlsRef = useRef(null);
  
    useEffect(() => {
        actions.PlaneAction.play();
    });
  
    useFrame((state) => {
        if(!!orbitControlsRef.current) {
            const { x, y } = state.mouse;
            orbitControlsRef.current.setAzimuthalAngle(-x/5);
            orbitControlsRef.current.setPolarAngle((y/10)+1.7);
            orbitControlsRef.current.update();
        }
    });
  
    useEffect(() => {
      if(!!orbitControlsRef.current){
        // console.log(orbitControlsRef.current);
      }
    });

    return(
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls ref={orbitControlsRef} enableZoom={false} minAzimuthAngle={-0.2} maxAzimuthAngle={0.2} minPolarAngle={1.6} maxPolarAngle={1.8} target={[0, 2, -7]}/>
            <ambientLight args={['white', 1]} />
            <spotLight args={[leftLightColor, 1]} position={[-30, 20, 30]} angle={0.3} />
            <spotLight args={[rightLightColor, 1]} position={[30, -20, 10]} angle={0.3} />
            <Suspense fallback={null}>
                <group ref={group} {...props} dispose={null} onClick={handleClick}>
                    <group name="Scene">
                        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.004']} />
                        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials.glow} position={[0.28, 0.5, 0.61]} rotation={[1.57, 0, 0]} scale={0.07} />
                        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.004']} position={[0, -0.91, 0]} scale={1.22} />
                    </group>
                </group>
            </Suspense>
        </>
    );
}

export default Robot;
