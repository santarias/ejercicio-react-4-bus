import PropTypes from "prop-types";

const Bus = props => {
  const { tiempoParada } = props;
  return (
    <h2>Tiempo para la línea 60: {tiempoParada}</h2>
  );
};
Bus.propTypes = {
  tiempoParada: PropTypes.string.isRequired,
};
export default Bus;
