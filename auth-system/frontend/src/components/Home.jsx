import Button from 'react-bootstrap/Button';

function Home() {
  const fetchData = async () => {
    const res = await fetch('http://localhost:21587/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log(res);
  };

  return (
    <>
      <h1>Hello world!</h1>
      <Button variant="secondary" onClick={fetchData}>
        Register
      </Button>
    </>
  );
}

export default Home;
