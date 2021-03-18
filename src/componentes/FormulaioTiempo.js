import { useContext } from "react";
import { Buscar, Paradas } from "./ParadasBuscar";

const FormularioTiempo = props => {
  const { respuestaLinea } = props;
  const { linea, setLinea, bus, setBus } = useContext(Buscar);
  const { web } = useContext(Paradas);
  const muestraLinea = (e) => {
    if (e.target.value !== "Elige línea") {
      respuestaLinea(e.target.value);
    } else {
      respuestaLinea("");
    }
  };
  return (
    <form>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select id="tiempo-linea" onChange={muestraLinea}>
        <option>Elige línea</option>
        {
          web.filter(parada => parada.stop === linea).map(parades => (
            <option
              key={parades.routeId}
              value={`Tiempo para la linea ${parades.line}: ${parades["text-ca"]}`}>
              {parades.line}
            </option>
          ))
        }
      </select>
    </form >
  );
};
export default FormularioTiempo;
