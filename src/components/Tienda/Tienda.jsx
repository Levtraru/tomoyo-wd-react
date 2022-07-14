import Header from '../Header';
import Extras from '../Extras';
import Footer from '../Footer';
import Anuncio from '../Anuncio';
import Slider from '../Slider';

function Tienda () {
    return (
        <>
        <Anuncio />
        <Extras/>
      <section className="global">
        <Header />
        <Slider />
        <div className="clearfix"></div>
      </section>
      <Footer />
        </>
    );
}

export default Tienda;