import PropTypes from "prop-types";

const NumeroDeParadas = props => {
  const { nparadas } = props;
  return (
    <h1>Parada nº {nparadas}</h1>
  );
};
NumeroDeParadas.propTypes = {
  nparadas: PropTypes.string.isRequired,
};
export default NumeroDeParadas;
