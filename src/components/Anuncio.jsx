import styled from "styled-components";

const Container = styled.div`
  height: 2em;
  line-height: 170%;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 0.88em;
  @media only screen and (max-width:420px){
    font-size: 0.6em;
    height: 1.4em;
    line-height: 120%;
  }
`

function Anuncio() {
  return (
    <Container>
      ¡¡IMPERDIBLE!! ¡¡ Con una compra superior a los $ 100 el envío es Gratis !!
    </Container>
  );
}

export default Anuncio;