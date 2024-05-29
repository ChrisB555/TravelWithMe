import { useState, useEffect } from "react";

const useFetchDataFiltred = (urlFiltred, clicked,setClicked) => {

  const [dataFiltred, setDataFiltred] = useState(null);
  const [errorFiltred, setErrorFiltred] = useState(null);
  const [loadingFiltred, setLoadingFiltred] = useState(false);

  useEffect(() => {
   
    if (!urlFiltred || !clicked) return;
    setClicked(false);
    setErrorFiltred(errorFiltred);

    const fetchDataFiltred = async () => {
      setLoadingFiltred(true);
      try {
        const response = await fetch(urlFiltred);
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const dataFiltred = await response.json();
        setDataFiltred(dataFiltred);
      } catch (errorFiltred) {
        setErrorFiltred(errorFiltred);
      } finally {
        setLoadingFiltred(false);
      }
    };
    fetchDataFiltred();
   
  }, [urlFiltred, clicked]);
  return { dataFiltred, errorFiltred, loadingFiltred };
};

export default useFetchDataFiltred;