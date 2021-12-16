import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Card, Container } from 'react-bootstrap';

import {

  allPermission,

} from "../../actions/permissionAction";

function PermissionList() {

  const dispatch = useDispatch();
  const history = useHistory();
  const permissions = useSelector(state => state.permissions);


  useEffect(() => {
    dispatch(allPermission());
  }, []);
  return (
    <Container className='my-4'>
      <Card >
        <Card.Header className='d-flex justify-content-between align-items-center'>List of all permission
          <Button variant="info" onClick={() => history.push('/permission/create')}>
            Create
          </Button></Card.Header>
        <Card.Body>

          <Table striped bordered hover >
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {permissions && permissions.map((permission, index) => (
                <tr key={index}>
                  <td>{permission._id}</td>
                  <td>{permission.name}</td>
                  <td>{permission.description}</td>
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
export default PermissionList;