import styled from "styled-components";
import {
    BsFillCaretLeftFill as ArrowL,
    BsFillCaretRightFill as ArrowR
} from 'react-icons/bs'
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Flecha = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin: auto;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100px;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -70}vw);
`
const Slide = styled.div`
    width: 70vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Img = styled.img`
    margin-left: 5rem;
    height: 80%;
    border-radius: 20px;
    background-color: #${props=>props.bg};
`
const Info = styled.div`
    flex: 1;
    padding: 50px;
`
const Titulo = styled.h1`
    font-size: 2.5rem;
`
const Desc = styled.p`
    margin: 50px 0;
    font-style: 20px;
    font-weight: bold;
    letter-spacing: 3px;
`
const Boton = styled.button`
    padding: 15px;
    border: none;
    border-radius: 20px;
    background-color: #d979b6;
    font-style: 20px;
    color: white;
`

function Slider () {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)}
    };

    return (
        <Container>
            <Flecha direction='left' onClick={() => handleClick('left')}>
                <ArrowL />
            </Flecha>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(
                    <Slide>
                        <ImgContainer>
                            <Img bg={item.bg} src={item.img}/>
                        </ImgContainer>
                        <Info>
                            <Titulo>{item.titulo}</Titulo>
                            <Desc>{item.desc}</Desc>
                            <Boton>COMPRAR AHORA</Boton>
                        </Info>
                    </Slide>
                ))}
                
            </Wrapper>
            <Flecha direction='right' onClick={() => handleClick('right')}>
                <ArrowR />
            </Flecha>
        </Container>
    );
}

export default Slider ;