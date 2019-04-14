import React, { Component, Fragment } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import '../App.css';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return(
            <Fragment>
                <Container className='mt-3'>
                    <Row>
                        <Col sm={4} className='mb-3'>
                        <Link to="/launchpads">
                            <Card border="success" className='launchpadCard'>
                                <Card.Body>
                                <Card.Text className='text-center m-5 h2'>Launchpads</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                        </Col>
                        <Col sm={4} className='mb-3'>
                            <Link to="/missions">
                                <Card border="info" className='missionCard'>
                                    <Card.Body>
                                    <Card.Text className='text-center m-5 h2'>Missions</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col sm={4} className='mb-3'>
                            <Link to="/payloads">
                                <Card border="dark" className='payloadCard'>
                                    <Card.Body>
                                    <Card.Text className='text-center m-5 h2'>Payloads</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default LandingPage;