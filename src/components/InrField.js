import React, { Component } from 'react';
import '../App.css';
import { InputGroup, FormControl } from 'react-bootstrap';

class InrField extends Component {
    render() {
        return(
            <InputGroup className='mb-3'>
                <InputGroup.Prepend>
                    <InputGroup.Text>&#8377;</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder='0.00'
                    type='number'
                    name='inr' 
                    value={this.props.inrVal} 
                    onChange={this.props.handleInputChange}
                />
            </InputGroup>
        )
    }
}

export default InrField;