import './App.css';
import Header from './components/Header';
import Extras from './components/Extras';
import FooterTienda from './components/Tienda/FooterTienda'
import Anuncio from './components/Anuncio';
import TomoyoAva from '../src/imgs/TomoyoAva.png';

function App() {
  return (
    <div className="App">
      <Anuncio />
      <Extras/>
      <section className="global">
        <Header />
        <div id="posts">
          <article className="post">
            <h2>Cardcaptor Sakura</h2>
            <span className="date">Primera publicación: 1 de mayo de 1996</span>
            <p>Cardcaptor Sakura (japonés: カードキャプターさくら, Hepburn: Kādokyaputā Sakura), abreviada como CCS, es una serie de manga japonesa escrita e ilustrada por el grupo de manga Clamp. Publicada mensualmente en la revista de manga shōjo Nakayoshi desde mayo de 1996 hasta junio de 2000, también fue publicada en 12 volúmenes tankōbon por Kodansha entre noviembre de 1996 y julio de 2000. La historia se centra en Sakura Kinomoto, una estudiante de primaria que descubre poderes mágicos tras liberar accidentalmente un conjunto de cartas mágicas en el mundo; debe recuperar las cartas para evitar una catástrofe. Cada una de estas cartas otorga diferentes poderes mágicos, y sólo pueden ser activadas por alguien con habilidades mágicas inherentes. Una secuela de Clamp, Cardcaptor Sakura: Clear Card, centrada en Sakura en la escuela secundaria, comenzó a serializarse en Nakayoshi en 2016.

              El manga fue adaptado en una serie de televisión anime de 70 episodios por Madhouse que se emitió en el canal de televisión por satélite japonés NHK BS2 desde abril de 1998 hasta marzo de 2000. Otros medios de comunicación incluyen dos películas de anime, videojuegos, libros de arte, libros ilustrados y cómics de películas. Tokyopop publicó el manga en inglés en Norteamérica desde marzo de 2000 hasta agosto de 2003. Cuando la licencia de Tokyopop expiró, Dark Horse Manga publicó la serie en ediciones ómnibus desde octubre de 2010 hasta septiembre de 2012. El anime fue doblado al inglés por Omni Productions, de Hong Kong, y se emitió en el sudeste asiático y el sur de Asia en el canal Animax Asia.

              Nelvana concedió la licencia de la serie de televisión y la primera película para Norteamérica con el título en inglés de Cardcaptors, que se emitió por primera vez en Kids' WB de junio de 2000 a diciembre de 2001. Los 70 episodios fueron doblados; mientras que otros territorios de habla inglesa recibieron la serie completa, la versión emitida en la televisión norteamericana estaba muy editada en 39 episodios. La serie de televisión y las películas fueron sublicenciadas por Geneon, que las publicó sin editar con subtítulos en inglés.
              <a href='https://es.wikipedia.org/wiki/Cardcaptor_Sakura' target="_blank" rel="noopener noreferrer" className="button-plus">Leer más</a>
            </p>
          </article>
        </div>
        <aside id="sidebar">
          <div id="about">
            <h4><span>¿Quién soy?</span></h4>
            <img src={TomoyoAva} alt='' />
            <p>Hija del presidente de la Compañía de Juguetes Daidouji, Sonomi Daidouji.
              Tengo acceso a la tecnología de la empresa de mi madre, y suministro a Sakura y a Kerberos diferentes dispositivos de comunicación.
            </p>
          </div>
        </aside>
        <div className="clearfix"></div>
        <FooterTienda />
      </section>
    </div>
  );
}

export default App;
