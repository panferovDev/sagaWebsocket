import React, { useEffect, useState } from 'react';
import {
  Row, Col, Button, ListGroup,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCode } from '../api';
import UserCode from '../Code/userCode';
import UsersList from '../Users/UsersList';

function MainPage() {
  const [userCode, setUserCode] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const createCodeHandler = () => {
    createCode()
      .then((res) => navigate(`/code/${res.data.id}`));
  };

  if (!user.id) {
    return <h1>You not register yet</h1>;
  }
  return (
    <Row>
      <Col md={2} sx={12}>
        <h3>OnLine users:</h3>
        <ListGroup variant="flush">
          <UsersList />
        </ListGroup>
      </Col>
      <Col md={10} sx={12}>
        <h3>Yours code:</h3>
        <Button variant="outline-secondary" onClick={createCodeHandler}>Create new code block</Button>
        <UserCode />
      </Col>
    </Row>
  );
}

export default MainPage;
