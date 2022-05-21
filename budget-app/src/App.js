import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';

import uniqid from "uniqid";
import CreateBudgetModal from './Components/CreateBudgetModal';

const App = () => {

  const [isOpen, setIsOpen] = useState(false); 
  const [budgets, setBudgets] = useState({
    name: '',
    amount: '',
    id: uniqid()
  });
  const [budgetArray, setBudgetArray] = useState([]);
  const [expenses, setExpenses] = useState([]);


  const handleChange = (e) => {
    setBudgets({
      ...budgets,
      [e.target.name]: e.target.value,

    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setBudgetArray(prevArray => [...prevArray, budgets])
    setBudgets({name:'', amount:'', id:uniqid()})
  }

  //THIS IS WEIRD
  useEffect(() => {
    console.log(budgetArray);
  })
  
  //need to store attributes into localstorage instead of state array
  const useLocalStorage = (key, initialValue) => {
    return null;
  }

  return(
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary" onClick={() => setIsOpen(true)}>Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      {isOpen && <CreateBudgetModal isOpen={isOpen} setIsOpen={setIsOpen} handleChange={handleChange} budgets={budgets} handleSubmit={handleSubmit}/>}
    </Container>
  )
}

export default App;
