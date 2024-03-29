import {Card, Button, Container, Row, Col, Stack, ProgressBar} from 'react-bootstrap'

const BudgetCard = (props) => {
    const {budgetArray, openExpenseModal, viewAllExpenses, deleteBudget} = props;

    return(
        <Container>
            <Row>
                {budgetArray.map((budgets) => {
                    return(
                        <Col sm={4} className="my-4">
                            <Card key={budgets.id}>
                                <Card.Body>
                                    <Stack direction="horizontal"  className="mb-4">
                                        <Card.Title className="me-auto">{budgets.name}</Card.Title>
                                        <Card.Subtitle>${parseFloat(budgets.expenseTotal)} / ${parseFloat(budgets.amount)}</Card.Subtitle>
                                    </Stack>
                                    <ProgressBar now={(budgets.expenseTotal/budgets.amount)*100}/>
                                </Card.Body>
                                <Card.Footer>
                                    <Stack direction="horizontal" gap="2" className="mt-3">
                                        <Button onClick={() => openExpenseModal(budgets.id)}>Add Expense</Button>

                                        <Button 
                                             variant="outline-primary"
                                            onClick={() => viewAllExpenses(budgets.id)}>
                                            View Expenses
                                        </Button>

                                        <Button 
                                            variant="outline-danger"
                                            onClick={() => deleteBudget(budgets.id)}
                                            >
                                            Delete Budget
                                        </Button>
                                    </Stack>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default BudgetCard;