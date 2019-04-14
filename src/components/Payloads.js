import React, { Component, Fragment } from 'react';
import '../App.css';
import API from '../api/api';
import { Card ,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListOfPayloads = ({data}) => {
    let listOfMissions = data.map((item) => {
        console.log(item)
        return(
            <Col key={item.payload_id} className='mb-3'>
                <Link to={'/payload/'+item.payload_id}>
                    <Card className='payload-card'>
                        <Card.Body>
                            <Card.Text className='payload-info-container'>
                                <span><b>Manufacturer : </b>{item.manufacturer}</span>
                                <span><b>Nationality : </b>{item.nationality}</span>
                                <span><b>Type : </b>{item.payload_type}</span>
                                <span><b>Orbit : </b>{item.orbit}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        )
    })
    return(
        <Fragment>
            {listOfMissions}
        </Fragment>
    )
}

class Payloads extends Component {
    state={
        payloads: []
    }

    componentDidMount(){
        API.get('payloads?limit=10')
        .then(response => {
            console.log(response.data)
            this.setState({
                payloads: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <Fragment>
                <h3 className='m-2 text-center'>List of Payloads</h3>
                <ListOfPayloads data={this.state.payloads} />
            </Fragment>
        )
    }
}

export default Payloads;