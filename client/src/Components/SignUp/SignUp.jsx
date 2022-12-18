import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Col, Row, Form, Button,
} from 'react-bootstrap';
import { signUp } from '../../Redux/Slices/userSlice';

function SignUp() {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signUp(Object.fromEntries(new FormData(e.target))));
  };
  return (
    <Row>
      <Col md={{ offset: 3, span: 6 }} xs={12} className="mt-5">
        <h5>SignUp</h5>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default SignUp;
