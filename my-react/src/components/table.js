import React from 'react'
import employees from './employeeData'

function searcher(search){
  return function (term){
    return term.firstname.toLowerCase().includes(search.toLowerCase()) ||
    term.lastname.toLowerCase().includes(search.toLowerCase()) ||
    term.career.toLowerCase().includes(search.toLowerCase()) ||!search
  }
}

class Employeetable extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      employees: employees,
      search: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    event.preventDefault();
    this.setState({search: event.target.value})
  }

  render(){
    const {search, employees} = this.state
    return(
        <div className= 'container'>
            <div className= 'row'>
                <div className= 'col mb-3'>
    <div className='input-group'>
    <input type="text" className="form-control" value={search} onChange={this.handleClick}
    placeholder="Enter Employee Information To Sort Table"></input>
    </div>
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Career</th>
    </tr>
  </thead>
      {employees.filter(searcher(this.state.search)).map(function (person){
        return (
          <tbody>
          <tr key={person.id}>
          <th scope='row'>{person.id}</th>
          <td>{person.firstname}</td>
          <td>{person.lastname}</td>
          <td>{person.career}</td>
          </tr>
      </tbody>
        )
      })}
</table>
                </div>
            </div>
        </div>
    )
}}

export default Employeetable