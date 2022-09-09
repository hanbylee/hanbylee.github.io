import styled from 'styled-components';
import Header from '../components/Header';
import HomeIntro from '../components/home/HomeIntro';
import { Bottom } from '../components/Bottom';
import Footer from '../components/Footer';

const StyledHome = styled.div`
    width: 100vw;
    background: black;
`;

function Home() {
    return(
        <StyledHome>
            <Header />
            <HomeIntro />
            <Bottom />
            <Footer />
        </StyledHome>
    );
}

export default Home;