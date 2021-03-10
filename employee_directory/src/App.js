import React, { useState } from 'react';
import Wrapper from './componets/Wrapper'
import Header from './componets/Header'
import employees from './employees.json';

function App() {
  const [employees, setEmployees] = useState({ employees });

  return (
    <Wrapper>
      <Header />
      {/* <EmployeeList employees={employees} setEmployees={setEmployees} /> */}
    </Wrapper>
  );


}

export default App;
