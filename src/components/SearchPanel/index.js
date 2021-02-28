import React from 'react'
import './style.css'

function SearchPanel (props) {
  return (
    <div className='row justify-content-center mb-4'id="search-panel-color">
      <div className='col-3 pt-3 pb-2'>
        <div className='input-group mb-3'>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name='search'
            type='text'
            className='form-control'
            aria-label='search field'
            placeholder='Search'
            id='search'
          />
        </div>
      </div>
    </div>
  )

}

export default SearchPanel
