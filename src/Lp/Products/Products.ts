import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: solid #121212 0.2rem;
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;

    margin-inline: auto;
    margin-top: 9rem;
    align-items: center;
`

export const Category = styled.h3`
    font-size: 3rem;

    margin-bottom: 5rem;
`

export const Link = styled.a`
    font-size: 2rem;
`

const img = styled.img`
    width:50vw;
`

export const ImgRight = styled(img)`
    border-left: solid #121212 0.1rem;
`

export const ImgLeft = styled(img)`
    border-right: solid #121212 0.2rem;
`