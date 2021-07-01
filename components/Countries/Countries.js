import { useState } from 'react'
import Search from '../Search/Search'
import CountryList from '../CountriesList/CountriesList'

export default function Countries({countries}) {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('all')
  const filteredCountries = filterCountries()
  
  return (
    <>
      <Search 
        query={query}
        setQuery={setQuery}
        setRegion={setRegion}
      />
      <CountryList
        countries={filteredCountries}
      />
    </>
  )

  function filterCountries() {
    return countries.filter((country) => {      
      if (region === 'all' || country.region.toLowerCase() === region.toLowerCase()) {
        return country.name.toLowerCase().includes(query.toLowerCase())
      } else {
        return false
      }
    })
  }  
}
