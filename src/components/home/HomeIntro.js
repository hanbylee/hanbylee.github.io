import styled from "styled-components";
import { GlobalOuter } from "../../styles/GloblaLayout";
import { Canvas } from "@react-three/fiber";
import HomeIntroBg from "./HomeIntroBg";
import Robot from "../Robot";

const StyledHomeIntro = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
`;

const HomeIntroContent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;

    h1 {
        position: absolute;
        margin-top: 16vh;
        text-align: center;
        line-height: 125%;
        background: linear-gradient(to bottom, white 70%, rgba(255, 255, 255, 0.3) 100%);
        -webkit-background-clip: text;
                background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    h5 {
        position: absolute;
        bottom: clamp(24rem, 31.3vh, 32rem);
        font-weight: 300;
        text-align: center;
        color: rgba(255, 255, 255, 0.5);
    }

    .threejs {
        position: absolute;
        z-index: 2;
    }
`;

function HomeIntro() {
    return(
        <StyledHomeIntro>
            <GlobalOuter>
                <HomeIntroContent>
                    <h1>Hello world!<br /> I'm Hanbyeol,<br />an interaction engineer<br />specialized in<br /> AI and graphics.</h1>
                    <HomeIntroBg />
                    <Canvas className='threejs'>
                        <Robot />
                    </Canvas>
                    <h5>click me!</h5>
                </HomeIntroContent>
            </GlobalOuter>
        </StyledHomeIntro>
    );
}

export default HomeIntro;