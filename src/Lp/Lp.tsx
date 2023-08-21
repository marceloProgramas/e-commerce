import NavBar from '../components/navbar/navbar.tsx'
import Presentation from './presentation/presentation.tsx'
import Products from './Products/Products.tsx'

export default function Lp(){
    return(
        <>
            <NavBar />
            <Presentation />
            <Products />
        </>
    )
}