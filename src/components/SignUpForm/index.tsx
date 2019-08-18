// import libraries
import * as React from 'react';

// third-party libraries

// styles
import './signUpForm.scss';

// components
import { Button, Col, Row, TextInput } from 'react-materialize';

const signUpForm = () => {

  return (
    <Row className="signUpForm">
      <Col s={6} >
        <TextInput className="formInput" label="Display Name" />
        <TextInput className="formInput" label="Phone No" />
        <TextInput className="formInput" label="Address" />
      </Col>
      <Col s={6} >
        <TextInput className="formInput" email validate label="Email" />
        <TextInput className="formInput" password label="Password" />
        <TextInput className="formInput" password label="Confirm Password" />
      </Col>
      <Col s={6}>
        <Button className="center">Sign Up</Button>
      </Col>
    </Row>
  );
};

export default signUpForm;
