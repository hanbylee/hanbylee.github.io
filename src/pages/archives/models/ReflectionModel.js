import * as THREE from 'three';
import { useRef } from 'react';
import { useGLTF, Reflector, Text } from '@react-three/drei';

const material = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#7987F0').convertSRGBToLinear(),
    roughness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0,
});

export default function Model(props) {
    const group = useRef();
    const { nodes } = useGLTF('/model.glb');
    return (
        <group ref={group} {...props} dispose={null}>
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
                {(Material, props) => <Material metalness={0.25} color="#4856A0" roughness={1} {...props} />}
            </Reflector>
            <Text position={[0, 1, -1]} fontSize={0.6} color="white" font="/noto.woff" material-fog={false} letterSpacing={0}>
                hello
            </Text>
            <mesh receiveShadow castShadow material={material} geometry={nodes.Cube.geometry} position={[0, 1, 0]} />
            <mesh receiveShadow castShadow material={material} geometry={nodes.Sphere.geometry} position={[3, 1, 0]} />
            <mesh receiveShadow castShadow material={material} geometry={nodes.Icosphere.geometry} position={[-3, 1, 0]} />
        </group>
    )
}

useGLTF.preload('/model.glb')
