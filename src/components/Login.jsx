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
    width: 20%;
    border-radius: 40px;
    padding: 40px;
    background-color: white;
`
const Titulo = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
`
const Boton = styled.button`
    user-select: none;
    width: 60%;
    padding: 15px 20px;
    border: none;
    border-radius: 20px;
    background-color: #d979b6;
    font-style: 20px;
    color: white;
    margin-bottom: 10px;

    &:hover{
    background-color: #ec8dcc;
    }
`
const link = {
    color: 'black',
    margin: '5px 0',
    fontSize: '12px',
    textDecoration: 'underline',}

function Login () {
    return (
        <Container>
            <Wrapper>
                <Titulo>INGRESAR</Titulo>
                <Form>
                    <Input placeholder='Usuario'/>
                    <Input placeholder='Contraseña'/>
                    <Boton>INICIAR SESION</Boton>
                    <span style={link}>¿Olvidaste tu contraseña?</span>
                    <Link to='/registrarse' style={link}>Crear nueva cuenta</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login;