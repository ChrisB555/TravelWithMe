import { useState, useEffect } from "react";

const useFetchDataRegion = (urlRegion, clicked,setClicked) => {

  const [dataRegion, setDataRegion] = useState(null);
  const [errorRegion, setErrorRegion] = useState(null);
  const [loadingRegion, setLoadingRegion] = useState(false);

  useEffect(() => {
   
    if (!urlRegion || !clicked) return;
    setClicked(false);
    setErrorCity(errorRegion);

    const fetchDataRegion = async () => {
      setLoadingRegion(true);
      try {
        const response = await fetch(urlRegion);
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const dataRegion = await response.json();
        setDataRegion(dataRegion);
      } catch (errorRegion) {
        setErrorRegion(errorRegion);
      } finally {
        setLoadingRegion(false);
      }
    };
    fetchDataRegion();
   
  }, [urlRegion, clicked]);
  return { dataRegion, errorRegion, loadingRegion };
};

export default useFetchDataRegion;