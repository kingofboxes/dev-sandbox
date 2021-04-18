import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Register() {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // POST to the backend to register the user.
  const registerUser = async () => {
    const res = await fetch('http://localhost:21587/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    res.ok ? history.push('/login') : setError(!res.ok);
  };

  return (
    <>
      <div className="login-form">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">User:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Pass:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputGroup>
        <div className="buttons-form">
          <Button variant="primary" onClick={registerUser}>
            Sign Up
          </Button>
          <Button variant="secondary" onClick={() => history.push('/login')}>
            Login
          </Button>
        </div>
        {error && <p style={{ color: 'red' }}> Username has been taken.</p>}
      </div>
    </>
  );
}

export default Register;
