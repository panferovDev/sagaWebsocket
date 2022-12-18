import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function UsersList({ user }) {
  return (
    <ListGroup.Item>{user.name}</ListGroup.Item>
  );
}

export default UsersList;
