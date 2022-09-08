import styled, { keyframes } from "styled-components";

const StyledHomeIntroBg = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    padding-bottom: 20vh;
`;

const animate = keyframes`
    0% {
        transform: translate(clamp(-48rem, -33.4vw, -28rem), 6.2rem);
        z-index: 1;
    }
    50% {
        transform: translate(clamp(28rem, 33.4vw, 48rem), -6.2rem);
        z-index: 1;
    }
    50.00001% {
        transform: translate(clamp(28rem, 33.4vw, 48rem), -6.2rem);
        z-index: 3;
    }
    100% {
        transform: translate(clamp(-48rem, -33.4vw, -28rem), 6.2rem);
        z-index: 3;
    }
`;

const HomeIntroBgLoader = styled.div`
    width: clamp(10rem , 11.2vw, 16rem);
    height: clamp(10rem , 11.2vw, 16rem);
    position: relative;

    span {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 50%;
        background: white;
        filter: drop-shadow(0 0 5rem white);
        animation: ${animate} 4s ease-in-out infinite;
        
        /* :nth-child(2) {
            background: rgba(255, 255, 255, 0.1);
            border-top: 0.03rem solid rgba(255, 255, 255, 0.5);
            border-left: 0.03rem solid rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(1rem);
            z-index: 2;
            animation: ${animate} 5s ease-in-out infinite;
        } */
    }
`;

function HomeIntroBg() {
    return(
        <StyledHomeIntroBg>
            <HomeIntroBgLoader>
                <span></span>
            </HomeIntroBgLoader>
        </StyledHomeIntroBg>
    );
}

export default HomeIntroBg;