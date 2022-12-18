import React, { useState, useEffect } from 'react';
import {
  Row, Col, ListGroup, ProgressBar,
} from 'react-bootstrap';
import { getUserCodes } from '../api';
import UserCodeItem from './userCodeItem';

function UserCode() {
  const [userCode, setUserCode] = useState(null);

  useEffect(() => {
    getUserCodes()
      .then((res) => {
        setTimeout(() => {
          setUserCode(res.data);
        }, 500);
      });
  }, []);

  return (
    <Row className="mt-4">
      <Col>
        {!userCode
          ? <ProgressBar animated now={100} />
          : (
            <ListGroup>
              {userCode.map((el) => <UserCodeItem key={el.id} code={el} />)}
            </ListGroup>
          )}
      </Col>
    </Row>
  );
}

export default UserCode;
