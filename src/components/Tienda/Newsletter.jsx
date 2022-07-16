import styled from "styled-components";
import { IoSend as Send} from 'react-icons/io5'

const Container = styled.div`
    height: 60vh;
    background-color: #F8EAE9;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Titulo = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Boton = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

function Newsletter () {
    return (
        <Container>
            <Titulo>Newsletter</Titulo>
            <Desc>¡Recibe notificaciones actualizadas sobre tus productos favoritos!</Desc>
            <InputContainer>
                <Input placeholder="E-mail"/>
                <Boton><Send /></Boton>
            </InputContainer>
        </Container>
    );
}

export default Newsletter;