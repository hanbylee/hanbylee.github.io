import styled from "styled-components";

const CardContainer = styled.div`
    width: 32rem;
    border-radius: 4rem;
    background: rgba(255, 255, 255, 0.1);
    border-bottom: 0.03rem solid rgba(255, 255, 255, 0.5);
    border-left: 0.03rem solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(1rem);
    filter: drop-shadow(0 0.4rem 0.4rem rgba(0, 0, 0, 0.25));


    @media ${(p) => p.theme.device.tablet} {
        width: 100%;
        max-width: 32rem;
    }

    :hover {
        z-index: 5;
        transform: translateY(-1rem);
        filter: drop-shadow(0 1.6rem 1.6rem black);
        transition: all 0.3s ease-in-out;
    }
`;

const FeaturedCardContainer = styled(CardContainer)`
    @media ${(p) => p.theme.device.desktop} {
        position: absolute;

        :nth-child(1) {
            left: 10%;
            margin-top: 10rem;
        }
        :nth-child(2) {
            left: calc(35% - 10rem);
        }
        :nth-child(3) {
            left: calc(60% - 20rem);
            margin-top: 5rem;
        }
        :nth-child(4) {
            left: calc(85% - 30rem);
            margin-top: -5rem;
        }
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 24rem;
    border-radius: 4rem 4rem 0 0;
    src: url(${(p) => p.thumbnail});
    object-fit: cover;
`;

const CardContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 8%;
    margin-bottom: 0.8rem;

    h5 {
        color: white;
        font-weight: 700;
    }

    h6 {
        color: white;
    }
`;

const CardTagContainer = styled.div`
    display: flex;
    gap: 0.4rem;
`;

const CardTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 0.8rem;
    border: 0.1rem solid black;
    border-radius: 10rem;
    background: white;
    color: black;
    font-family: ${(p) => p.theme.font.family.sans};
    font-size: clamp(0.8rem, 0.9vw, 1.2rem);
    font-weight: 500;
`;

const FeaturedTag = styled(CardTag)`
    border: 0.1rem solid white;
    background: black;
    color: white; 
`;

export { CardContainer, FeaturedCardContainer, CardImage, CardContent, CardTagContainer, CardTag, FeaturedTag };