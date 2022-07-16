import styled from "styled-components";
import { BsCartFill as Cart, BsSearch as Search, BsHeartFill as Heart } from 'react-icons/bs';

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
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
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
`
const Circulo = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #d979b6;
    position: absolute;
`
const Img = styled.img`
    height: 85%;
    z-index: 2;
`
const Icono = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #ffd000;
        transform: scale(1.1);
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