import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';
import uniqid from "uniqid";

import CreateBudgetModal from './Components/CreateBudgetModal';
import useLocalStorage from './Hooks/useLocalStorage';
import BudgetCard from './Components/BudgetCard';
import AddExpenseModal from './Components/AddExpenseModal';
import ExpenseView from './Components/ExpenseView';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addExpenseModal, setAddExpenseModal] = useState(false);
  const [viewExpenseModal, setViewExpenseModal] = useState(false);
  const [currentId, setCurrentId] = useState(''); 
  const [budgetArray, setBudgetArray] = useLocalStorage('budgets', []);

  const [budgets, setBudgets] = useState({
    name: '',
    amount: 0,
    id: uniqid(),
    expensesArray: [],
    expenseTotal: 0
  });

  const [expense, setExpense] = useState({
    description: '',
    cost: 0,
    id: uniqid()
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
    setBudgetArray(prevBudgets => [...prevBudgets, budgets])
    setBudgets({name:'', amount:'', id:uniqid(), expensesArray: [], expenseTotal: 0})
    setExpense({description: '', cost:'', id:uniqid()});
  }

  const openExpenseModal = (id) => {
    setAddExpenseModal(true);
    setCurrentId(id);
  }

  const viewAllExpenses = (id) => {
    setViewExpenseModal(true);
    setCurrentId(id);
  }

  const submitExpense = (e) => {
    e.preventDefault()
    let updateBudgetList = budgetArray.map(budgets => {
      if(budgets.id === currentId){
        if(budgets.expenseTotal >= budgets.amount){
          alert("Expense exceeds budget");
          return budgets;
        } else {
            let currentExpenses = budgets.expensesArray
            let expenseTotal = budgets.expenseTotal
            return {...budgets, expensesArray: [...currentExpenses, expense], expenseTotal: Number(expenseTotal) + Number(expense.cost)};
        }
      } else {
        return budgets;
      }
    })

    setBudgetArray(updateBudgetList);
    setExpense({description: '', cost:'', id:uniqid()});
  }

  const deleteBudget = (id) => {
    setBudgetArray(prevArray => prevArray.filter(el => el.id !== id))
  }

  const removeExpense = (id) => {
    let currentBudget = budgetArray.find(budgets => budgets.id === currentId)
    let updateExpense = currentBudget.expensesArray.filter(el => el.id !== id)

    //to subtract amount from total
    let deleteExpense = currentBudget.expensesArray.filter(el => el.id === id) 
    
    let updateBudgets = budgetArray.map(budgets => {
      if(budgets.id === currentId){
        let expenseTotal = budgets.expenseTotal

        return {...budgets, expensesArray: updateExpense, expenseTotal: Number(expenseTotal) - Number(deleteExpense[0].cost)}
      } else{
        return budgets
      }
    })
    setBudgetArray(updateBudgets);
  }

  return(
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budget Manager</h1>
        <Button variant="primary" onClick={() => setIsOpen(true)}>Add New Budget</Button>
      </Stack>

      {isOpen && <CreateBudgetModal isOpen={isOpen} setIsOpen={setIsOpen} handleChange={handleChange} budgets={budgets} handleBudgetSubmit={handleBudgetSubmit}/>}

      {addExpenseModal && <AddExpenseModal expense={expense} addExpenseModal={addExpenseModal} setAddExpenseModal={setAddExpenseModal} handleChange={handleChange} submitExpense={submitExpense}/>}

      {viewExpenseModal && <ExpenseView budgetArray={budgetArray} viewExpenseModal={viewExpenseModal} setViewExpenseModal={setViewExpenseModal} currentId={currentId} removeExpense={removeExpense}/>}

      <BudgetCard budgetArray={budgetArray} openExpenseModal={openExpenseModal} viewAllExpenses={viewAllExpenses} deleteBudget={deleteBudget}/>
    </Container>
  )
}

export default App;
