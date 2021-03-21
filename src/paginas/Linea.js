import { NavLink, useLocation } from "react-router-dom";

const Linea = (props) => {
  const location = useLocation();
  console.log(location.state.numeroBus);
  return (
    location &&
    <>
      <header className="cabecera">
        <h2>Bus {location.state.numeroBus} - {location.state.paradaBuena}</h2>
        <h3>Polígon Zona Franca -> Hospital Clínic</h3>
        <NavLink to="/parada" exact>
          Volver a la portada
        </NavLink>
      </header>
      <section>
        <ul className="grafico-paradas">
          <li className="parada">Parada nº X: Nombre parada (<a href="avion">ver mapa</a>)</li>
          <li className="parada">Parada nº 1741: Cotxeres TB Zona Franca (<a href="avion">ver mapa</a>)</li>
          <li className="parada">Parada nº 1045: Pg Zona Franca - Motors (<a href="avion">ver mapa</a>)</li>
          <li className="parada">Parada nº 1615: Carrer número 4 - Carrer D (<a href="avion">ver mapa</a>)</li>
          <li className="parada">Parada nº 1639: Carrer A- Comissaria Portuària (<a href="avion">ver mapa</a>)</li>
          <li className="parada">Parada nº 1643: Mercabarna - Mercat del Peix (<a href="avion">ver mapa</a>)</li>
        </ul>
      </section>
    </>
  );
};

export default Linea;
