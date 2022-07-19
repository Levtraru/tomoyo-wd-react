import '../stylesheets/extras.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    text-align: center;
    color: white;
    height: 47px;
    width: 65%;
    background-color: rgba(217, 121, 182, 0.70);
    margin: 0px auto;
    margin-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    line-height: 47px;
    border-radius: 20px;
`
const link = {
    cursor: "url('https://i.postimg.cc/kgVNCXTC/Cursor2.png'), pointer",
    color: 'yellow',
    display: 'block',
    float: 'right',
    textDecoration: 'none',
    fontWeight: 'bold',
}

function Footer () {
    return (
        <Container>
            <span>Tomoyo no Showroom by Lev'traru</span>
            <Link to='/' style={link}>Ir arriba</Link>
        </Container>);
}

export default Footer ;