import styled from 'styled-components';
import Header from '../components/Header';
import WorkIntro from '../components/work/WorkIntro';
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
            <Bottom />
            <Footer />
        </StyledWork>
    );
}

export default Work;