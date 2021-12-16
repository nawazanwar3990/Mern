
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Card, Container } from 'react-bootstrap';
import {

  allUser,

} from "../../actions/userAction";

function UserList() {

  const dispatch = useDispatch();
  const history = useHistory();

  const users = useSelector(state => state.users);
  console.log(users);

  useEffect(() => {
    dispatch(allUser());
  }, []);
  return (
    <Container className='my-4'>
      <Card >
        <Card.Header className='d-flex justify-content-between align-items-center'>
          List of all user<Button variant="info" onClick={() => history.push('/user/create')}>
            Create
          </Button>

        </Card.Header>
        <Card.Body>
         
          <Table striped bordered hover responsive >
            <thead>
              <tr>
                <th>#</th>
                <th>firstname</th>
                <th>lastname</th>
                <th>email</th>
                <th>password</th>
                <th>updatedAt</th>
                <th>createdAt</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user, index) => (
                <tr key={index}>
                  <td>{user._id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.updatedAt}</td>
                  <td>
                    <Link
                      to={"/user/" + user._id}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                  </td>
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

export default UserList;