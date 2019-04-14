import React, { Component } from 'react';
import '../App.css';
import { InputGroup, FormControl } from 'react-bootstrap';

class RateField extends Component {
    render() {
        return(
            <InputGroup className="mb-3 rate-field">
                <InputGroup.Prepend>
                    <InputGroup.Text>Rate</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder='Rate'
                    type='number'
                    name='rate' 
                    value={this.props.rate} 
                    onChange={this.props.handleInputChange}
                />
            </InputGroup>
        )
    }
}

export default RateField;