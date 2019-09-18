// import libraries
import * as React from 'react';

// third-party libraries

// styles

// components
import { Button, Col, Row, TextInput } from 'react-materialize';

// interfaces

// helper function

const AccountDetails = () => {
  return (
    <React.Fragment>
      <Row>
        <h4>Account Details</h4>
        <TextInput className="formInput" label="Display Name" />
        <TextInput className="formInput" label="Phone No" />
        <TextInput className="formInput" label="Address" />
        <TextInput className="formInput" email validate label="Email" />
      </Row>
      <Row>
        <Col s={4}><Button className="center">Update</Button></Col>
        <Col s={4}><Button className="center">Change Password</Button></Col>
      </Row>
    </React.Fragment>
  );
};

export default AccountDetails;
