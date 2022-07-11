import '../stylesheets/extras.css'

function Footer () {
    const style = {
        cursor: 'pointer'
    };
    return (
        <footer>
            Tomoyo no Showroom by Lev'traru
            <a href="#"
            className="subir"
            style={style}>Ir arriba</a>
        </footer>);
}

export default Footer ;