import PropTypes from "prop-types";
import NumeroDeParadas from "./NumeroDeParadas";

const Bus = props => {
  return (
    <div className="bus">
      <span className="linea">V16</span>
      <span className="destino">Universitat</span>
      <span className="tiempo">10min</span>
    </div>
  );
};
Bus.propTypes = {
  transporte: PropTypes.string.isRequired,
};
export default Bus;
