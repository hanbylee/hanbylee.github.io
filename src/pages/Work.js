import styled from 'styled-components';
import Header from '../components/Header';

const StyledWork = styled.div`
    height: 100vh;
    background: black;
`;

function Work() {
    return(
        <StyledWork>
            <Header />
        </StyledWork>
    );
}

export default Work;