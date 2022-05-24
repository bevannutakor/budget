import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';
import uniqid from "uniqid";

import CreateBudgetModal from './Components/CreateBudgetModal';
import useLocalStorage from './Hooks/useLocalStorage';
import BudgetCard from './Components/BudgetCard';
import AddExpenseModal from './Components/AddExpenseModal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addExpenseModal, setAddExpenseModal] = useState(false);
  const [viewExpenseModal, setViewExpenseModal] = useState(false); 

  const [budgetArray, setBudgetArray] = useLocalStorage('budgets', []);
  const [expensesArray, setExpensesArray] = useState([])

  const [expense, setExpense] = useState({
    name: '',
    cost: '',
    id: uniqid()
  })
  const [budgets, setBudgets] = useState({
    name: '',
    amount: '',
    id: uniqid(),
    expenses: []
  });


  const handleChange = (e) => {
    setBudgets({
      ...budgets,
      [e.target.name]: e.target.value,
    })

    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    })
  }

  const handleBudgetSubmit = (e) => {
    e.preventDefault()
    setBudgetArray(prevArray => [...prevArray, budgets])
    setBudgets({name:'', amount:'', id:uniqid()})
  }

  const submitExpense = (e) => {
    e.preventDefault()
    setExpensesArray(prevArray => [...prevArray, expense])
    setExpense({name: '', cost:'', id:uniqid()})
  }

  useEffect(() => {
    console.log(expensesArray);
  })

  return(
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary" onClick={() => setIsOpen(true)}>Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>

      {isOpen && <CreateBudgetModal isOpen={isOpen} setIsOpen={setIsOpen} handleChange={handleChange} budgets={budgets} handleBudgetSubmit={handleBudgetSubmit}/>}

      {addExpenseModal && <AddExpenseModal expense={expense} addExpenseModal={addExpenseModal} setAddExpenseModal={setAddExpenseModal} submitExpense={submitExpense}/>}

      <BudgetCard budgetArray={budgetArray} setAddExpenseModal={setAddExpenseModal} setViewExpenseModal={setViewExpenseModal}/>
    </Container>
  )
}

export default App;
