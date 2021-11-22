import { useEffect, useState } from 'react';
import {Card, Col, Container, Navbar, Row, Table} from 'react-bootstrap';

import './App.css';

function App() {

  let [commits,setCommits] = useState(0);
  const getCommits = () => {
    fetch('/api/v1/commits')
    .then(response=>{
      if(response.ok){
        return response.json();
      }
      throw response;
    })
    .then(data => {
      console.log(data);
      setCommits(data['data']);
    })
    .catch(error=>{
      console.error(error);
    })
  }

  useEffect(()=>{
    getCommits();
  },[]);

  

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Commit list of github-list-commit-web-app repo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                        <th>Identificator</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        commits.length>0 && commits.map(
                          (row,index)=>(
                            <tr key={index}>
                              <td>{index}</td>
                              <td>{row['sha']}</td>
                              <td>{row['date']}</td>
                              <td>{row['committer']['name']}</td>
                              <td>{row['committer']['email']}</td>
                              <td><a target="_blank" href={row['committer']['profile_url']} rel="noreferrer">{row['committer']['username']}</a></td>
                            </tr>
                          )
                        )
                      }

                      {
                        commits.length === 0 && 
                        <td colSpan="6">No hay Commits</td>
                      }
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
