import styles from './Search.module.scss'

export default function Search({query, setQuery, setRegion}) {
  return (
    <div className={styles['c-search']}>
      <div className={styles['c-search__input']}>
        <input type='search' value={query} placeholder="Search for a country..." onChange={(event) => { setQuery(event.target.value) }} />
      </div>

      <div className={styles['c-search__region']}>
        <label htmlFor='region-select'>Filter by Region:</label>
        <select name='region' id='region-select' onChange={event => {setRegion(event.target.value)}}>
          <option value='all'>All Regions</option>
          <option value='africa'>Africa</option>
          <option value='americas'>Americas</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
      </div>      
    </div>
  )
}
