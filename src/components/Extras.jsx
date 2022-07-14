import '../stylesheets/extras.css'
import { BsCartFill as Cart } from 'react-icons/bs';

function Extras () {
    return (
        <>
        <div id="theme-selector">
            <div id="to-base"></div>
            <div id="to-lilac"></div>
            <div id="to-golden"></div>
            <div id="to-dark"></div>
        </div>
        <div id="bienvenido">
            <p> <Cart style={{fontSize: '20px', marginLeft: '2rem'}}/></p>
            <p>Registrarse</p>
            <p>Ingresar</p>
        </div>
        </>
    );
}

export default Extras ;