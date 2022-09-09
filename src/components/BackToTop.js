import styled from "styled-components";

const BackToTopBtn = styled.div`
    position: fixed;
    bottom: 5%;
    right: 5%;
    padding: 0.1rem;
    z-index: 10;
`;

const toTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function BackToTop() {
    return(
        <BackToTopBtn onClick={toTop}>
            <img src="images/back-to-top.png" alt="arrow"/>
        </BackToTopBtn>
    );
}

export default BackToTop;