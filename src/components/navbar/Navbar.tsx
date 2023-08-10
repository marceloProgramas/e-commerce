import * as S from './navbar';
import {useState, useEffect} from 'react';

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

    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth);
        }
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <>
        {(width<1024)?(
        <>
        {Menu &&
        (
            <S.content>
                <S.Btn onClick={Close} ><S.MenuImg src="/navbar/close.svg" alt="close" /></S.Btn>
                <S.list>
                    <S.link>shop</S.link>
                    <S.link>contact</S.link>
                </S.list>
            </S.content>
        )}
        {Cart &&
        (
            <S.content>
                <S.Btn onClick={Close} ><S.MenuImg src="/navbar/close.svg" alt="close" /></S.Btn>
                <S.list>
                    <S.link>sign in</S.link>
                    <S.link>cart</S.link>
                </S.list>
            </S.content>
        )}
        <S.Wrapper>
            <S.BtnLeft onClick={OpenMenu}><S.MenuImg src="/navbar/menu.svg" alt="menu" /></S.BtnLeft>
            <S.BtnRight onClick={OpenCart}><S.MenuImg src="/navbar/cart.svg" alt="menu" /></S.BtnRight>
        </S.Wrapper>

        </>
        )
        :(  
        <S.Wrapper>
            <div>
            <S.BtnLeft><S.link>shop</S.link></S.BtnLeft>
            <S.BtnLeft><S.link>contact</S.link></S.BtnLeft>
            </div>
            <div>
            <S.BtnRight><S.link>sign in</S.link></S.BtnRight>
            <S.BtnRight><S.link>cart</S.link></S.BtnRight>
            </div>
        </S.Wrapper>
        )
        }
        </>       
    )
}