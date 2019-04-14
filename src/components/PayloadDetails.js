import React, { Component, Fragment } from 'react';
import '../App.css';
import API from '../api/api';
import { Container, Jumbotron } from 'react-bootstrap';

const CustomerList = ({customers}) => {
    let customersList;
    if(customers){
        customersList = customers.map((item, index) => {
            return(
                <span key={index}>{item}</span>
            )
        })
    }

    return(
        <Fragment>
            {customersList}
        </Fragment>
    )
}

const PayloadInfo = ({data}) => {
    return(
        <Container>
            <Jumbotron className='payload-details-container'>
                <div>
                    <span><b>Payload Id : </b> {data.payload_id}</span>
                </div>
                <div>
                    <span><b>Customers : </b> <CustomerList customers={data.customers}/></span>
                </div>
                <div>
                    <span><b>Manufacturer : </b> {data.manufacturer}</span>
                </div>
                <div>
                    <span><b>Nationality : </b> {data.nationality}</span>
                </div>
                <div>
                    <span><b>Orbit : </b> {data.orbit}</span>
                </div>
                <div>
                    <span><b>Payload Type : </b> {data.payload_type}</span>
                </div>
            </Jumbotron>
        </Container>
    )
}

class PayloadDetails extends Component{
    state={
        payloadDetails: {}
    }

    componentDidMount(){
        API.get('payloads/'+this.props.match.params.id)
        .then(response => {
            console.log(response.data)
            this.setState({
                payloadDetails: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        console.log(this.props)
        return(
            <Fragment>
                <h3 className='m-2 text-center'>Payload Details</h3>
                <PayloadInfo data={this.state.payloadDetails} />
            </Fragment>
        )
    }
}

export default PayloadDetails;