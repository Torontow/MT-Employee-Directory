import React from 'react'
import './style.css'

function List () {
  return (
    <div class='container' id='list-wrapper'>
      <div class='row border-top border-black-25 border-2 py-1' id='list-head'>
        <div class='col-2'>Image</div>
        <div class='col-3'>Name</div>
        <div class='col-2'>Phone</div>
        <div class='col-4'>Email</div>
        <div class='col-1'>DOB</div>
      </div>
    </div>
  )
}

export default List