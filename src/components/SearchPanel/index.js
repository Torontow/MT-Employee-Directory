import React from 'react'
import './style.css'

function Search (props) {
  return (
    <div className='row justify-content-center mb-4'id="search-panel-color">
      <div className='col-3 pt-3 pb-2'>
        <div className='input-group mb-3'>
          <input
            onChange={props.handleInputChange}
            value={props.search}
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

  // return (
  //   <form>
  //     <div className="form-group">
  //       <label htmlFor="search">Search:</label>
  //       <input
  //         onChange={props.handleInputChange}
  //         value={props.search}
  //         name="search"
  //         type="text"
  //         className="form-control"
  //         placeholder="Search for a Gif"
  //         id="search"
  //       />
  //       <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
  //         Search
  //       </button>
  //     </div>
  //   </form>
  // );


}

export default Search
