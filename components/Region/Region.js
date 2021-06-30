export default function Region({setRegion}) {
  return(
    <div className='c-region'>
      <label htmlFor='region-select'>Filter by Region:</label>
      
      <select className='c-region__select' name='region' id='region-select' onChange={event => {setRegion(event.target.value)}}>
        <option value='all'>Filter By Region</option>
        <option value='africa'>Africa</option>
        <option value='americas'>Americas</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </div>
  )
}
