import styled from "styled-components";
import { useState } from "react";
import { BsPlusLg as Mas, BsDashLg as Menos } from "react-icons/bs";

function AddCont() {
  const [cantidad, setCantidad] = useState(1);
  const sumar = () => {
    setCantidad(cantidad + 1);
  };
  const restar = () => {
    cantidad > 1 ? setCantidad(cantidad - 1) : setCantidad(1);
  };

  const AddCont = styled.div``;
  const CantidadCont = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
  `;
  const Cantidad = styled.span`
    user-select: none;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #d979b6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
  `;
  return (
    <AddCont>
      <CantidadCont>
        <Menos
          onClick={restar}
          style={{
            cursor: "url('https://i.postimg.cc/kgVNCXTC/Cursor2.png'), auto",
          }}
        />
        <Cantidad>{cantidad}</Cantidad>
        <Mas
          onClick={sumar}
          style={{
            cursor: "url('https://i.postimg.cc/kgVNCXTC/Cursor2.png'), auto",
          }}
        />
      </CantidadCont>
    </AddCont>
  );
}

export default AddCont;
