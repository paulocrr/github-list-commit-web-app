import { Modal, Button, ListGroup } from "react-bootstrap";

function ShowMessageModal(props){
    return (
        <Modal
            show={props.showMessageModal}
            onHide={props.closeModal}
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Commit Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    <ListGroup.Item>Commit ID: {props.id}</ListGroup.Item>
                    <ListGroup.Item>Date: {props.date}</ListGroup.Item>
                    <ListGroup.Item><p>Message:</p> {props.message}</ListGroup.Item>
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModal}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
    
}

export default ShowMessageModal