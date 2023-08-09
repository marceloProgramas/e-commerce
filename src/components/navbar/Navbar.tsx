import * as S from './navbar';
import {useState} from 'react';

export default function Navbar(){
    const [Menu, setMenu] = useState(false);
    const [Cart, setCart] = useState(false);
    function OpenMenu(){
        setMenu(true);
    }

    function OpenCart(){
        setCart(true);
    }

    function Close(){
        setMenu(false);
        setCart(false);
    }

    console.log(window.innerWidth<1024)
    return(
        <>
        {Menu &&
        (
            <S.content>
                <S.Btn onClick={Close} ><S.MenuImg src="/navbar/close.svg" alt="close" /></S.Btn>
                <S.list>
                    <S.links>shop</S.links>
                    <S.links>contact</S.links>
                </S.list>
            </S.content>
        )}
        {Cart &&
        (
            <S.content>
                <S.Btn onClick={Close} ><S.MenuImg src="/navbar/close.svg" alt="close" /></S.Btn>
                <S.list>
                    <S.links>sign in</S.links>
                    <S.links>cart</S.links>
                </S.list>
            </S.content>
        )}
        <S.Wrapper>
            <S.BtnLeft onClick={OpenMenu}><S.MenuImg src="/navbar/menu.svg" alt="menu" /></S.BtnLeft>
            <S.BtnRight onClick={OpenCart}><S.MenuImg src="/navbar/cart.svg" alt="menu" /></S.BtnRight>
        </S.Wrapper>
        </>
    )
}