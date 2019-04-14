import React, { Component, Fragment } from 'react';
import '../App.css';
import API from '../api/api';
import { Card ,Col, Badge, Dropdown } from 'react-bootstrap';

const ListOfLaunchpads = ({data, selectedFilter}) => {
    let filteredList;
    if(selectedFilter === 'all'){
        filteredList = data
    }else{
        filteredList = data.filter(item => {
            return item.status === selectedFilter
        })
    }
    let listOfLaunchpads = filteredList.map((item) => {
        return(
            <Col key={item.id} className='mb-3'>
                <Card>
                    <Card.Header>
                        <b>Location Name :</b> {item.location.name} &nbsp;
                        <b>Location Region :</b> {item.location.region} 
                        <br />
                        <span className='lat-long-container'>
                            <b>Lat :</b> {item.location.latitude} <b>Long :</b> {item.location.longitude}
                        </span>
                        <div className='status-container'>
                            <Badge variant="success" className={item.status.replace(/\s/g, '')}>{item.status}</Badge>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {item.details}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    return(
        <Fragment>
            {listOfLaunchpads}
        </Fragment>
    )
}

const StatusFilter = ({selectFilter, selectedFilter}) => {
    return(
        <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic" className='cap-text'>
                {selectedFilter}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item 
                    onClick={() => {selectFilter('all')}}>All
                </Dropdown.Item>
                <Dropdown.Item 
                    onClick={() => {selectFilter('active')}}>Active
                </Dropdown.Item>
                <Dropdown.Item 
                    onClick={() => {selectFilter('retired')}}>Retired
                </Dropdown.Item>
                <Dropdown.Item 
                    onClick={() => {selectFilter('under construction')}}>Under Construction
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

class Launchpads extends Component {
    state={
        launchpads: [],
        selectedFilter : 'all'
    }

    componentDidMount(){
        API.get('launchpads')
        .then(response => {
            console.log(response.data)
            this.setState({
                launchpads: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    selectFilter = (filter) => {
        console.log(filter)
        this.setState({
            selectedFilter : filter
        })
    }

    render() {
        return(
            <Fragment>
                <div className='launchpad-header'>
                    <StatusFilter selectFilter={this.selectFilter} selectedFilter={this.state.selectedFilter} />
                    <h3 className='m-2 text-center flex-auto'>List of Launchpads</h3>
                </div>
                <ListOfLaunchpads data={this.state.launchpads} selectedFilter={this.state.selectedFilter} />
            </Fragment>
        )
    }
}

export default Launchpads;