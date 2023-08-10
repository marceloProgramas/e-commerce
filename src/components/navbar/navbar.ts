import { styled } from "styled-components";

export const Wrapper = styled.div`
    border-bottom: solid #121212 0.4rem;
    
    display: flex;
    justify-content: space-between;

`

export const MenuImg = styled.img`
    width: 3rem;
`

export const Btn = styled.button`
    padding:2rem 2.5rem;

    background: none;
    border:none;

    @media(min-width: 1023px) {
        padding: 3.5rem 4.5rem;
    }
`

export const BtnLeft = styled(Btn)`
    border-right: solid #121212 0.4rem;
`

export const BtnRight = styled(Btn)`
    border-left: solid #121212 0.4rem;
`

export const list = styled.li`
    display: flex;
    gap: 3rem;
    flex-direction: column;

    align-items:center;
    justify-content:center;

    margin-top: 15vh;
    width: 100%;
`

export const content = styled.div`
    position: absolute;
    z-index: 1;

    background-color: white;

    width: 100%;
    height: 100%;
`

export const link = styled.ul`
    font-size: 10rem;
    font-family: Gillroy;

    @media(min-width: 1023px){
        font-size: 3rem;
    }
`



