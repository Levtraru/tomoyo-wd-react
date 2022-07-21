import styled from "styled-components";
import Header from "./Header";
import Extras from './Extras';
import Anuncio from './Anuncio';
import FooterTienda from './Tienda/FooterTienda';
import ChangoProducto from "./ChangoProducto";

const Container = styled.div`
    padding: 1.2em;
    background-color: rgba(248, 234, 233, 0.9);
    border-radius: 2em;
    @media only screen and (max-width:420px){
        padding: 0.6em;
    }
`
const Titulo = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2em;
    @media only screen and (max-width:420px){
        display: flex;
        flex-direction: column;
    }
`
const TopBoton = styled.button`
    padding: 0.8em 1.2em;
    border: none;
    border-radius: 1.3em;
    background-color: ${(props)=>props.color};
    color: white;
    &:hover{
        background:
            linear-gradient(rgba(255, 255, 255, 0.45),rgba(255, 255, 255, 0.45)),
            linear-gradient(${(props)=>props.color}, ${(props)=>props.color});
    };
    @media only screen and (max-width:420px){
        padding: 0.5em 1em;
        margin-bottom: 1em;
        font-size: 1em;
        font-size: 0.9em;
    }
`
const TopTextos = styled.div`
    @media only screen and (max-width:420px){
        display: none;
    }
`
const TopTexto = styled.span`
    text-decoration: underline;
    cursor: url('https://i.postimg.cc/kgVNCXTC/Cursor2.png'), auto;
    margin: 0 1em;
`
const Bot = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width:420px){
        flex-direction: column;
    }
`
const Info = styled.div` flex: 3; `
const Resumen = styled.div`
    background: white;
    border: 0.5px solid lightgray;
    border-radius: 1em;
    padding: 1.2em;
    height: 14.5em;
    width: 20em;
    @media only screen and (max-width:420px){
        width: 17em;
    }
`
const ResumenTitulo = styled.h1`
    font-weight: 300;
`
const ResumenItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.8em 0;
    font-weight: ${(props)=>props.tipo === 'total' && '500'};
    font-size: ${(props)=>props.tipo === 'total' && '24px'};
`
const ResumenItemTexto = styled.span``
const ResumenItemPrecio = styled.span``
const ResumenBoton = styled.button`
    float: left;
    width: 50%;
    padding: 0.8em;
    border: none;
    border-radius: 1em;
    background-color: teal;
    color: white;
    font-weight: 600;
    @media only screen and (max-width:420px){
        width: 65%;
    }
`

function Chango () {
    return (
        <>
            <Anuncio />
            <Extras/>
            <section className="global">
                <Header />
                <Container>
                    <Titulo>TUS PRODUCTOS</Titulo>
                    <Top>
                        <TopBoton color='#d979b6'>SEGUIR COMPRANDO</TopBoton>
                        <TopTextos>
                            <TopTexto>CHANGO DE COMPRAS (2)</TopTexto>
                            <TopTexto>LISTA DE DESEOS</TopTexto>
                        </TopTextos>
                        <TopBoton color='teal'>PASAR POR CAJA</TopBoton>
                    </Top>
                    <Bot>
                        <Info>
                            <ChangoProducto
                                img='qRPVHt1W/20-Fight.webp'
                                imgAlt='20-Fight'
                                producto='Traje de Combate: Fight'
                                id='120'
                                color='#EA85A4'
                                talle='37.5'
                                precio='$ 30'
                            />
                            <ChangoProducto
                                img='90dS3LRq/45-46-Judgement.webp'
                                imgAlt='45-46-Judgement'
                                producto='Traje de Combate: Judgement'
                                id='1456'
                                color='#EA85A4'
                                talle='39'
                                precio='$ 60'
                            />
                            <ChangoProducto
                                img='52gVQ2tF/6b-Illusion.webp'
                                imgAlt='6b-Illusion'
                                producto='Traje de Combate: Illusion'
                                id='106'
                                color='yellow'
                                talle='36'
                                precio='$ 40'
                            />
                            <Resumen>
                                <ResumenTitulo>RESUMEN DE ORDEN</ResumenTitulo>
                                    <ResumenItem>
                                        <ResumenItemTexto>Subtotal</ResumenItemTexto><ResumenItemPrecio>$ 130</ResumenItemPrecio>
                                    </ResumenItem>
                                    <ResumenItem>
                                        <ResumenItemTexto>Costo de Envio</ResumenItemTexto><ResumenItemPrecio>$ 5</ResumenItemPrecio>
                                    </ResumenItem>
                                    <ResumenItem>
                                        <ResumenItemTexto>Promoción - Envio Gratis:</ResumenItemTexto><ResumenItemPrecio>$ -5</ResumenItemPrecio>
                                    </ResumenItem>
                                    <ResumenItem tipo='total'>
                                        <ResumenItemTexto>Total</ResumenItemTexto><ResumenItemPrecio>$130</ResumenItemPrecio>
                                    </ResumenItem>
                                <ResumenBoton>PASAR POR CAJA</ResumenBoton>
                            </Resumen>
                        </Info>
                    </Bot>
                </Container>
                <FooterTienda />
                <div className="clearfix"></div>
            </section>
        </>
    );
}

export default Chango;