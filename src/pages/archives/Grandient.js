import styled, { keyframes }  from "styled-components";
import { GlobalOuter, ArchiveInner } from "../../styles/GloblaLayout";
import { StyledArt, ArtContainer } from "../../components/archive/ArtLayout";
import Header from "../../components/Header";

const StyledGradient = styled.div`
    width: clamp(32rem , 45vw, 64rem);
    height: clamp(16rem , 22.4vw, 32rem);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    &:hover {
        .animatedDiv::before {
            animation-play-state: paused;
        }
    }
`;

const rotate = keyframes`
   from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
`;

const GradinetLoader = styled.div`
    width: clamp(8rem , 11.2vw, 16rem);
    height: clamp(8rem , 11.2vw, 16rem);
    position: relative;
    overflow: hidden;

    ::before {
        content: "";
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
        position: absolute;
    }

    :nth-child(1) {
        border-radius: 12rem 0 0 0 ;
    }
    :nth-child(8) {
        border-radius: 0 0 12rem 0 ;
    }

    :nth-child(odd) {
        ::before {
            background-image: conic-gradient(from 180deg at 50% 50%, #657ED6 0deg, #2EE895 360deg);
            animation: ${rotate} 4s ease-in-out infinite;
        }
    }

    :nth-child(even) {
        ::before {
            background-image: conic-gradient(from 181deg at 50% 50%, #2EE895 0deg, #657ED6 361deg);
            animation: ${rotate} 4s ease-in-out infinite;
            animation-direction: reverse;
        }
    }
`;

const GradinetLoaderReverse = styled(GradinetLoader)`
    :nth-child(odd) {
        ::before {
            background-image: conic-gradient(from 1deg at 50% 50%, #2EE895 0deg, #657ED6 360deg);
            animation: ${rotate} 4s ease-in-out infinite;
            animation-direction: reverse;
        }
    }

    :nth-child(even) {
        ::before {
            background-image: conic-gradient(from 0deg at 50% 50%, #657ED6 0deg, #2EE895 360deg);
            animation: ${rotate} 4s ease-in-out infinite;
        }
    }
`;

function Gradient() {
    return(
        <StyledArt>
            <Header />
            <GlobalOuter>
                <ArchiveInner>
					<ArtContainer style={{ cursor: 'default' }}>
                        <StyledGradient>
                            <GradinetLoader className='animatedDiv' />
                            <GradinetLoader className='animatedDiv' />
                            <GradinetLoader className='animatedDiv' />
                            <GradinetLoader className='animatedDiv' />
                            <GradinetLoaderReverse className='animatedDiv' />
                            <GradinetLoaderReverse className='animatedDiv' />
                            <GradinetLoaderReverse className='animatedDiv' />
                            <GradinetLoaderReverse className='animatedDiv' />
                        </StyledGradient>
					</ArtContainer>
					<h5>Gradient</h5>
					<p></p>
                </ArchiveInner>
            </GlobalOuter>
        </StyledArt>
    );
}

export default Gradient;