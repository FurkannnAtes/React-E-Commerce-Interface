import React from 'react'

function SearchBar({ searchProductProp }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className='w-100 pt-4' >
      <form action="" className='d-flex  ' onSubmit={handleFormSubmit}>
        <input type="text" onChange={searchProductProp} className='w-75   mx-auto me-0   ' placeholder='Look to explore' style={{ height: "50px" }} />
        <button className='btn btn-primary rounded-0 rounded-end shadow-none mx-auto ms-0 ' id="searchBtn" type='submit' style={{ height: "50px" }}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
