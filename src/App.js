import React, { Component } from 'react'
import Title from './components/Title'
import SearchPanel from './components/SearchPanel'
import List from './components/List'
import API from './utils/API'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      search: '',
      results: [],
      all: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  componentDidMount () {
    this.getEmployeeList()
  }

  getEmployeeList () {
    API.getEmps()
      .then(res => {
        let newRes = res.data.results.map((employee, index) => {
          return {
            picture: employee.picture.thumbnail,
            name: employee.name.first + ' ' + employee.name.last,
            phone: employee.phone,
            email: employee.email,
            dob: employee.dob.date.substring(0, 10),
            id: index
          }
        })
        this.setState({ results: newRes, all: newRes })
      })
      .catch(err => console.log(err))
  }

  handleInputChange (event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      results: this.state.all.filter(employee =>
        employee.name.toLowerCase().includes(value.toLowerCase())
      ),
      [name]: value
    })
  }

  render () {
    return (
      <div>
        <Title />
        <SearchPanel
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <List results={this.state.results} />
      </div>
    )
  }
}

export default App
