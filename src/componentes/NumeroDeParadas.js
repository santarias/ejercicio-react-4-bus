import { useContext } from "react";
import Parada from "./Paradas";
import { Buscar, Paradas } from "./ParadasBuscar";

const NumeroDeParadas = props => {
  const { web } = useContext(Paradas);
  const { linea, setLinea } = useContext(Buscar);
  return (
    <h1>{`${Parada(web, linea) ? "Parada nº " + linea : "No existe la parada " + linea}`}</h1>
  );
};
export default NumeroDeParadas;
