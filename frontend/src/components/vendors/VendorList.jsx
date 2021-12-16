import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Card, Container } from 'react-bootstrap';

import {
    allVendor,

} from "../../actions/vendorAction";


function VendorList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const vendors = useSelector(state => state.vendors);
    useEffect(() => {
        dispatch(allVendor());
    }, []);
    return (

        <Container className='my-4'>
            <Card >
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    List of all Vendor  <Button variant="info" onClick={() => history.push('/vendor/create')}>
                        Create
                    </Button>
                </Card.Header>
                <Card.Body>

                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>firstname</th>
                                <th>lastname</th>
                                <th>description</th>
                                <th>country</th>
                                <th>state</th>
                                <th>city</th>
                                <th>cell_phone_1</th>
                                <th>cell_phone_2</th>
                                <th>cell_phone_3</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendors && vendors.map((vendor, index) => (
                                <tr key={index}>
                                    <td>{vendor._id}</td>
                                    <td>{vendor.firstname}</td>
                                    <td>{vendor.lastname}</td>
                                    <td>{vendor.description}</td>
                                    <td>{vendor.country}</td>
                                    <td>{vendor.state}</td>
                                    <td>{vendor.city}</td>
                                    <td>{vendor.cell_phone_1}</td>
                                    <td>{vendor.cell_phone_2}</td>
                                    <td>{vendor.cell_phone_3}</td>
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
export default VendorList;