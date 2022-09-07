const font = {
    family: {
        sans: `'Poppins', sans-serif`,
        serif: `'Bitter', serif`,
        korean: `'Noto Sans KR', sans-serif`
    }
}

const breakpoint = {
    sm: '599px',
    md: '904px',
    lg: '1440px'
}

const device = {
    xs: `only screen and (max-width: ${breakpoint.sm})`,
    sm: `only screen and (min-width: ${breakpoint.sm})`,
    md: `only screen and (min-width: ${breakpoint.md})`,
    lg: `only screen and (min-width: ${breakpoint.lg})`
}

const theme = {
    font, device
};

export default theme;