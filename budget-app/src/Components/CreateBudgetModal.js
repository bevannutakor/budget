import {Form, Button, Modal} from 'react-bootstrap';

const CreateBudgetModal = (props) => {
    const {isOpen, setIsOpen, budgets, handleChange, handleBudgetSubmit} = props;
    return(
        <>
            <Form autoComplete="off">
                <Modal show={isOpen} onHide={() => setIsOpen(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Budget</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                name="name" 
                                onChange={handleChange} 
                                value={budgets.name}  
                                type="text"
                                autoComplete="false" 
                                placeholder="Enter Budget Name"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                name="amount"
                                onChange={handleChange}
                                value={budgets.amount} 
                                type="number"
                                autoComplete="false" 
                                placeholder="Enter Amount"/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="primary" onClick={handleBudgetSubmit}>
                            Add Budget
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Form>
        </>
    )
}

export default CreateBudgetModal;