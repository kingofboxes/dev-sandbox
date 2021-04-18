import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

function Home() {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [content, setContent] = useState('Loading...');

  // Sign out using backend.
  const signOut = async () => {
    const res = await fetch('http://localhost:21587/logout', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    res.ok ? history.push('/login') : setError(!res.ok);
  };

  // Fetch data on load.
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:21587/', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      setError(!res.ok);
      const obj = await res.json();
      setContent(obj.msg);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>{content}</h3>
      <br />
      <div className="buttons-form">
        {error && (
          <>
            <Button variant="primary" onClick={() => history.push('/login')}>
              Sign In
            </Button>
            <Button
              variant="secondary"
              style={{ 'margin-left': '10px' }}
              onClick={() => history.push('/register')}
            >
              Register
            </Button>
          </>
        )}
        {!error && (
          <Button variant="primary" onClick={signOut}>
            Log Out
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
