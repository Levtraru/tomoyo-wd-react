import '../stylesheets/extras.css'
import styled from 'styled-components';

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
const Arriba = styled.span`
    cursor: url('https://i.postimg.cc/Ss4ccLkQ/Pointer.png'), auto;
    color: yellow;
    display: block;
    float: right;
    font-weight: bold;
`
function Footer () {

    return (
        <Container>
            <span>Tomoyo no Showroom by Lev'traru</span>
            <Arriba
            onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
              }}
            >Ir arriba</Arriba>
        </Container>);
}

export default Footer ;