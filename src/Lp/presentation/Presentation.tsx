import * as S from './presentation'


export default function Presentation(){
    return(
        <>
        <S.Wrapper>
            <S.Nome>Kyiv LuxeBouquets<S.R>®</S.R></S.Nome>
            <S.Explanation>
                Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service
            </S.Explanation>
            <S.HorizontalLine/>
        </S.Wrapper>
        <S.VertiWrapper>
            <S.Img src='/presentation/stockImg.png'/>
            <S.VerticalLine/>
            <S.HoriExplanation>
            <S.TinyExplanation>
                Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
            </S.TinyExplanation>
            </S.HoriExplanation>
        </S.VertiWrapper>
        </>
    )
}