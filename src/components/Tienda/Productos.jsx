import styled from "styled-components";
import { productos } from "../../data";
import Producto from "./Producto";

const Container = styled.div`
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media only screen and (max-width:420px){
        padding: 0;
    }
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