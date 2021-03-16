import { useContext } from "react";
import { Buscar, Paradas } from "./ParadasBuscar";

const FormularioTiempo = props => {
  const { linea, setLinea, bus, setBus } = useContext(Buscar);
  const { web } = useContext(Paradas);
  return (
    <form>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select id="tiempo-linea" onChange={({ target: { value } }) => setBus(value)}>
        <option>Elige línea</option>
        {
          web.filter(parada => parada.stop === linea).map(parades => (
            <option key={parades.routeId}>{parades.line}</option>
          ))
        }
      </select>
    </form >
  );
};
export default FormularioTiempo;
