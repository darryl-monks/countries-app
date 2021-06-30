import styles from './CountriesList.module.scss'
import CountryItem from '../CountryItem/CountryItem'

export default function CountriesList({countries}) {
  return (
    <div className={styles['c-countries-list']}>
      {
        countries.map(({flag, name, alpha3Code, population, region, capital}, id) => (
          <CountryItem
            key={id}
            flag={flag}
            name={name}
            code={alpha3Code.toLowerCase()}
            population={population}
            region={region}
            capital={capital}
          />
        ))
      }
    </div>
  )
}
