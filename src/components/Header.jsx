import { Link } from 'react-router-dom'

function Header () {
    return (
        <header>
          <div id="logo">
            <h1>Tomoyo no Showroom</h1>
          </div>
          <div className="clearfix"></div>
            <ul id="menu">
              <li><Link to ='/'>INICIO</Link></li>
              <li><Link to ='/galeria'>GALERÍA</Link></li>
              <li><Link to ='/contacto'>CONTACTO</Link></li>
            </ul>
        </header>
    );
}

export default Header ;