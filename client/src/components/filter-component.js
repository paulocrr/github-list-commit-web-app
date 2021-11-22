import { Col, Form, Row, Button } from "react-bootstrap";

function FilterComponent(props){
    return (
        <Row>
            <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>Search</Form.Label>
                <Form.Control
                    autoFocus={true}
                    className="mb-2"
                    type="text"
                    placeholder="Filter By Sha"
                    value={props.filterText}
                    onChange={props.onFilter}
                />
            </Col>
            <Col xs="auto">
                <Button variant="primary" onClick={props.onClear}>Clear</Button>
            </Col>
        </Row>
    );
}

export default FilterComponent;