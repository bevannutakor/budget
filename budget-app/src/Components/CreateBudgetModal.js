import {Form, Button, Modal} from 'react-bootstrap';


const CreateBudgetModal = (props) => {
    const {isOpen, setIsOpen, budgetOnChange, budgetOnSubmit} = props;
    return(
        <>
            <Modal show={isOpen} onHide={() => setIsOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control  type="text" placeholder="Enter Budget Name"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" placeholder="Enter Amount"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary" onClick={() => setIsOpen(false)}>
                        Add Budget
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateBudgetModal;