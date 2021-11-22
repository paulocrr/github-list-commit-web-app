import { useEffect } from 'react';
import {Card, Col, Container, Nav, Navbar, Row, Table} from 'react-bootstrap';

import './App.css';

function App() {
  
  const getCommits = () => {
    fetch('/api/v1/commits')
    .then(data=>{
      console.log(data.json());
    })
    .catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    getCommits();
  });

  

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Commit list of </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="main-contianer">
        <Row className="justify-content-center">
          <Col lg={10}>
              <Card>
                <Card.Body>
                  <Card.Title className="main-title">Commit List</Card.Title>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default App;
