import getCountries from '../../services/getCountries'
import getCountry from '../../services/getCountry'
import Head from 'next/head'

export default function Country({country}) {
  const {name} = country

  return (
    <>
      <Head>
        <title>Where in the World? | {name}</title>
      </Head>
      <p>{name}</p>
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
  const country = await getCountry(params.code)
  
  return { 
    props: { 
      country
    } 
  }
}
