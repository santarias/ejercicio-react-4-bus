import PropTypes from "prop-types";
import Paradas from "./Paradas";

const FormularioParada = props => {
  const { busqueda, setBusqueda } = props => Paradas;
  const modificacionDeBusqueda = e => {
    setBusqueda(e.target.value);
  };
  const cercarParada = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={cercarParada}>
      <label htmlFor="num-parada">Parada nº: {busqueda}</label>
      <input type="number" id="num-parada" onChange={modificacionDeBusqueda} />
      <button type="submit">Buscar</button>
    </form>
  );
};
export default FormularioParada;
