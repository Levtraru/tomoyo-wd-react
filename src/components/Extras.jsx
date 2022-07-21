import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsCartFill as Cart } from 'react-icons/bs';

const Container = styled.div`
    color: white;
    font-weight: bold;
    position: fixed;
    margin-left: 1.5em;
    padding: 0.8em;
    top: 9%;
    height: auto;
    line-height: 1.7em;
    background-color: #d979b6ba;
    border-radius: 1.2em;
    display: flex;
    flex-direction: column;
    span{
        font-size: 1.25em;
        margin-left: 2rem;
    }
    @media only screen and (max-width:420px){
        position: absolute;
        width: 50vw;
        top: 1.9%;
        margin-left: 1em;
        padding: 0.2em 0.2em 0 0.2em;
        flex-direction: row;
        justify-content: space-around;
        font-size: 0.8em;
        font-weight: 300;
        span{
            margin-left: 0;
        }
    }
`

function Extras () {
    return (
        <Container>
            <Link to ='/chango'>
                <span><Cart className='linkextra'/></span>
            </Link>
            <Link to='/registrarse' className='linkextra'>Registrarse</Link>
            <Link to='/login' className='linkextra'>Ingresar</Link>
        </Container>
    );
}

export default Extras ;