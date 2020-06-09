function oneCountry(countries, id){
    return countries.filter(country=>{
      return country.cca3===id
    })
  }

  export default oneCountry;