import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`

function Anuncio() {
  return (
    <Container>
      ¡¡IMPERDIBLE!! ¡¡ Con una compra superior a los $ 100 el envío es Gratis !!
    </Container>
  );
}

export default Anuncio;