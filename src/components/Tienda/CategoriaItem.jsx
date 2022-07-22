import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media only screen and (max-width: 420px) {
    height: 30vh;
    object-fit: contain;
  }
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
const Titulo = styled.h1`
  color: black;
  background-color: #f8eae9;
  margin-bottom: 20px;
`;
const Boton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #d979b6;
  font-style: 20px;
  color: white;
`;

function CategoriaItem({ item }) {
  return (
    <Container>
      <Img src={item.img} />
      <Info>
        <Titulo>{item.titulo}</Titulo>
        <Boton>COMPRAR AHORA</Boton>
      </Info>
    </Container>
  );
}

export default CategoriaItem;
