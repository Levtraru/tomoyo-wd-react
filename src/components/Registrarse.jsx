import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(225, 255, 255, 0.5),
        rgba(225, 255, 255, 0.5)),
        url('https://i.postimg.cc/9fgjrp3Q/Fondo-Reg.webp');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    border-radius: 40px;
    padding: 40px;
    background-color: white;
    @media only screen and (max-width:420px){
        width: 70%;
    }
`
const Titulo = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
`
const Acuerdo = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Boton = styled.button`
    user-select: none;
    width: 40%;
    padding: 15px 20px;
    border: none;
    border-radius: 20px;
    background-color: #d979b6;
    font-style: 20px;
    color: white;

    &:hover{
    background-color: #ec8dcc;
    }
`
const link = {
    color: 'black',
    margin: '5px 0',
    fontSize: '12px',
    textDecoration: 'underline',}

function Registrarse () {
    return (
        <Container>
            <Wrapper>
                <Titulo>CREAR CUENTA</Titulo>
                <Form>
                    <Input placeholder='Nombre'/>
                    <Input placeholder='Apellido'/>
                    <Input placeholder='E-mail'/>
                    <Input placeholder='Usuario'/>
                    <Input placeholder='Contraseña'/>
                    <Input placeholder='Confirmar Contraseña'/>
                    <Acuerdo>Al crear una cuenta, doy mi consentimiento para que mi información personal sea procesada de acuerdo con la <b>POLITICA DE PRIVACIDAD</b></Acuerdo>
                    <Boton>CREAR</Boton>
                </Form>
                <Link to='/login' style={link}>¿Ya estás registrado? ¡Ingresa aquí!</Link>
            </Wrapper>
        </Container>
    );
}

export default Registrarse;