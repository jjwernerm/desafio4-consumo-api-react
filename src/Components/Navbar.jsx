import {
  Container,
  Navbar
} from 'react-bootstrap';

function BrandExample({logo}) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Info Clima
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;