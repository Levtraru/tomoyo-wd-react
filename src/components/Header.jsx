import { Link } from 'react-router-dom'
import { BsSearch as Search } from 'react-icons/bs';
import styled from 'styled-components';

const H1 = styled.h1`
  border-radius: 0.6em;
  font-size: 2.8rem;
  letter-spacing: 0.1em;
  line-height: 1.5em;
  background: #d979b6;
  color: #F8EAE9;
  width: 100%;
  height: 1.7em;
  margin-bottom: 0.4em;
  text-align: center;
  float: left;
  text-decoration: none;
  @media only screen and (max-width:420px){
    font-size: 1.1rem;
    font-weight: 500;
  }
`
const Container = styled.div`
  text-align: center;
  border-radius: 1.5em;
  line-height: 3em;
  list-style: none;
  background-color: #333;
  width: 100%;
  margin-bottom: 2em;
  transition: all 300ms;
  @media only screen and (max-width:420px){
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`
const Wrapper = styled.li`
  border-radius: 1.8em;
  height: 3em;
  display: inline-block;
  &:hover{ background-color: #d979b6; }
  @media only screen and (max-width:420px){
    height: 2em;
  }
  
`
const SearchContainer = styled.li`
  display: inline-block;
  position: relative;
`
const SearchInput = styled.input`
  border: none;
  padding: 0.4em;
  border-radius: 0.9em;
`

function Header () {
    return (
        <header>
            <Link to ='/'><H1>Tomoyo no Showroom</H1></Link>
          <div className="clearfix"></div>
            <Container>
              <Wrapper><Link to ='/' className='links-header'>INICIO</Link></Wrapper>
              <Wrapper><Link to ='/tienda' className='links-header'>TIENDA</Link></Wrapper>
              <Wrapper><Link to ='/productos' className='links-header'>PRODUCTOS</Link></Wrapper>
              <SearchContainer>
                <SearchInput placeholder='Buscar' />
                <Search style={{ color: 'white', position: 'absolute', top: '1rem', marginLeft:'0.5rem' }} />
              </SearchContainer>
            </Container>
        </header>
    );
}

export default Header ;