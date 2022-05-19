import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';

import uniqid from "uniqid";
import CreateBudgetModal from './Components/CreateBudgetModal';

const App = () => {

  const [isOpen, setIsOpen] = useState(false); 
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);
  

  const addBudget = (e) => {
    
  }
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
      {isOpen && <CreateBudgetModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </Container>
  )
}

export default App;
