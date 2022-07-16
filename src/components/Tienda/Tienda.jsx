import Header from '../Header';
import Extras from '../Extras';
import Footer from '../Footer';
import Anuncio from '../Anuncio';
import Slider from './Slider';
import Categorias from './Categorias';
import Newsletter from './Newsletter';
import FooterTienda from './FooterTienda';

function Tienda () {
    return (
        <>
        <Anuncio />
        <Extras/>
      <section className="global">
        <Header />
        <Slider />
        <Categorias />
        <Newsletter />
        <FooterTienda />
        <div className="clearfix"></div>
      </section>
      <Footer />
        </>
    );
}

export default Tienda;