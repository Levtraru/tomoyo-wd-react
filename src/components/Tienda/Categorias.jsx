import styled from "styled-components";
import { categorias } from "../../data";
import CategoriaItem from "./CategoriaItem";

const Container = styled.div`
  display: flex;
  padding: 1.25em;
  justify-content: space-between;
  @media only screen and (max-width: 420px) {
    padding: 0;
    flex-direction: column;
  }
`;

function Categorias() {
  return (
    <Container>
      {categorias.map((item) => (
        <CategoriaItem item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Categorias;
