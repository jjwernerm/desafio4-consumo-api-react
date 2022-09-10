import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/168/800/400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Pronóstico para Chile </h3>
          <p>Infórmate del tiempo en tu ubicación a nivel nacional</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/377/800/400"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Puedes filtrar por ubicación</h3>
          <p>Escribe la ubicación que quieres ver e infórmate del pronóstico</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/871/800/400"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mira la temperatura</h3>
          <p>La columna Temperatura se ordena desde la más alta hasta la más baja</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;