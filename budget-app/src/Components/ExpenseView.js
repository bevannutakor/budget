import {Modal,Button, ListGroup} from 'react-bootstrap'

const ExpenseView = (props) => {
    const {budgetArray, viewExpenseModal, setViewExpenseModal, currentId} = props;

    return(
        <>
         <Modal show={viewExpenseModal} onHide={() => setViewExpenseModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Budget Expenses</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {budgetArray.map((budgets) => {
                    if(budgets.id == currentId){
                        return(
                            budgets.expensesArray.map((expense) => {
                            return(
                                <ListGroup>
                                    <ListGroup.Item key={expense.id}>               {expense.description} {expense.cost}
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