import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function ShowMessageModal(props){
    return (
        <Modal
            show={props.showMessageModal}
            onHide={props.closeModal}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title>Commit Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>{props.message}</h5>
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