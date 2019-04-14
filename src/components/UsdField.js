import React, { Component } from 'react';
import '../App.css';
import { InputGroup, FormControl } from 'react-bootstrap';

class UsdField extends Component {
    render() {
        return(
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                    placeholder='0.00'
                    type='number'
                    name='usd' 
                    value={this.props.usdVal} 
                    onChange={this.props.handleInputChange}
                />
            </InputGroup>            
        )
    }
}

export default UsdField;