import styled from "styled-components";
import {
    BsFacebook as Facebook,
    BsInstagram as Instagram,
    BsTwitter as Twitter,
    BsPinterest as Pinterest,
    BsFillGeoAltFill as Geo,
    BsFillEnvelopeFill as Mail,
    BsTelephoneFill as Phone
} from 'react-icons/bs'

const Container = styled.div`
    display: flex;
    background-color: white;
    border-radius: 20px;
`
const Izq = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialCont = styled.div`
    display: flex;
`
const SocialIcono = styled.button`
    font-size: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`
const Centro = styled.div`
    margin-top: 5px;
    flex: 1;
    padding: 20px;
`
const Titulo = styled.h3`
    margin-bottom: 30px;
`
const Lista = styled.ul`
    display: flex;
    flex-wrap: wrap;
`
const ListaItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: url('https://i.postimg.cc/kgVNCXTC/Cursor2.png'), auto;

    &:hover{ text-decoration: underline;}
`
const Der = styled.div`
    margin-top: 5px;
    flex: 1;
    padding: 20px;
`
const ContactoItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Pago = styled.img`
    width: 100%;
`

function FooterTienda () {
    return (
        <Container>
            <Izq>
                <Logo>Tomoyo no Showroom</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa dignissimos beatae adipisci obcaecati atque ipsum, recusandae nostrum totam.</Desc>
                <SocialCont>
                    <SocialIcono color= "3b5999"> <Facebook /> </SocialIcono>
                    <SocialIcono color= "e4405f"> <Instagram /> </SocialIcono>
                    <SocialIcono color= "55acee"> <Twitter /> </SocialIcono>
                    <SocialIcono color= "e60023"> <Pinterest /> </SocialIcono>
                </SocialCont>
            </Izq>
            <Centro>
                <Titulo>Enlaces útiles</Titulo>
                <Lista>
                    <ListaItem>Inicio</ListaItem>
                    <ListaItem>Carrito</ListaItem>
                    <ListaItem>Accesorios</ListaItem>
                    <ListaItem>Mi cuenta</ListaItem>
                    <ListaItem>Seguimiento de orden</ListaItem>
                    <ListaItem>Lista de deseos</ListaItem>
                    <ListaItem>Términos</ListaItem>
                </Lista>
            </Centro>
            <Der>
                <Titulo>Contacto</Titulo>
                <ContactoItem><Geo style={{marginRight:'10px'}}/>399-1006, Noshappu, Wakkanai-shi, Hokkaido</ContactoItem>
                <ContactoItem><Phone style={{marginRight:'10px'}}/>+34 11 4567 8923</ContactoItem>
                <ContactoItem><Mail style={{marginRight:'10px'}}/>contacto@tomoyonoshowroom.com</ContactoItem>
                <Pago src="https://www.iberspain.com/img/cms/Tarjetas-TPV-paypal.gif"/>
            </Der>
        </Container>    
    );
}

export default FooterTienda ;