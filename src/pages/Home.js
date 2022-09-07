import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import Robot from '../components/Robot';

const StyledHome = styled.div`
    height: 100vh;
    background: black;
`;

function Home() {
    return(
        <StyledHome>
            <Canvas>
                <Robot />
            </Canvas>
        </StyledHome>
    );
}

export default Home;