import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Form, Col, Button} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import TicketInput from './components/TicketInput.js'

 

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>American Plant and Equipment Ticket System</h2>
        </div>

        <TicketInput />
      </div>
    );
  }
}

export default App;





