import React from 'react';
import Wrapper from './componets/Wrapper'
import Header from './componets/Header'
import Table from './componets/Table';
import employees from './employees.json';

class App extends React.Component {
  state = { employees }

  filterEmployees = event => {
    const name = event.target.value;

    const filtered = this.state.employees.filter(emp => {

      let fullName = emp.name.split(" ");
      console.log(fullName[0])
      let firstName = fullName[0];
      //console.log(firstName)
      console.log(firstName.includes(name))

      if (firstName.includes(name)) {
        return emp
      }

    });
    console.log(filtered);

    this.setState({ employees: filtered });

    if (name === "") {
      this.setState({ employees })
    }
  }

  sortEmployees = event => {
    console.log(event.target.innerHTML);

    const sortBy = "" + event.target.innerHTML;
    console.log(sortBy === 'Role');
    let sorted;

    switch (sortBy) {
      case 'Name':
        sorted = this.state.employees.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        this.setState({ employees: sorted })
        break;
      case 'Role':
        sorted = this.state.employees.sort((a, b) => {
          if (a.role < b.role) {
            return -1;
          }
          if (a.role > b.role) {
            return 1;
          }
          return 0;
        });
        this.setState({ employees: sorted })
        break;
      case 'Age':
        sorted = this.state.employees.sort((a, b) => {
          if (a.age < b.age) {
            return -1;
          }
          if (a.age > b.age) {
            return 1;
          }
          return 0;
        });
        this.setState({ employees: sorted })
        break;
    }
  }

  render() {
    console.log(this.state.employees);

    return (
      <Wrapper>
        <Header filter={this.filterEmployees} />
        <Table emps={this.state.employees} sort={this.sortEmployees} />
      </Wrapper>
    );
  }



}

export default App;
