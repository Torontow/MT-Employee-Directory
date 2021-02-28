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
      all: [],
      sortToggle: {
        "name": false,
        "phone": false,
        "email": false,
        "dob": false
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
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

  handleOnClick(dataKey) {
    const all = [...this.state.all]
    const sortToggle = {...this.state.sortToggle}
    sortToggle[dataKey] = !sortToggle[dataKey]
    all.sort((a,b) => {
      if(sortToggle[dataKey]) return(a[dataKey] > b[dataKey]) ? 1: -1;
      else return (a[dataKey] < b[dataKey]) ? 1 : -1;
    })
    const results = all.filter(employee => employee.name.toLowerCase().includes(this.state.search.toLowerCase()));
    this.setState({
      all,
      sortToggle,
      results
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
        <List 
        results={this.state.results} 
        handleOnClick={this.handleOnClick}
        sortToggle={this.state.toggle}
        />
      </div>
    )
  }
}

export default App
