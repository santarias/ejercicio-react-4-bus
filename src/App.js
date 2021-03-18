import Display from "./componentes/Display";
import { useState } from "react";
import NumeroDeParadas from "./componentes/NumeroDeParadas";
import parades from "./parades.json";
import Form from "./componentes/Form";
import { Paradas, Buscar } from "./componentes/ParadasBuscar";

function App() {
  const [web, setWeb] = useState(parades.data.ibus);
  const [linea, setLinea] = useState("");
  const [bus, setBus] = useState("");
  const [estacionBus, setEstacionBus] = useState("");
  const [paradaBuscada, setParadaBuscada] = useState();
  const [respuestaLinea, setRespuestaLinea] = useState("");
  return (
    <Paradas.Provider value={{ web }}>
      <Buscar.Provider value={{ linea, setLinea, bus, setBus, estacionBus, setEstacionBus }}>
        <div className="contenedor">
          <header className="cabecera">
            <NumeroDeParadas />
            <Display
              paradas={parades.data.ibus.filter(parada => parada.stop === paradaBuscada)}
            />
            {respuestaLinea && <h2>{respuestaLinea}</h2>}
          </header>
          <Form
            paradas={parades.data.ibus}
            paradaBusqueda={setParadaBuscada}
            respuestaLinea={setRespuestaLinea}
          />
        </div>
      </ Buscar.Provider>
    </ Paradas.Provider >
  );
};

export default App;
