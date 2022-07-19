import '../stylesheets/extras.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsCartFill as Cart } from 'react-icons/bs';

const Container = styled.div`
    color: white;
    font-weight: bold;
    position: fixed;
    margin-top: 2.5rem;
    margin-left: 1.5rem;
    padding: 0.8rem;
    top: 5%;
    height: auto;
    line-height: 30px;
    background-color: #d979b6;
    border-radius: 20px;
`

function Extras () {
    return (
        <Container>
            <p><Link to ='/chango'>
                    <Cart style={{fontSize: '20px', marginLeft: '2rem'}} className='linkextra'/>
                </Link>
            </p>
            <p><Link to='/registrarse' className='linkextra'>Registrarse</Link></p>
            <p><Link to='/login' className='linkextra'>Ingresar</Link></p>
        </Container>
    );
}

export default Extras ;