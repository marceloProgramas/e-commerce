import NavBar from '../components/navbar/navbar.tsx'
import Presentation from './presentation/presentation.tsx'
import Products from './Products/Products.tsx'
import * as S from './Lp.ts' 

export default function Lp(){
    return(
        <>
            <NavBar />
            <S.Wrapper>
            <Presentation />
            <Products />
            </S.Wrapper>
        </>
    )
}