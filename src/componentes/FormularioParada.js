/* import { PropTypes } from "prop-types";
import { Paradas } from "./ParadasBuscar";


const FormularioParada = props => {
  const { paradas } = props;
  const busqueda = paradas.map(buscar => buscar.destination)
  const { busqueda, setBusqueda } = useState("");
  const modificacionDeBusqueda = e => {
    setBusqueda(e.target.value);
  };
  const cercarParadas = (e) => {
    e.preventDefault();
    setBusquedaParada(busqueda);
  };
  return (
    <form onSubmit={cercarParadas}>
      <label htmlFor="num-parada">{cercarParadas ? "Parada nº" : ""} </label>
      <input type="number" id="num-parada" onChange={modificacionDeBusqueda} />
      <button type="submit">Buscar</button>
    </form>
  );
};
export default FormularioParada; */

import { useContext, useState } from "react";
import { Buscar, Paradas } from "./ParadasBuscar";

const FormularioParada = (props) => {
  const { busqueda, setBusqueda, paradaBusqueda, respuestaLinea, infoParada } = props;
  const { setLinea, setEstacionBus } = useContext(Buscar);
  const { web } = useContext(Paradas);

  const modificacionDeParadas = (e) => {
    setBusqueda(e.target.value);
  };
  const cercarParadas = (e) => {
    e.preventDefault();
    setEstacionBus(infoParada.filter(parada => parada.properties.CODI_PARADA === e.target.value));
    paradaBusqueda(busqueda);
    setLinea(busqueda);
    respuestaLinea("");
  };
  return (
    <form onSubmit={cercarParadas}>
      <label htmlFor="num-parada">Parada nº: </label>
      <input type="number" id="num-parada" onChange={modificacionDeParadas} />
      <button type="submit">Buscar</button>
    </form>
  );
};
export default FormularioParada;
