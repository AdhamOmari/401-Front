import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';

export class FlowerModel extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.handleClose} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Flawers </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        < Form onSubmit={this.props.handelUpdate}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>instructions</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.data.instructions} name='instructions' />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>photo</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.data.photo} name='photo'/>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>instructions</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.data.name} name='name' />

                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default withAuth0(FlowerModel)
