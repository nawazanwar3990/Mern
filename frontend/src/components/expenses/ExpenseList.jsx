import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Card, Container } from 'react-bootstrap';
import {

  allExpenses,

} from "../../actions/expenseAction";



function ExpenseList() {

  const dispatch = useDispatch();
  const history = useHistory();

  const expenses = useSelector(state => state.expenses);


  useEffect(() => {
    dispatch(allExpenses());
  }, []);
  return (
    <Container className='my-4'>
      <Card >
        <Card.Header  className='d-flex justify-content-between align-items-center'>
          List of all Expenses
          <Button variant="info" onClick={() => history.push('/expense/create')}>
            Create
          </Button>
          </Card.Header>
        <Card.Body>
         
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>value</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>

              {expenses && expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense._id}</td>
                  <td>{expense.name}</td>
                  <td>{expense.value}</td>
                  <td>action</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </Container>

  )
}
export default ExpenseList;