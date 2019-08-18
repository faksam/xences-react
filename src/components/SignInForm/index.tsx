// import libraries
import * as React from 'react';

// third-party libraries

// styles
import './SignInForm.scss';

// components
import { Button, Col, Row, TextInput } from 'react-materialize';

const SignInForm = () => (
  <Row className="sign-in-form">
    <Col s={6} >
      <TextInput className="formInput" email validate label="Email" />
      <TextInput className="formInput" password label="Password" />
      <Button className="">Sign In</Button>
    </Col>
  </Row>
);

export default SignInForm;
