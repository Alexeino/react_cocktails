import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearch} = useGlobalContext()
  const searchValue = React.useRef("");
  const searchCocktail = ()=>{
    setSearch(searchValue.current.value);
  }
  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  return (
    <section className='section search'>
      <form className="search-form" onSubmit={(e)=>{e.preventDefault()}}>
        <div className="form-control">
          <label htmlFor="name">search your fav cocktail</label>
          <input type="text" name="" id="name" ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
