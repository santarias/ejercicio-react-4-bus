/* import { useContext } from "react";
import PropTypes from "prop-types"; // ES6
import FormularioParada from "./FormularioParada";
import FormularioTiempo from "./FormulaioTiempo";
import { Buscar, Paradas } from "./ParadasBuscar";


const Form = props => {
  const { paradas } = props;
  const lineas = paradas.map(parada => parada.line);
  console.log(lineas);
  const estacionLinea = paradas.map(estacion => estacion.destination);
  console.log(estacionLinea);
  return (
    <section className="forms">
      <FormularioParada />
      <FormularioTiempo />
    </section>
  );
};

export default Form; */

import { useContext } from "react";
import PropTypes from "prop-types"; // ES6
import FormularioParada from "./FormularioParada";
import FormularioTiempo from "./FormulaioTiempo";
import Parada from "./Paradas";
import { Buscar, Paradas } from "./ParadasBuscar";

const Form = () => {
  const { web } = useContext(Paradas);
  const { linea, setLinea } = useContext(Buscar);
  return (
    <section className="forms">
      <FormularioParada />
      {
        Parada(web, linea) && <FormularioTiempo />
      }

    </section>
  );
};
export default Form;
