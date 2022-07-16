import { Link } from 'react-router-dom'
import { BsSearch as Search } from 'react-icons/bs';
import styled from 'styled-components';

const Logo = styled.div`
  border-radius: 30px;
  font-size: 30px;
  letter-spacing: 4px;
  line-height: 75px;
  background: #d979b6;
  color: #F8EAE9;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  text-align: center;
  float: left;
`
const Container = styled.div`
  text-align: center;
  border-radius: 30px;
  line-height: 46px;
  list-style: none;
  background-color: #333;
  width: 100%;
  margin-bottom: 20px;
  transition: all 300ms;
`
const Wrapper = styled.li`
  border-radius: 20px;
  height: 46px;
  display: inline-block;
  &:hover{ background-color: #d979b6; }
`
const SearchContainer = styled.li`
  border-radius: 20px;
  height: 46px;
  display: inline-block;
  position: relative;
`

const style = {
    textAlign: 'center',
    color: '#F8EAE9',
    textDecoration: 'none',
    paddingLeft: '50px',
    paddingRight: '50px',
  }

function Header () {
    return (
        <header>
          <Logo>
            <h1>Tomoyo no Showroom</h1>
          </Logo>
          <div className="clearfix"></div>
            <Container>
              <Wrapper><Link to ='/' style={style}>INICIO</Link></Wrapper>
              <Wrapper><Link to ='/tienda' style={style}>TIENDA</Link></Wrapper>
              <Wrapper><Link to ='/productos' style={style}>PRODUCTOS</Link></Wrapper>
              <SearchContainer>
                <input style={{ border: '3px solid white', borderRadius: '10px' }}/>
                <Search style={{ color: 'white', position: 'absolute', top: '1rem', marginLeft:'0.5rem' }} />
              </SearchContainer>
            </Container>
        </header>
    );
}

export default Header ;