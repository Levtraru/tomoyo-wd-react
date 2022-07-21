import styled from "styled-components";
import Header from "./Header";
import Extras from './Extras';
import Anuncio from './Anuncio';
import FooterTienda from './Tienda/FooterTienda';
import AddCont from "./AddCont";

const Wrapper = styled.div`
    padding: 3em;
    display: flex;
    background-color: rgba(248, 234, 233, 0.9);
    border-radius: 2em;
    @media only screen and (max-width:420px){
        padding: 1.5em;
        flex-direction: column;
        align-items: center;
    }
`
const ImgCont = styled.div`
    flex: 1;
`
const Img = styled.img`
    width: 100%;
    @media only screen and (max-width:420px){
        width: 80%;
    }
`
const Info = styled.div`
    flex: 1;
    padding: 0 2em;
`
const Titulo = styled.h1`
    font-weight: 300;
    font-size: 4rem;
`
const Desc = styled.p`
    margin: 1.3em 0;
`
const Precio = styled.span`
    font-weight: 200;
    font-size: 2.55rem;
`
const FiltroCont= styled.div`
    width: 50%;
    margin: 1.3em 0; 
    display: flex;
    justify-content: space-between;
`
    
const Filtro= styled.div`
    display: flex;
    align-items: center;    
`
const FiltroTitulo= styled.span`
    font-size: 1.8rem;
    font-weight: 300;
    margin-right: 0.3em;
`
const FiltroColor= styled.button`
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 0.2em;
`
const FiltroTalle= styled.select`
    border: white;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    margin-left: 1em;
    padding: 0.8em 0.4em 0.4em 0.4em;
`
const FiltroTalleOpcion= styled.option``
const Boton = styled.button`
    user-select: none;
    margin-left: 2em;
    padding: 1em;
    border: none;
    border-radius: 1.5em;
    background-color: #d979b6;
    font-weight: bold;
    color: white;

    &:hover{
    background-color: #ec8dcc;
    }
`

function Producto () {

    return (
        <>
            <Anuncio />
            <Extras/>
            <section className="global">
                <Header />
                <Wrapper>
                    <ImgCont>
                        <Img src='https://i.postimg.cc/YSLdKdTq/2-Shadow.webp' />
                    </ImgCont>
                    <Info>
                        <Titulo>Shadow</Titulo>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nemo eligendi, earum tenetur aut exercitationem culpa unde repudiandae reiciendis accusamus ipsam.</Desc>
                        <Precio>$20</Precio>
                        <FiltroCont>
                            <Filtro>
                                <FiltroTitulo>Color</FiltroTitulo>
                                <FiltroColor color='black'/>
                                <FiltroColor color='darkblue'/>
                                <FiltroColor color='gray'/>
                            </Filtro>
                            <Filtro>
                                <FiltroTitulo style={{marginLeft: '30px'}}>Talle</FiltroTitulo>
                                <FiltroTalle>
                                    <FiltroTalleOpcion>XS</FiltroTalleOpcion>
                                    <FiltroTalleOpcion>S</FiltroTalleOpcion>
                                    <FiltroTalleOpcion>M</FiltroTalleOpcion>
                                    <FiltroTalleOpcion>L</FiltroTalleOpcion>
                                    <FiltroTalleOpcion>XL</FiltroTalleOpcion>
                                    <FiltroTalleOpcion>XXL</FiltroTalleOpcion>
                                </FiltroTalle>
                            </Filtro>
                        </FiltroCont>
                        <div style={ {display: 'flex', alignItems: 'center', marginLeft: '4em'}}>
                        <AddCont />
                        <Boton>AGREGAR</Boton></div>
                    </Info>
                </Wrapper>
                <FooterTienda />
                <div className="clearfix"></div>
            </section>
            
        </>
    );
}

export default Producto;