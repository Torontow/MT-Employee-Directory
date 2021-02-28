import React from 'react'
import './style.css'

function List (props) {
  return (
    <div className='employee-table'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Image</th>
            <th scope='col' onClick={() => props.handleOnClick("name")} className="cursor">Name</th>
            <th scope='col' onClick={() => props.handleOnClick("email")} className="cursor">E-Mail</th>
            <th scope='col' onClick={() => props.handleOnClick("phone")} className="cursor">Phone</th>
            <th scope='col' onClick={() => props.handleOnClick("dob")} className="cursor">DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(employee => (
            <tr key={employee.id}>
            <td><img src={employee.picture} alt={employee.name}/></td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.dob}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}



export default List
