import React from 'react';
import Wrapper from './componets/Wrapper'
import Header from './componets/Header'
import Table from './componets/Table';
import employees from './employees.json';

class App extends React.Component {
  state = {employees}
  render(){
  console.log(this.state.employees);

    return (
      <Wrapper>
        <Header />
        <Table emps={this.state.employees}/>
      </Wrapper>
    );
  }
  


}

export default App;
