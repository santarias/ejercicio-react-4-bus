import { useContext } from "react";
import Parada from "./Paradas";
import { Buscar, Paradas } from "./ParadasBuscar";

const NumeroDeParadas = props => {
  const { infoParada, compruebaParada, busqueda } = props;
  const { web } = useContext(Paradas);
  const { linea, setLinea } = useContext(Buscar);
  return (
    <h1>{`${compruebaParada() ? "Parada nº " + busqueda : "No existe la parada " + busqueda}`}</h1>
  );
};
export default NumeroDeParadas;
