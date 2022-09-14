import styled from "styled-components";

const ArchiveCardContainer = styled.div`
    width: 32rem;
    height: 32rem;
    margin-bottom: 2.4rem;

    @media ${(p) => p.theme.device.tablet} {
        margin-bottom: 0;
    }

    :hover {
       filter: brightness(0.8);
    }
    
    -webkit-transition: filter 0.2s ease-in-out;
            transition: filter 0.2s ease-in-out;
`;

const ArchiveArt = styled.img`
    width: 100%;
    height: 90%;
    src: url(${(p) => p.thumbnail});
    object-fit: cover;
`;

const ArchiveTitle = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ArchiveTagContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0.8rem;
`;

const ArchiveTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 0.8rem;
    border: 0.1rem solid white;
    border-radius: 10rem;
    background: black;
    color: white;
    font-family: ${(p) => p.theme.font.family.sans};
    font-size: clamp(0.8rem, 0.9vw, 1.2rem);
    font-weight: 500;
`;

export { ArchiveCardContainer, ArchiveArt, ArchiveTitle, ArchiveTagContainer, ArchiveTag };