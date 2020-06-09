import React, { useState, useEffect } from "react";
import axios from "axios";
import Countrydetails from "./Countrydetails";

function Countrieslist() {
  const [data, setData] = useState([]); //--> the array of countries obj
  const [infos, setInfos] = useState([]); //--> the country that has been clicked

//  FETCHING COUNTRIES DATA FROM A JSON FILE
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
      );
      setData(result.data);
    };
    fetchData();
  }, [setData]);


  const handleClick = (a) => (e) => { //--> setting the infos about the country that was clicked
    setInfos(a);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 primary">
          {data.map((i) => (
            <div key={i}>
              <img
                src={`https://www.countryflags.io/${i.cca2}/flat/64.png`}
                alt="flag"
              />
              <h2 onClick={handleClick(i)}>{i.name.common}</h2>
            </div>
          ))}
        </div>
{/* PASSING PROPS TO THE SECOND COMPONENT */}
        <Countrydetails countryInfos={infos} allCountries={data} />
      </div>
    </div>
  );
}

export default Countrieslist;
