import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Cloud } from "@react-three/drei"

export default function App() {
  	return (
		<Canvas camera={{ position: [0, 0, -25], fov: 75 }}>
			<OrbitControls target={[0, 0, -12]}/>
			<ambientLight intensity={0.8} />
			<pointLight intersity={2} position={[10, 10, -1000]} />
			<Suspense fallback={null}>
				<Cloud position={[-4, -2, -25]} opacity={1} />
				<Cloud position={[4, 2, -15]} opacity={0.5} />
				<Cloud position={[-4, 2, -10]} opacity={1} />
				<Cloud position={[4, -2, -5]} opacity={0.5} />
				<Cloud position={[4, 2, 0]} opacity={0.75} />
			</Suspense>
		</Canvas>
  	)
}
