import React from 'react';
import Wrapper from './componets/Wrapper'
import Header from './componets/Header'
import Table from './componets/Table';
import employees from './employees.json';

class App extends React.Component {
  state = {employees}

  filterEmployees = event => {
    const name = event.target.value;

    const filtered = this.state.employees.filter(emp => {
      
      let fullName = emp.name.split(" ");
      console.log(fullName[0])
      let firstName = fullName[0];
      //console.log(firstName)
      console.log(firstName.includes(name))
      
      if(firstName.includes(name)){
        return emp
      }

    });
    console.log(filtered);

    this.setState({employees: filtered});

    if(name === ""){
      this.setState({employees})
    }
  }

  render(){
  console.log(this.state.employees);

    return (
      <Wrapper>
        <Header  filter={this.filterEmployees} />
        <Table emps={this.state.employees}/>
      </Wrapper>
    );
  }
  


}

export default App;
