import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;
    text-justify: start;
`

export const R = styled.span`
    font-size: 2rem;

`

export const Nome = styled.h1`
    font-size: 4.5rem;
    font-family: Gillroy;
    font-weight: 700;

    margin-top: 5rem;

    max-width: 38rem;

    @media(min-width: 600px) {
        font-size: 9rem;
        max-width:60rem;
    }
`

export const Explanation = styled.p`
    font-size: 2rem;
    font-family: Gillroy;
    font-weight: 100;

    text-align: justify;
    
    max-width: 38rem;

    @media(min-width: 600px) {
        font-size: 2.5rem;
        max-width:60rem;
    }
`

export const HorizontalLine = styled.hr`
    margin-top: 2rem;
    width: 38rem;
    color: #121212;
    background-color: #121212;
    height: 0.01rem;
`

export const VertiWrapper = styled(Wrapper)`
    display: flex;
    gap: 1.5rem;

    margin-block: 2.5rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    height: 18rem;

    @media (min-width: 600px){
        height: 36rem;
    }
`

export const VerticalLine = styled.hr`
    width: 0.08rem;
    color: #121212;
    background-color: #121212;
    height: 18rem;


    @media (min-width: 600px){
        height: 36rem;
    }

`

export const HoriExplanation = styled.div`
    display: flex;
    height: 20rem;
    align-items: end;

    @media (min-width: 600px){
        height: 36rem;
    }
`

export const TinyExplanation = styled.p`
    font-size: 1.2rem;
    font-family: Gillroy;
    font-weight: 100;

    text-align: justify;
    
    max-width: 18rem;

    @media(min-width: 600px) {
        font-size: 2rem;
        max-width:30rem;
    }
`
