import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';

class Header extends Component {
    render() {
        return(
            <Container fluid={true} className='header mb-3'>
                <Row>
                    <Col>
                    <h1>Currency Converter</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Header;