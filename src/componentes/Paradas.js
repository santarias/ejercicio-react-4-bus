const Parada = (web, linea) => {

  if (linea) {
    return web.find(webAPI => webAPI.stop === linea);
  };
};
export default Parada;
