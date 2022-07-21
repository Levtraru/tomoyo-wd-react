import styled from "styled-components"
import AddCont from "./AddCont"


    const Producto = styled.div`
        display: flex;
        justify-content: space-between;
        @media only screen and (max-width:420px){
            flex-direction: column;
        }
    `
    const ProdDetalle = styled.div`
        flex: 2;
        display: flex;
    `
    const Img = styled.img` width: 200px; 
    
    @media only screen and (max-width:420px){
        margin-bottom: 2rem;
    }
    `
    const Detalles = styled.div`
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `
    const ProdNombre = styled.span``
    const ProdId = styled.span``
    const ProdColor = styled.div`
        border: 0.5px solid gray;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${(props)=>props.color};
    `
    const ProdTalle = styled.span``
    const PrecioDetalle = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
    const ProdPrecio = styled.div`
        font-size: 30px;
        font-weight: 300;
        margin-top: 25px;
        margin-right: 25px;
    `
    const Hr = styled.hr`
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: #EA85A4;
        border: none;
        height: 1px;
    `

function ChangoProducto ({img, imgAlt, producto, id, color, talle, precio}) {
        return (
    <>
            <Producto>
                <ProdDetalle>
                    <Img
                        src={(`https://i.postimg.cc/${img}`)}
                        alt={(`Foto de ${imgAlt}`)}
                    />
                    <Detalles>
                        <ProdNombre><b>Producto:</b> {producto}</ProdNombre>
                        <ProdId><b>ID:</b> {id}</ProdId>
                        <ProdColor color={`${color}`}/>
                        <ProdTalle><b>Talle:</b> {talle}</ProdTalle>
                    </Detalles>
                </ProdDetalle>
                <PrecioDetalle>
                    <AddCont />
                    <ProdPrecio>{precio}</ProdPrecio>
                </PrecioDetalle>
            </Producto>
        <Hr />
        </>
        );
}

export default ChangoProducto;