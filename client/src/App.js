import { useEffect, useMemo, useState } from 'react';
import {Card, Col, Container, Form, Navbar, Row, Button} from 'react-bootstrap';
import DataTable from 'react-data-table-component';

import './App.css';

function App() {

  let [commits,setCommits] = useState([]);
  const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = commits.filter(
		item => item.sha && item.sha.includes(filterText.toLowerCase()),
	);
  const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <Row>
      <Col xs="auto">
        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
          Search
        </Form.Label>
        <Form.Control
          autoFocus="true"
          className="mb-2"
          type="text"
          placeholder="Filter By Sha"
          value={filterText}
          onChange={onFilter}
        />
      </Col>
      <Col xs="auto">
        <Button variant="primary" onClick={onClear}>
          Clear
        </Button>
      </Col>
    </Row>
  );

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

  const columns = [
    {
      name: 'Identificator',
      selector: row=>row['sha']
    },
    {
      name: 'Date',
      selector: row=>row['date'],
      sortable: true,
    },
    {
      name: 'Name',
      selector: row=>row['name'],
      sortable: true,
    },
    {
      name: 'Email',
      selector: row=>row['email'],
      sortable: true,
    },
    {
      name: 'User',
      selector: row=>{
        return (<a target="_blank" href={row['profile_url']} rel="noreferrer">{row['username']}</a>);
      },
      sortable: true,
    },
  ]

 


  const getCommits = () => {
    fetch('/api/v1/commits')
    .then(response=>{
      if(response.ok){
        return response.json();
      }
      throw response;
    })
    .then(data => {
      
      commits = data['data'].map((commit) => {
        return {
          sha: commit['sha'],
          date: commit['date'],
          name: commit['committer']['name'],
          email: commit['committer']['email'],
          username: commit['committer']['username'],
          profile_url: commit['committer']['profile_url']
        }
      });
      setCommits(commits);
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
                  <DataTable
                      columns={columns}
                      data = {filteredItems}
                      pagination
                      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                      subHeader
                      subHeaderComponent={subHeaderComponentMemo}
                      persistTableHead
                  />
                  
                </Card.Body>
              </Card>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default App;
