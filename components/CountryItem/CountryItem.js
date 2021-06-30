import styles from './CountryItem.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function CountryItem({flag, name, code, population, region, capital}) {
  return (
    <article className={styles['c-country']}>
      <Link href={`/countries/${code}`}>
        <a>
        <div className={styles['c-country__flag']}>
          <Image src={flag} alt={name} width='300' height='200' layout='responsive' objectFit="cover" />
        </div>
        <div className={styles['c-country__details']}>
          <h3>{name}</h3>
          <ul>
            <li><strong>Population:</strong> {population}</li>
            <li><strong>Region:</strong> {region}</li>
            <li><strong>Capital:</strong> {capital}</li>
          </ul>
        </div>
        </a>
      </Link>
    </article>
  )
}
