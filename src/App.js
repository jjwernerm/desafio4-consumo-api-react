import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from './Components/Navbar.jsx'
import Header from './Components/Header.jsx'
import MiApi from './Components/MiApi.jsx'
import Footer from './Components/Footer.jsx'
import logoClimate from './img/logoClimate.png'

function App() {
  return (
    <>
      
      <Container fluid>
        <Row>
          <Navbar
          logo={logoClimate} />
        </Row>
      </Container>

      <br />
      <Container fluid>
        <Row>
          <Header />
        </Row>
      </Container>
      
      <br />
      <Container>
        <Row>
          <MiApi />
        </Row>
      </Container>

      <br />
      <Container fluid>
        <Row>
          <Footer />
        </Row>
      </Container>      
      
    </>
  );
}

export default App;
