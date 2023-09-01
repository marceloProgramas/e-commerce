import * as S from './Products';


function Product({Left}:{Left:boolean}){
    return(
        <>
        {Left?(
        <S.Wrapper>
            <S.Text>
                <S.Category>Fresh Flowers</S.Category>
                <S.Link>Shop now →</S.Link>
            </S.Text>
            <S.ImgRight src='./products/card_item.png'/>
        </S.Wrapper>
        ):(
        <S.Wrapper>
            <S.ImgLeft src='./products/card_item.png'/>
            <S.Text>
                <S.Category>Fresh Flowers</S.Category>
                <S.Link>← Shop now</S.Link>
            </S.Text>
        </S.Wrapper>
        )}
        </>
    )
}

export default function Products(){
    return(
        <S.ProductsWrapper>
        <Product Left={true}/>
        <Product Left={false}/>
        </S.ProductsWrapper>
    )
}