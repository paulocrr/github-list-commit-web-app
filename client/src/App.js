import { useEffect, useMemo, useState } from 'react';
import {Card, Col, Container, Navbar, Row, Button} from 'react-bootstrap';
import DataTable from 'react-data-table-component';

import './App.css';
import ShowMessageModal from './componentes/show-message-modal';
import FilterComponent from './componentes/filter-component';

function App() {

  let [commits,setCommits] = useState([]);
  let [selectedCommitDetail,setSelectedCommitDetail] = useState({});
  let [showMessageModal, setShowMessageModal] = useState(false);
  const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = commits.filter(
		item => item.sha && item.sha.includes(filterText.toLowerCase()),
	);

  let openMessageModal = (sha,date,message) => {
    setSelectedCommitDetail({id: sha,date: date,message: message});
    setShowMessageModal(true);
  }

  const closeMessageModal = () => setShowMessageModal(false);

  

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

  let columns =  [
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
      {
        name: 'Options',
        selector: row=>{
          return (<Button onClick={()=>openMessageModal(row['sha'],row['date'],row['message'])} variant="primary">Show Message</Button>);
        },
      }
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
          profile_url: commit['committer']['profile_url'],
          message: commit['message']
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
  });

  

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
          <Col xs={12} sm={12} lg={10}>
              <Card>
                <Card.Body>
                  <Card.Title className="main-title">Commit List</Card.Title>
                  {
                    showMessageModal? 
                        <ShowMessageModal 
                          showMessageModal={openMessageModal} 
                          closeModal = {closeMessageModal} 
                          id = {selectedCommitDetail.id}
                          date = {selectedCommitDetail.date} 
                          message = {selectedCommitDetail.message} 
                        />
                    :
                        null
                  }
                  <DataTable
                      columns={columns}
                      data = {filteredItems}
                      pagination
                      paginationResetDefaultPage={resetPaginationToggle}
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
