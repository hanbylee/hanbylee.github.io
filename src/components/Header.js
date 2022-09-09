import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../styles/GloblaLayout";

const StyledHeader = styled.header`
    width: 100vw;
    height: 10rem;
    position: fixed;
    top: 0;
    z-index: 10;
    background: linear-gradient(180deg, black 0%, black 50%, rgba(0, 0, 0, 0) 100%);

    .headerHome {
        font-family: ${(p) => p.theme.font.family.sans};
        font-size: clamp(2rem, 1.7vw, 2.4rem);
        font-weight: 700;
        text-decoration: none;
        color: white;
    }

    .headerNav {
        font-family: ${(p) => p.theme.font.family.sans};
        font-size: clamp(1.6rem, 1.4vw, 2rem);
        font-weight: 300;
        text-decoration: none;
        text-underline-position: under;
        color: white;

        &:hover {
            color: #2ee895;
        }
    }
`;

const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderNavContainer = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(1.6rem, 3.9vw, 3.2rem);
`;

function Header() {

    return(
        <StyledHeader>
            <GlobalOuter>
                <GlobalInner>
                    <HeaderContainer>
                        <NavLink to='/' className='headerHome'>Hanbyeol*</NavLink>
                        <HeaderNavContainer>
                            <NavLink to='/work' className='headerNav' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : null })}>Work</NavLink>
                            <NavLink to='/archive' className='headerNav' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : null })}>Archive</NavLink>
                            <NavLink to='/about' className='headerNav' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : null })}>About</NavLink>
                        </HeaderNavContainer>
                    </HeaderContainer>
                </GlobalInner>
            </GlobalOuter>
        </StyledHeader>
    );
}

export default Header;