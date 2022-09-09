const font = {
    family: {
        sans: `'Poppins', sans-serif`,
        serif: `'Bitter', serif`,
        korean: `'Noto Sans KR', sans-serif`
    }
}

const size = {
    innerMargin: `3.2rem`,
    projectMargin: `19.2rem`,
    topMargin: `12rem`
}

const breakpoint = {
    sm: '599px',
    md: '904px',
    lg: '1440px'
}

const device = {
    mobile: `only screen and (max-width: ${breakpoint.sm})`,
    tablet: `only screen and (max-width: ${breakpoint.md})`,
    desktop: `only screen and (min-width: ${breakpoint.md})`
}

const theme = {
    font, size, device
};

export default theme;