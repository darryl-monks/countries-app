import Head from 'next/head'
import getCountries from '../services/getCountries'
import Countries from '../components/Countries/Countries'

export default function Home({countries}) {
  return (
    <>
      <Head>
        <title>Where in the World?</title>
        <meta name="description" content="Where in the World?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Countries countries={countries} />
    </>
  )
}

export async function getStaticProps() {
  const countries = await getCountries()

  return {
    props: {
      countries
    }
  }
}
