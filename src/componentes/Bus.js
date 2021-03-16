import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import NumeroDeParadas from "./NumeroDeParadas";

const Bus = props => {
  const { paradas } = props;

  const [algo, setAlgo] = useState("0px");
  let valueTop = 0;
  let counter = 0;

  const desplazarBus = () => {
    valueTop = valueTop - 30;
    counter++;
    setAlgo(`${valueTop}px`);
  };

  const resetBuses = () => {
    valueTop = 0;
    counter = 0;
    setAlgo("0px");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      desplazarBus();
      if (counter === paradas.length) {
        resetBuses();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    paradas.map((parada) =>
      <div
        key={parada.routeId}
        className="bus"
        style={{ top: algo }}
      >
        <span className="linea">{parada.line}</span>
        <span className="destino">{parada.destination}</span>
        <span className="tiempo">{parada["text-ca"]}</span>
      </div>
    )
  );
};

export default Bus;
