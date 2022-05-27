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
  const [testId, setTestId] = useState(''); 

  const [budgetArray, setBudgetArray] = useLocalStorage('budgets', []);
  const [expensesArray, setExpensesArray] = useState([])

  const [budgets, setBudgets] = useState({
    name: '',
    amount: 0,
    id: uniqid(),
    expenses: []
  });

  const [expense, setExpense] = useState({
    expense: '',
    cost: 0,
    id: uniqid() //needed for the view
  })

  const handleChange = (e) => {
    setBudgets({
      ...budgets,
      [e.target.name]: e.target.value,
    })

    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    })
  }

  const handleBudgetSubmit = (e) => {
    e.preventDefault()
    setBudgetArray(prevArray => [...prevArray, budgets])
    setBudgets({name:'', amount:'', id:uniqid()})
  }


  const submitExpense = () => {
    setExpensesArray(prevArray => [...prevArray, expense])
    //need to find a way to get the id of current budget that is being modified
    //Then add the expense to the expense object of the budget
    setBudgets(prevBudget => (prevBudget.expense.concat(expensesArray)))
    setExpense({name: '', cost:'', id:uniqid()})
  }

  const openExpenseModal = (id) => {
    setAddExpenseModal(true);
    setTestId(id);
    console.log(id);
  }

  useEffect(() => {
    console.log(testId);
  })

  return(
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary" onClick={() => setIsOpen(true)}>Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>

      {isOpen && <CreateBudgetModal isOpen={isOpen} setIsOpen={setIsOpen} handleChange={handleChange} budgets={budgets} handleBudgetSubmit={handleBudgetSubmit}/>}

      {addExpenseModal && <AddExpenseModal expense={expense} addExpenseModal={addExpenseModal} setAddExpenseModal={setAddExpenseModal} handleChange={handleChange} submitExpense={submitExpense} budgets={budgets}/>}

      <BudgetCard budgetArray={budgetArray} openExpenseModal={openExpenseModal}/>
    </Container>
  )
}

export default App;
