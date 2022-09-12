import styled from 'styled-components';
import Header from '../components/Header';
import WorkIntro from '../components/work/WorkIntro';
import WorkContent from '../components/work/WorkContent';
import { Bottom } from "../components/Bottom";
import Footer from "../components/Footer";


const StyledWork = styled.div`
    width: 100vw;
    background: black;
`;

function Work() {
    return(
        <StyledWork>
            <Header />
            <WorkIntro />
            <WorkContent></WorkContent>
            <Bottom />
            <Footer />
        </StyledWork>
    );
}

export default Work;