import { useEffect, useState } from "react";

const useApi = url => {
  const [web, setWeb] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(parades => {
        setWeb(parades.data.ibus);
      });
  }, [url]);
  return {
    web
  };
};
export default useApi;
