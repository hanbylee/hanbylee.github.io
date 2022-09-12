import styled from "styled-components";

const ProjectContainer = styled.div`
    padding-top: ${(p) => p.theme.size.topMargin};
    background: black;

    .korean {
        font-family: ${(p) => p.theme.font.family.korean};
    }
`;

const ProjectInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5.2rem;
    margin-bottom: 6.4rem;
`;

const ProjectInfoImage = styled.img`
    width: 100%;
    height: 48rem;
    border-radius: 24rem;
    src: url(${(p) => p.thumbnail});
    object-fit: cover;
    object-position: 50% 50%;

    @media ${(p) => p.theme.device.tablet} {
        height: 24rem;
        border-radius: 10rem;
    }
`;

const ProjectInfoContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3.2rem 6.4rem;
    border-radius: 10rem;
    border-top: 0.5rem solid white;
    border-right: 0.2rem solid white;
    border-top: 0.5rem solid white;
    border-left: 0.2rem solid white;

    div {
        width: 40%;
        min-width: 20rem;

        a {
            color: white;
        }
    }

    @media ${(p) => p.theme.device.tablet} {
        padding: 4.8rem 3.2rem;
    }
`;

const ProjectContentOuter = styled.div`
    width: 100%;
    margin: 3.2rem 0;
`;

const ProjectContentInner = styled.div`
    width: 100%;
    margin: 3.2rem 0;

    h4 {
        margin: 3.2rem 0 1.6rem 0;
    }

    ul {
        list-style-type: disc;
        margin: 0.8rem 0 3.2rem 3.2rem;
        font-family: ${(p) => p.theme.font.family.korean};
        font-size: clamp(1.2rem, 3.2vw, 1.6rem);
        font-weight: 300;
        color: white;
        line-height: 180%;
    }

    summary {
        font-family: ${(p) => p.theme.font.family.korean};
        font-size: clamp(1.2rem, 3.2vw, 1.6rem);
        font-weight: 300;
        color: white;
        line-height: 180%;
    }

    a {
        color: white;
    }
`;

const ProjectContentBox = styled.div`
    background: rgba(255, 255, 255, 0.1);
    margin: 2.4rem 0;
    padding: 2.4rem 4.8rem 1.2rem 4.8rem;
    border-radius: 10rem;
`;

const ProjectContentImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    margin: 2.4rem 0;

    img {
        width: 50%;
        margin-top: 1.6rem;

        @media ${(p) => p.theme.device.mobile} {
            width: 100%;
        }
    }

    p {
        color: gray;
        font-size: 1.2rem;
        font-style: italic;
        font-weight: 100;
    }
`;

export { ProjectContainer, ProjectInfoContainer, ProjectInfoImage, ProjectInfoContent, ProjectContentOuter, ProjectContentInner, ProjectContentBox, ProjectContentImg };