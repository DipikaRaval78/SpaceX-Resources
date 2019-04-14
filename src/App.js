import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import InrField from './components/InrField';
import UsdField from './components/UsdField';
import RateField from './components/RateField';
import Header from './components/Header'

class App extends Component {

  state = {
    inr : 0,
    usd : 0,
    rate : 69.17,
  }

  handleInputChange = (e) => {
    e.preventDefault();

    switch(e.target.name){
      case 'inr': {
        this.setState({
          inr: e.target.value,
          usd: (e.target.value / this.state.rate).toFixed(2)
        })
        break;
      }
      case 'usd': {
        this.setState({
          usd: e.target.value,
          inr: (e.target.value * this.state.rate).toFixed(2)
        })
        break;
      }
      case 'rate': {
        this.setState({
          rate: e.target.value
        })
        break;
      }
      default: {
        return null
      }
    }

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col sm={4}>
              <InrField 
                handleInputChange={this.handleInputChange} 
                inrVal={this.state.inr} 
              />
            </Col>
            <Col sm={4}>
              <RateField 
                handleInputChange={this.handleInputChange} 
                rate={this.state.rate} 
              />
            </Col>
            <Col sm={4}>
              <UsdField 
                handleInputChange={this.handleInputChange} 
                usdVal={this.state.usd} 
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
