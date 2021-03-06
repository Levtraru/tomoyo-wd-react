import styled from "styled-components";
import Header from "./Header";
import Extras from "./Extras";
import Anuncio from "./Anuncio";
import FooterTienda from "./Tienda/FooterTienda";
import Productos from "./Tienda/Productos";
import Newsletter from "./Tienda/Newsletter";

const Container = styled.div``;
const FiltroCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Filtro = styled.div`
  margin: 1.4em;
  @media only screen and (max-width: 420px) {
    margin: 0 0.4em;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1em;
  }
`;
const Seleccionar = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #333;
  font-size: 1.2em;
  @media only screen and (max-width: 420px) {
    margin-bottom: 1em;
    font-size: 0.8em;
  }
`;
const Opcion = styled.option``;

function PaginaProductos() {
  return (
    <>
      <Anuncio />
      <Extras />
      <section className="global">
        <Header />
        <Container>
          <FiltroCont>
            <Filtro>
              <Seleccionar defaultValue={"DEFAULT"}>
                <Opcion value="DEFAULT" disabled>
                  Color
                </Opcion>
                <Opcion value="1">Blanco</Opcion>
                <Opcion value="2">Negro</Opcion>
                <Opcion value="3">Rojo</Opcion>
                <Opcion value="4">Azul</Opcion>
                <Opcion value="5">Amarillo</Opcion>
                <Opcion value="6">Verde</Opcion>
              </Seleccionar>
              <Seleccionar defaultValue={"DEFAULT"}>
                <Opcion value="DEFAULT" disabled>
                  Talle
                </Opcion>
                <Opcion value="1">XS</Opcion>
                <Opcion value="2">S</Opcion>
                <Opcion value="3">M</Opcion>
                <Opcion value="4">L</Opcion>
                <Opcion value="5">XL</Opcion>
                <Opcion value="6">XXL</Opcion>
              </Seleccionar>
              <Seleccionar defaultValue={"DEFAULT"}>
                <Opcion value="DEFAULT" disabled>
                  Tipo de Vestimenta
                </Opcion>
                <Opcion value="1">Trajes de Openings</Opcion>
                <Opcion value="2">Trajes de Combate</Opcion>
                <Opcion value="3">Trajes de Peliculas</Opcion>
                <Opcion value="4">Prendas Casual</Opcion>
                <Opcion value="5">Otras Prendas</Opcion>
              </Seleccionar>
            </Filtro>
            <Filtro>
              <Seleccionar defaultValue={"DEFAULT"}>
                <Opcion value="DEFAULT">M??s nuevo a m??s viejo</Opcion>
                <Opcion value="1">M??s viejo a m??s nuevo</Opcion>
                <Opcion value="2">Precio (asc)</Opcion>
                <Opcion value="3">Precio (desc)</Opcion>
              </Seleccionar>
            </Filtro>
          </FiltroCont>
          <Productos />
        </Container>
        <Newsletter />
        <FooterTienda />
        <div className="clearfix"></div>
      </section>
    </>
  );
}

export default PaginaProductos;
