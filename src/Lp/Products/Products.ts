import { styled } from "styled-components";

export const ProductsWrapper = styled.div`
border-left: solid #121212 0.2rem;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: solid #121212 0.2rem;
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 2rem;

    margin-inline: auto;
    margin-top: 4rem;
    align-items: center;

    @media(min-width: 420px) {
        margin-top: 9rem;
    }
    
    @media(min-width: 760px) {
        margin-top:14rem;
        font-size: 3rem;
    }

    @media(min-width: 1020px) {
        margin-top: 9rem;
        font-size: 2rem;
    }

    @media(min-width: 1430px) {
        margin-top:14rem;
        font-size: 3rem;
    }
`

export const Category = styled.h3`
    font-size: 3rem;

    margin-bottom: 2rem;

    @media(min-width: 420px) {
        margin-bottom: 5rem;
    }

    @media(min-width: 760px) {
        margin-bottom: 9rem;
        font-size: 5rem;
    }
    
    @media(min-width: 1020px) {
        margin-bottom: 5rem;
        font-size: 3rem;
    }

    @media(min-width: 1430px) {
        margin-bottom: 9rem;
        font-size: 5rem;
    }
`

export const Link = styled.a`
`

const img = styled.img`
    width:50%;
`

export const ImgRight = styled(img)`
    border-left: solid #121212 0.2rem;
`

export const ImgLeft = styled(img)`
    border-right: solid #121212 0.2rem;
`