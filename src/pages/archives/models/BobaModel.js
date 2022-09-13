import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'

function Plane(props) {
	const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
	return (
		<mesh receiveShadow ref={ref}>
			<planeGeometry args={[1000, 1000]} />
			<meshStandardMaterial color="papayawhip" />
		</mesh>
	)
}

function Sphere(props) {
	const [ref] = useBox(() => ({ mass: 1, ...props }))
	return (
		<mesh castShadow ref={ref}>
			<sphereBufferGeometry args={[1, 64, 64]} />
			<meshPhysicalMaterial color="rosybrown" transmission={1} thickness={1} roughness={0} />
		</mesh>
	)
}

export default function App() {
	const [ready, set] = useState(false)
	useEffect(() => {
		const timeout = setTimeout(() => set(true), 1000)
		return () => clearTimeout(timeout)
	}, [])
	return (
		<Canvas dpr={[1, 2]} shadows camera={{ position: [-5, 5, 5], fov: 50 }}>
			<ambientLight />
			<spotLight angle={0.25} penumbra={0.5} position={[5, 10, 10]} castShadow />
			<Physics>
				<Plane />
				<Sphere position={[2, 5, 0.25]}/>
				<Sphere position={[1.5, 2.5, 0]}/>
				<Sphere position={[1, 5, -0.25]} />
				<Sphere position={[0.5, 7, 0.25]} />
				<Sphere position={[0, 5, 0.25]} />
				{ready && <Sphere position={[-0.5, 10, 0.25]} />}
			</Physics>
		</Canvas>
	)
}
