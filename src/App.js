import Display from "./componentes/Display";
import { useState } from "react";
import NumeroDeParadas from "./componentes/NumeroDeParadas";
import Bus from "./componentes/Bus";
import FormularioParada from "./componentes/FormularioParada";
import FormularioTiempo from "./componentes/FormulaioTiempo";

function App() {
  return (
    <div className="contenedor">
      <header className="cabecera">
        <NumeroDeParadas />
        <Display />
        <Bus />
      </header>
      <section className="forms">
        <FormularioParada />
        <FormularioTiempo />
      </section>
    </div>
  );
}

export default App;
