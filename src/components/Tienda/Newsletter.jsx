import styled from "styled-components";
import { IoSend as Send } from "react-icons/io5";

const Container = styled.div`
  height: 40vh;
  border-radius: 1vw;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 420px) {
    margin-top: 2em;
  }
`;
const Titulo = styled.h1`
  font-size: 4.4rem;
  margin-bottom: 0.3em;
  @media only screen and (max-width: 420px) {
    font-size: 3rem;
    letter-spacing: 0.1em;
  }
`;
const Desc = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0.9em;
  @media only screen and (max-width: 420px) {
    text-align: center;
  }
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  @media only screen and (max-width: 420px) {
    width: 80%;
  }
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Boton = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

function Newsletter() {
  return (
    <Container>
      <Titulo>Newsletter</Titulo>
      <Desc>
        ¡Recibe notificaciones actualizadas sobre tus productos favoritos!
      </Desc>
      <InputContainer>
        <Input placeholder="E-mail" />
        <Boton>
          <Send />
        </Boton>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
