export default function Search({query, setQuery}) {
  return (
    <div className='c-search'>
      <input 
        className='c-search__input'
        type='search'
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
        }}
      />
    </div>
  )
}
