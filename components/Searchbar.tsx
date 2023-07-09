/*
  Component   : SearchBar
  Description : This is the SearchBar component.
  Params      : None
  Requires    : SearchManufacturer => Searchbar for manufracturer with autoComplete.
  Author      : Prince Dalsaniya
*/

'use client'

// Imports
import { useState } from "react"
import { SearchManufacturer } from "./"

const SearchBar = () => {
  const [manufracturer, setMenufracturer] = useState('');
  const handleSearch = () => {}

  return (
    <form 
      className="searchbar" 
      onSubmit={handleSearch}
    >
      <div className="searchbar__item">
        <SearchManufacturer 
          manufracturer={manufracturer}
          setManufracturer={setMenufracturer}
        />
      </div>
    </form>
  )
}

export default SearchBar
