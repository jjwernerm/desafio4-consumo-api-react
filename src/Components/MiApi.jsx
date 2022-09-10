import {
  Alert,
  Form,
  Table
} from 'react-bootstrap';
import { useState, useEffect } from "react";

const MyAPIs = () => {

  const [object, setObject] = useState([]);
  const [search, setSearch] = useState('');

  const getAPIs = async () => {
    const url = 'https://api.gael.cloud/general/public/clima';
    const get = await fetch(url);
    const climates = await get.json();
    setObject(climates)
  };

  useEffect(() => {
    getAPIs();
  }, []);  

  const searchEstacion = (e) => {
    setSearch(e.target.value);
  }

  const objectA = () => {

    object.sort(function(a, b) {
      return b.Temp - a.Temp;
    })

    if (search === "") {
      return object;
    }
    const filter = object.filter(climate => climate.Estacion === search);
    return filter;
  }

  const submitSearch = (e) => {
    e.preventDefault()
  }

  return (
    <>

    <Alert variant="success">
      <Alert.Heading>
        Filtra la ubicación que quieres ver
      </Alert.Heading>
      <p>
        Desbes escribir en el buscardor la ubicación y podrás acceder únicamente al pronóstico de ese sector, ejemplo: Antofagasta
      </p>
      <hr />
      <Form.Control
        value={search}
        onChange={searchEstacion}
        onSubmit={submitSearch}
        type="search"
        placeholder="Buscar Ubicación"
        className="me-2"
        aria-label="Search"
      />
    </Alert>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Código</th>
            <th>Ubicación</th>
            <th>Hora</th>
            <th>Temperatura</th>
            <th>Humedad</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {objectA().map((climate) => (  
            <tr key={climate.Codigo}>
            <td>{climate.Codigo}</td>
            <td>{climate.Estacion}</td>
            <td>{climate.HoraUpdate}</td>
            <td>{climate.Temp}°</td>
            <td>{climate.Humedad}%</td>
            <td>{climate.Estado}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </>    
  )
};

export default MyAPIs;