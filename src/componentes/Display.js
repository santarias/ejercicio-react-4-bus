import PropTypes from "prop-types";
import Bus from "./Bus";

const Display = props => {
  const { paradas } = props;

  return (
    <div className="display">
      <Bus
        paradas={paradas}>
      </Bus>
    </div>
  );
};
export default Display;
