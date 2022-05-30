import {Modal,Button, ListGroup} from 'react-bootstrap'

const ExpenseView = (props) => {
    const {budgetArray, viewExpenseModal, setViewExpenseModal, currentId, removeExpense} = props;

    return(
        <>
         <Modal show={viewExpenseModal} onHide={() => setViewExpenseModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Budget Expenses</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {budgetArray.map((budgets) => {
                    if(budgets.id === currentId){
                        return(
                            budgets.expensesArray.map((expense) => {
                            return(
                                <ListGroup>
                                    <ListGroup.Item key={expense.id}>      
                                        {expense.description}: ${expense.cost}

                                        <Button variant="danger" size="sm" className="float-end" onClick={() => removeExpense(expense.id)}>Remove</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            )
                        })
                    )
                    }
                })}
            </Modal.Body>
         </Modal>
        </>
    )
}

export default ExpenseView;