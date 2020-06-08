import React, { useState, useEffect } from "react";

function Countrydetails(props) {
  console.log(props.countryInfos);

  return (
    <div>
      {props.countryInfos.name && (
        <>
          <img
            src={`https://www.countryflags.io/${props.countryInfos.cca2}/flat/64.png`}
            alt="flag"
          />
          <div>
            <h1>{props.countryInfos.name.common}</h1>
          </div>
          <div>
            <h2>Capital</h2>
            <p>{props.countryInfos.capital}</p>
          </div>
          <div>
            <h2>Area</h2>
            <p>{props.countryInfos.area} km<sup>2</sup></p>
          </div>
          <div>
            <h2>Borders</h2>
            <p>
              {props.other.map((i) =>
                i.map((i) => (
                  <ul>
                    <li> {i.name.common}</li>
                  </ul>
                ))
              )}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Countrydetails;
