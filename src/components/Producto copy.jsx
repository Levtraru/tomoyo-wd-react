import styled from "styled-components";
import Header from "./Header";
import Extras from './Extras';
import Footer from './Footer';
import Anuncio from './Anuncio';
import Newsletter from './Tienda/Newsletter';
import FooterTienda from './Tienda/FooterTienda';

const Container = styled.div`
    
`

function A () {
    return (
        <>
            <Anuncio />
            <Extras/>
            <section className="global">
                <Header />
                <Container>
                    HOLIS
                </Container>
                <Newsletter />
                <FooterTienda />
                <div className="clearfix"></div>
            </section>
            <Footer />
            
        </>
    );
}

export default A;