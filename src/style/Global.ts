import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Gillroy;
        src: url('/font/Gilroy-Medium.ttf') format('TrueType'),
        url('/font/Gilroy-Regular.ttf') format('TrueType'),
        url('/font/Gilroy-RegularItalic.ttf') format('TrueType'),
        url('/font/Gilroy-SemiBold.ttf') format('TrueType'),
        url('/font/Gilroy-Bold.ttf') format('TrueType');
    }

    :root{
        font-size:62.5%
    }

    *{
        padding: 0;
        margin: 0;
    }
`

export default GlobalStyle  