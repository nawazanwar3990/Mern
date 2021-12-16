import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Card, Container } from 'react-bootstrap';

import {
  allIncomes,

} from "../../actions/incomeAction";

function IncomeList() {

  const dispatch = useDispatch();
  const history = useHistory();

  const incomes = useSelector(state => state.incomes);



  useEffect(() => {
    dispatch(allIncomes());
  }, []);

  return (

    <Container className='my-4'>
      <Card >
        <Card.Header  className='d-flex justify-content-between align-items-center'>
          List of all Incomes
          <Button variant="info" onClick={() => history.push('/income/create')}>
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

              {incomes && incomes.map((income, index) => (
                <tr key={index}>
                  <td>{income._id}</td>
                  <td>{income.name}</td>
                  <td>{income.value}</td>
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
export default IncomeList;