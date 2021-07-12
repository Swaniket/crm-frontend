import React from 'react'
import { Form, Row, Col } from "react-bootstrap";

function SearchForm({handleOnChange, str}) {
    return (
        <Form>
            <Form.Group as ={Row}>
                {/* <Form.Label column sm="2">Search: </Form.Label> */}
                <Col ms="6">
                    <Form.Control
                        name="searchbar"
                        onChange = {handleOnChange}
                        value = {str}
                        placeholder="Search..."
                    />
                </Col>
            </Form.Group>
        </Form>
    )
}

export default SearchForm
