import React, { Component } from 'react'
import {Col,Row, Card, Button } from 'react-bootstrap'


export class AllData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }

    }


    render() {
        return (
            <>
                <Row xs={1} md={4} className="g-4">
                    {this.state.data.map((item, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.photo} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                       {item.instructions}
                                    </Card.Text>
                                </Card.Body>
                                <Button  onClick={()=>this.props.addtoFav(idx)}variant="primary">add</Button>

                            </Card>
                        </Col>
                    ))}
                </Row>

            </>
        )
    }
}

export default AllData
