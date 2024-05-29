import CityRegionsPage from "./CitiesRegionsPage";
import useFetchDataFiltred from "../../../hooks/useFetchDataFiltred";
import { useParams } from "react-router-dom";

function CitiesRegions  (){
   
   const p = useParams();
   console.log(p); 
   
   const isCity =true;
   /* const urlFiltred = selectedCountry && dataCity  ?
             `http://localhost:3001/${isCity?"cities":"regions"}?country=${selectedCountry}`
            : null;

        
    //dataCity? filtred():console.log("nu avem date");
//console.log(urlFiltred)
    const { dataFiltred, errorFiltred, loadingFiltred } = useFetchDataFiltred(urlFiltred, clicked, setClicked);
   */
       return(
           <>
         
           </>
       )
   };
   
   export default CitiesRegions;