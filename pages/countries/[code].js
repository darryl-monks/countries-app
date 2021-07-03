import getCountries from '../../services/getCountries'
import getCountry from '../../services/getCountry'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../../components/Button/Button'

export default function Country({country, borderCountries}) {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages
  } = country

  return (
    <>
      <Head>
        <title>Where in the World? | {name}</title>
      </Head>

      <div className="c-country-flag">
        <Image src={flag} alt={name} width='300' height='200' layout='responsive' objectFit="cover" />
      </div>

      <div className="c-country-details">
        <h1>{name}</h1>
        
        <ul>
          <li><strong>Native Name:</strong> {nativeName}</li>
          <li><strong>Population:</strong> {population}</li>
          <li><strong>Region:</strong> {region}</li>
          <li><strong>Sub Region:</strong> {subregion}</li>
          <li><strong>Capital:</strong> {capital}</li>
        </ul>

        <ul>
          <li><strong>Top Level Domain:</strong> {topLevelDomain.map(domain => domain).join(', ')}</li>
          <li><strong>Currencies:</strong> {currencies.map(currency => currency.name).join(', ')}</li>
          <li><strong>Languages:</strong> {languages.map(language => language.name).join(', ')}</li>
        </ul>
      </div>

      {borderCountries.length > 0 &&
        <div className="c-country-borders">
          <h3>Border Countries</h3>
          {borderCountries.map(({name, alpha3Code}, id) => (
            <Button url={`/countries/${alpha3Code.toLowerCase()}`} key={id}>{name}</Button>
          ))}
        </div>
      }
    </>
  )
}

export async function getStaticPaths() {
  const countries = await getCountries()
  
  const paths = countries.map(({alpha3Code}) => ({
    params: { 
      code: alpha3Code.toLowerCase()
    }
  }))

  return { 
    paths, 
    fallback: false 
  }
}

export async function getStaticProps({params}) {
  const countries = await getCountries()
  const country = await getCountry(params.code)
  const borders = country.borders
  const borderCountries = countries.filter(country => borders.includes(country.alpha3Code))

  return { 
    props: { 
      country,
      borderCountries
    } 
  }
}
