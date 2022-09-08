import styled from 'styled-components';
import Header from '../components/Header';
import HomeIntro from '../components/home/HomeIntro';
import Bottom from '../components/Bottom';

const StyledHome = styled.div`
    height: 100vh;
    background: black;
`;

function Home() {
    return(
        <StyledHome>
            <Header />
            <HomeIntro />
            <Bottom />
        </StyledHome>
    );
}

export default Home;