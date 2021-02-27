import React from 'react'
import './style.css'

function Search () {
  return (
    <div className='row justify-content-center mb-4' id='search-panel'>
      <div className='col-3 pt-3 pb-2'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            aria-label='search field'
            placeholder='Search'
          />
        </div>
      </div>
    </div>
  )
}

export default Search
