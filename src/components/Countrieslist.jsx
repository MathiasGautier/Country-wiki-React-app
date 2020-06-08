import React, { useState, useEffect } from "react";
import axios from "axios";
import Countrydetails from "./Countrydetails";

function Countrieslist() {
  const [data, setData] = useState([]);
  const [infos, setInfos]=useState([]);
  const [otherCountries, setOther]= useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
      );
      setData(result.data);
    };
    fetchData();
  }, [setData]);

  let oneCountry=(countries, id)=>{
    return countries.filter(country=>{
      return country.cca3===id
    })
  }

  const handleClick=a=>e=>{
    setInfos(a)
    // setOther(infos.name && infos.borders.map(i=>
    //   oneCountry(data,i)
    //   ))
  }

  useEffect(()=>{
    if (infos.name){
      setOther(infos.name && infos.borders.map(i=>
        oneCountry(data,i)
        ))
    }
  },[data, infos.name, infos.borders])
  
  // console.log(
  //   infos.name &&
  //   infos.borders.map(i=>
  //     oneCountry(data,i)
  //     )
  // )

 

 

  // console.log("la", infos);

  return (
    <>
  <div className="countries" id="style-2">
{data.map((i)=>(
    <div key={i} className="flexFlags">
    <img src={`https://www.countryflags.io/${i.cca2}/flat/64.png`} alt="flag"/>
    <h2>{i.name.common}</h2>
    <button  onClick={handleClick(i)}>See more</button>
    </div>
))}

  </div>
  <Countrydetails countryInfos={infos} allCountries={data} other={otherCountries}/>
  </>
  )
}

export default Countrieslist;
