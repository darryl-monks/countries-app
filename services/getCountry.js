export default async function getCountries(code) {
  const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
  const country = await response.json()
  
  return country
}
