import React from 'react'

const SearchBar = ({setSearchTerm}) => {
    const handleChange=(e)=>{
        setSearchTerm(e.target.value)
    }

  return (
    <input type='text' onChange={handleChange} placeholder='Search For restaurant ' />
  )
}

export default SearchBar;