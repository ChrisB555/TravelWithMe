import { useState, useEffect } from "react";

const useFetchDataCity = (urlCity, clicked,setClicked) => {

  const [dataCity, setDataCity] = useState(null);
  const [errorCity, setErrorCity] = useState(null);
  const [loadingCity, setLoadingCity] = useState(false);

  useEffect(() => {
   
    if (!urlCity || !clicked) return;
    setClicked(false);
    setErrorCity(errorCity);

    const fetchDataCity = async () => {
      setLoadingCity(true);
      try {
        const response = await fetch(urlCity);
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const dataCity = await response.json();
        setDataCity(dataCity);
      } catch (errorCity) {
        setErrorCity(errorCity);
      } finally {
        setLoadingCity(false);
      }
    };
    fetchDataCity();
   
  }, [urlCity, clicked]);
  return { dataCity, errorCity, loadingCity };
};

export default useFetchDataCity;