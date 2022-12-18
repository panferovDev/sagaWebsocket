import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserCodeItem({ code }) {
  return (
    <ListGroup.Item>
      <Link to={`/code/${code.id}`}>
        {code.id}
      </Link>
    </ListGroup.Item>
  );
}

export default UserCodeItem;
