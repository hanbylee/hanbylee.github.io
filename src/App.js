import { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import styles from './App.scss'

function Model(props) {
  const { nodes, materials } = useGLTF('robot.glb');
  const orbitControlsRef = useRef(null);

  useFrame((state) => {
    if(!!orbitControlsRef.current){
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x/5);
      orbitControlsRef.current.setPolarAngle((y/10)+1.7);
      orbitControlsRef.current.update();
    }
  })

  useEffect(() => {
    if(!!orbitControlsRef.current){
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current])

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls ref={orbitControlsRef} enableZoom='false' minAzimuthAngle={-0.2} maxAzimuthAngle={0.2} minPolarAngle={1.6} maxPolarAngle={1.8} target={[0, 2, -5]}/>
      <ambientLight args={['blue', 0.5]} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Suspense fallback={null}>
        <group {...props} dispose={null}>
          <mesh geometry={nodes.Cube.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Plane.geometry} material={materials['Material.002']} position={[0.28, 0.5, 0.61]} rotation={[1.57, 0, 0]} scale={0.07} material-color={'gray'} />
          <mesh geometry={nodes.Cube001.geometry} material={materials['Material.004']} position={[0, -0.91, 0]} scale={1.22} />
        </group>
      </Suspense>
    </>
  );
}

function App() {
  
  return (
    <div className="App">
      <Canvas>
        <Model />
      </Canvas>
    </div>
  );
}

export default App;
