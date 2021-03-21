import Display from "./componentes/Display";
import { useState } from "react";
import NumeroDeParadas from "./componentes/NumeroDeParadas";
import parades from "./parades.json";
import Form from "./componentes/Form";
import { Paradas, Buscar } from "./componentes/ParadasBuscar";
import Linea from "./paginas/Linea";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

function App() {
  const [web, setWeb] = useState(parades.data.ibus);
  const [linea, setLinea] = useState("");
  const [bus, setBus] = useState("");
  const [estacionBus, setEstacionBus] = useState("");
  const [paradaBuscada, setParadaBuscada] = useState();
  const [respuestaLinea, setRespuestaLinea] = useState("");
  return (
    <Router >
      <Route exact path="/">
        <Redirect to='/parada' />

      </Route>
      <Paradas.Provider value={{ web }}>
        <Buscar.Provider value={{ linea, setLinea, bus, setBus, estacionBus, setEstacionBus }}>
          <div className="contenedor">
            <Switch>
              <Route path="/parada" exact>
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
              </Route>
              <Route path="/linea" exact>
                <Linea />
              </Route>
            </Switch>
          </div>
        </ Buscar.Provider>
      </ Paradas.Provider >
    </Router>
  );
};

export default App;
