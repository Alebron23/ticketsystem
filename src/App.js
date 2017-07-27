import React, { Component } from 'react';
import TicketInput from './components/TicketInput.js'

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>American Plant and Equipment Ticket System</h2>
        </div>

        <br />

        <TicketInput />
      </div>


    );
  }
}

export default App;





