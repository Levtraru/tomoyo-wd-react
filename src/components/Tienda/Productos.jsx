import styled from "styled-components";
import { productos } from "../../data";
import Producto from "./Producto";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

function Productos () {
    return (
    <Container>
        {productos.map(item=>(
            <Producto item={item} key={item.id}/>
        ))}
    </Container>
    );
}

export default Productos;