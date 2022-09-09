import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../styles/GloblaLayout";

const StyledFooter = styled.div`
    width: 100%;
    height: 16rem;
    background: black;
`;

const FooterContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.6rem;

    .footerItem {
        font-family: ${(p) => p.theme.font.family.sans};
        font-size: clamp(1.2rem, 1.2vw, 1.6rem);
        font-weight: 500;
        color: white;
    }
`;

const FooterSocial = styled.div`
    display: flex;
    gap: 1.6rem;

    .sns {
        font-weight: 300;
        color: white;

        :hover {
            color: rgba(255, 255, 255, 0.8);
        }
    }
`;

function Footer() {
    return(
        <StyledFooter>
            <GlobalOuter>
                <GlobalInner>
                    <FooterContainer>
                        <h6 className='footerItem'>© 2022 Hanbyeol Lee</h6>
                        <FooterSocial>
                            <a className='footerItem sns' href="https://www.linkedin.com/in/hanbyeol-lee/">Linkedin</a>
                            <a className='footerItem sns' href="https://github.com/hanby-uxengineer/">Github</a>
                            <a className='footerItem sns' href="https://scholar.google.com/citations?user=J2aMC2gAAAAJ&hl=ko">Scholar</a>
                            <a className='footerItem sns' href="mailto:yihaanstar@gmail.com?subject=안녕하세요!">E-mail</a>
                        </FooterSocial>
                    </FooterContainer>
                </GlobalInner>
            </GlobalOuter>
        </StyledFooter>
    );
}

export default Footer;