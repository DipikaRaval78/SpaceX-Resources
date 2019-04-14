import React, { Component, Fragment } from 'react';
import '../App.css';
import API from '../api/api';
import { Card ,Col } from 'react-bootstrap';

const ListOfMissions = ({data}) => {
    let listOfMissions = data.map((item) => {
        console.log(item)
        return(
            <Col key={item.mission_id} className='mb-3'>
                <Card>
                    <Card.Header>
                        <b>Mission Name :</b> {item.mission_name}
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    return(
        <Fragment>
            {listOfMissions}
        </Fragment>
    )
}

class Missions extends Component {
    state={
        missions: []
    }

    componentDidMount(){
        API.get('missions')
        .then(response => {
            console.log(response.data)
            this.setState({
                missions: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <Fragment>
                <h3 className='m-2 text-center'>List of Missions</h3>
                <ListOfMissions data={this.state.missions} />
            </Fragment>
        )
    }
}

export default Missions;