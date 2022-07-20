import styled from "styled-components";
import Header from "./Header";
import Extras from './Extras';
import Anuncio from './Anuncio';
import FooterTienda from './Tienda/FooterTienda';
import AddCont from "./AddCont";

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgCont = styled.div`
    flex: 1;
`
const Img = styled.img`
    width: 100%;
`
const Info = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Titulo = styled.h1`
    font-weight: 300;
    font-size: 60px;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Precio = styled.span`
    font-weight: 200;
    font-size: 40px;
`
const FiltroCont= styled.div`
    width: 50%;
    margin: 30px 0; 
    display: flex;
    justify-content: space-between;
`
    
const Filtro= styled.div`
    display: flex;
    align-items: center;    
`
const FiltroTitulo= styled.span`
    font-size: 30px;
    font-weight: 300;
`
const FiltroColor= styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
`
const FiltroTalle= styled.select`
    border: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-left: 10px;
    padding: 10px 5px 5px 5px;
`
const FiltroTalleOpcion= styled.option``
const Boton = styled.button`
    user-select: none;
    margin-left: 30px;
    padding: 15px 15px;
    border: none;
    border-radius: 20px;
    background-color: #d979b6;
    font-style: 20px;
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
                        <div style={ {display: 'flex', alignItems: 'center'}}>
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