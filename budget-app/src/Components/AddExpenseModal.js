import {Form, Button, Modal} from 'react-bootstrap';

const AddExpenseModal = (props) => {
    const {addExpenseModal, setAddExpenseModal, handleChange, submitExpense,expense} = props;
    return(
        <>
            <Form autoComplete="off">
                <Modal show={addExpenseModal} onHide={() => setAddExpenseModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Expense</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Expense Name</Form.Label>
                            <Form.Control 
                                name="description" 
                                onChange={handleChange}
                                type="text"
                                value={expense.name}
                                autoComplete="false" 
                                placeholder="Describe Expense"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Cost</Form.Label>
                            <Form.Control
                                name="cost"
                                onChange={handleChange}
                                value={expense.cost}
                                type="number"
                                autoComplete="false" 
                                placeholder="Enter Cost"/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="primary" onClick={submitExpense}>
                            Add Expense
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Form>
        </>
    )
}

export default AddExpenseModal;