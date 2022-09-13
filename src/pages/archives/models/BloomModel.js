import * as THREE from 'three'
import { useRef } from 'react';
import { useGLTF, Reflector } from '@react-three/drei' // Sparkles

const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 0, 0.5), toneMapped: false })
const glowBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 20), toneMapped: false })
const glowGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 3, 1), toneMapped: false })

export default function Model(props) {
    const group = useRef();
    const { nodes } = useGLTF('/bloom.glb');
    return (
        <group ref={group} {...props} dispose={null}>
            {/* <Sparkles count={200} scale={[20, 20, 10]} size={1.5} speed={2} /> */}
            <Reflector
                resolution={1024}
                receiveShadow
                mirror={0}
                mixBlur={1}
                mixStrength={0.3}
                depthScale={1}
                minDepthThreshold={0.8}
                maxDepthThreshold={1}
                position={[0, 0, 8]}
                scale={[2, 2, 1]}
                rotation={[-Math.PI / 2, 0, Math.PI]}
                args={[70, 70]}>
                {(Material, props) => <Material metalness={0.25} color="gray" roughness={1} {...props} />}
            </Reflector>
            <mesh receiveShadow castShadow geometry={nodes.Sphere.geometry} material={glowGreen} position={[1, 1, 0]} />
            <mesh receiveShadow castShadow geometry={nodes.Sphere001.geometry} material={glowRed} position={[6, 1, 5]} />
            <mesh receiveShadow castShadow geometry={nodes.Sphere002.geometry} material={glowRed} position={[-1, 1, -3.55]} />
            <mesh receiveShadow castShadow geometry={nodes.Sphere003.geometry} material={glowBlue} position={[3.69, 1, -3.67]} />
            <mesh receiveShadow castShadow geometry={nodes.Sphere004.geometry} material={glowBlue} position={[-3.03, 1, 2.69]} />
            <mesh receiveShadow castShadow geometry={nodes.Sphere005.geometry} material={glowGreen} position={[2.5, 1, 4.4]} />
            <mesh receiveShadow castShadow geometry={nodes.Sphere006.geometry} material={glowGreen} position={[-3.95, 1, -5.87]} />
            <mesh receiveShadow castShadow geometry={nodes.Sphere007.geometry} material={glowGreen} position={[2.04, 1, -7.8]} />
        </group>
    )
}

useGLTF.preload('/bloom.glb')
