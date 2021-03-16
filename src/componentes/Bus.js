import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import NumeroDeParadas from "./NumeroDeParadas";

const Bus = props => {
  const { paradas } = props;

  const [algo, setAlgo] = useState("0px");

  useEffect(() => {
    let valueTop = 0;
    let counter = 0;
    const interval = setInterval(() => {
      valueTop = valueTop - 30;
      counter++;
      setAlgo(`${valueTop}px`);
      if (counter === paradas.length) {
        valueTop = 0;
        counter = 0;
        setAlgo("0px");
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [paradas.length]);

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
