import React, { Component } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import FlowerModel from './FlowerModel'
import FavFlowers from './FavFlowers'
import { withAuth0 } from '@auth0/auth0-react';

export class Favcards extends Component {
    render() {
        return (
            <>
                <Row xs={1} md={2} className="g-4">
                    {this.props.data.map((item, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.photo} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.instructions}
                                    </Card.Text>
                                </Card.Body>
                                <Button onClick={() => this.props.deleteFan(idx)} variant="primary">delete</Button>
                                <Button onClick={() => this.props.handelShow(idx)} variant="primary">upDate</Button>

                            </Card>
                        </Col>
                    ))}
                </Row>
                <FlowerModel
                    data={this.props.data}
                    deleteFan={this.props.deleteFan}
                    handelShow={this.props.handelShow}
                    handelClose={this.props.handelClose}
                    handelUpdate={this.props.handelUpdate}
                />
            </>
        )
    }
}

export default withAuth0 (Favcards)
