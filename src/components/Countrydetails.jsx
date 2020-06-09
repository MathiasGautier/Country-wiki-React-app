import React, { useState, useEffect } from "react";
import oneCountry from "../utils/oneCountry";

const Countrydetails = (props) => {
  const [infos, setInfos] = useState([]);
  const [otherCountries, setOther] = useState([]);

  useEffect(() => {
    setInfos(props.countryInfos);
  }, [props.countryInfos]);
  useEffect(() => {
    if (infos.name) {
      setOther(
        infos.name &&
          infos.borders.map((i) => oneCountry(props.allCountries, i))
      );
    }
  }, [props.allCountries, infos.name, infos.borders]);

  const handleClick = (i) => (e) => {
    setInfos(i);
  };

  return (
    <div className="col-12 secondary">
      {infos.name && (
        <>
          <img
            src={`https://www.countryflags.io/${infos.cca2}/flat/64.png`}
            alt="flag"
          />

          <h2>{infos.name.common}</h2>

          <div className="box">
            <h2>Capital</h2>
            <p>{infos.capital}</p>
          </div>

          <div className="box">
            <h2>Area</h2>
            <p>
              {infos.area} km<sup>2</sup>
            </p>
          </div>

          <div>
            <h2>Borders</h2>
            {otherCountries.map((i) =>
              i.map((i) => <div onClick={handleClick(i)}> {i.name.common}</div>)
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Countrydetails;
