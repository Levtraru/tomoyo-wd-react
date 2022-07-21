import styled from "styled-components";
import { BsCartFill as Cart, BsArrowUpRightCircleFill as Search, BsHeartFill as Heart } from 'react-icons/bs';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba (0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    @media only screen and (max-width:420px){
        opacity: 0.7;
    }
`
const Container = styled.div`
    flex: 1;
    margin: 0.34em;
    min-width: 15em;
    height: 21.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 20%;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
        background-color: rgba (0, 0, 0, 0.2);
    }
    @media only screen and (max-width:420px){
        /* margin: 1em; */
        min-width: 6.1em;
        height: 10em;
        border-radius: 2em;
    }
`
const Circulo = styled.div`
    width: 13em;
    height: 13em;
    border-radius: 50%;
    background-color: #d979b6;
    position: absolute;
    @media only screen and (max-width:420px){
        width: 5em;
        height: 5em;
    }
`
const Img = styled.img`
    height: 85%;
    z-index: 2;
`
const Icono = styled.button`
    width: 3em;
    height: 3em;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.75em;
    transition: all 0.5s ease;
    &:hover{
        background-color: #ffd000;
        transform: scale(1.1);
    }
    @media only screen and (max-width:420px){
        font-size: 0.4rem;
    }
`

function Producto ({item}) {
    return (
    <Container>
        <Circulo />
        <Img src={item.img} />
        <Info>
            <Icono> <Cart /> </Icono>
            <Icono> <Search /> </Icono>
            <Icono> <Heart /> </Icono>
        </Info>
    </Container>
    );
}

export default Producto;