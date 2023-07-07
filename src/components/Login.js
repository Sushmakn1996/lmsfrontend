import React, { useState } from "react";
import { Button, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import Home from "./Home";

function Login() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  let handleLogin = () => {
    setisLoggedIn(true);
  };
  if (isLoggedIn) {
    return <Home />;
  }
  return (
    <div>
      {/* <h2>Login</h2>
       <input type='text'>Employee ID</input>
       <input type='password' placeholder='Enter password'>Password</input>
       <button>LOGIN</button><button>CANCEL</button> */}

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control type="text" />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder=" Enter Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        <Button
          onClick={handleLogin}
          id="button"
          size="lg"
          variant="primary"
          className="p-0 bg-warning text-dark"
          type="submit"
        >
          LOGIN{" "}
          <Button
            style={{ marginLeft: "25px", width: "59%" }}
            variant="primary"
            className="bg-secondary text-white"
            type="submit"
          >
            CANCEL
          </Button>
        </Button>

        {/* <Button type="button"   >
      <Button value={"Login"} clasname={"p-0 bg-warning text-dark"} />
      <Button value={"Cancel"} clasname={"bg-secondary text-white"} />
    </Button> */}
      </Form>
    </div>
  );
}

export default Login;
