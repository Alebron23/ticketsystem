import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Form, Col, Button } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import './TicketInput.css';

class TicketInput extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      ticketNumber      : 0,
      customerName      : '',
      companyName       : '',
      customerEmail     : [''],
      machineInquired   : '',
      machineRF         : '',
      machineDescription: '',
      inquiryComments   : '',
      amountBought      : 0,
      shippingNumber    : '',
      netBought         : 0,
      date              : new Date().toISOString()
    }

    this.incrementTicket        = this.incrementTicket.bind(this);
    this.handleAddCompany       = this.handleAddCompany.bind(this);
    this.handleAddEmailField    = this.handleAddEmailField.bind(this);
    this.handleDeleteEmailField = this.handleDeleteEmailField.bind(this);
    this.handleCustomerEmail    = this.handleCustomerEmail.bind(this);

  }

  incrementTicket() {
    this.setState({
      ticketNumber: this.state.ticketNumber + 1
    })
  }

  handleAddCompany(event) {
    
    console.log(this.state.companyName);

    this.setState({
      companyName: event.target.value
    })
    
  }

  handleAddEmailField() {
    var newArray = this.state.customerEmail;
    newArray.push('');
    console.log('yo');
    this.setState({
      customerEmail: newArray
    })
  }

  handleDeleteEmailField(event) {
    console.log(event.target.name);
    var newArray = this.state.customerEmail;
    newArray.splice(event.target.name, 1);

    this.setState({
      customerEmail: newArray
    })
  }

  handleCustomerEmail(event) {
    console.log(this.state.customerEmail);
    var newArray = this.state.customerEmail;
    newArray[event.target.name] = event.target.value;

    this.setState({
      customerEmail: newArray
    })
  }

  handleDate(value) {

    this.setState({
      date: value // ISO String, ex: "2016-11-19T12:00:00.000Z" 
    });
  }

  render() {
    return (
        <FormInstance handleCompanyName={this.handleCompanyName} handleCustomerEmail={this.handleCustomerEmail} handleAddEmail={this.handleAddEmailField} handleDeleteEmail={this.handleDeleteEmailField} {...this.state} increment={this.incrementTicket} />
    );
  }
}

const CustomButton = (props) => {
  return(

    <FormGroup>
      <Col  smOffset={2} sm={10}>

        <style type="text/css">{`
          .btn-custom {
            background-color: purple;
            color: white;
          }
        `}
        </style>

        <Button bsStyle="custom" onClick={props.increment}>Submit </Button>
      </Col>
    </FormGroup>
  )
    
}

//A method to return the correct number of email fields. 
var createEmailFields = (emails, handleCustomerEmail, handleDeleteEmail) => {
  var emailArray = [];
  var arrayLength = emails.length;
  console.log(arrayLength);

  for(var i = 0; i < arrayLength; i++){
    i === 0
    ? emailArray.push(<div> <FormControl type="email" placeholder="Enter Customer Email" 
                    className="email-input-field" name={i} onChange={handleCustomerEmail} value={emails[i]}/> </div>)
    
    : emailArray.push(<div> <Button className='btn-email-field' name={i} onClick={handleDeleteEmail}>-</Button> <FormControl type="email" placeholder="Enter Customer Email" 
                    className="email-input-field" name={i} onChange={handleCustomerEmail} value={emails[i]}/> </div>)
  }

  return emailArray;
}

const FormInstance = (props) => { 
    console.log(props);
  
    //a method to return the proper amount of email fields if the user wants more than 1.
    let emailFields = createEmailFields(props.customerEmail, props.handleCustomerEmail, props.handleDeleteEmail);

    return(

      <Form horizontal>

        <div className="container">

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Ticket Number: 
            </Col>

            <Col sm={4}>
              <h4>{props.ticketNumber}</h4>
            </Col>   
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Customer Name:
            </Col>

            <Col sm={4}>
              <FormControl type="text" placeholder="Enter Customer Name"/>
            </Col>
         </FormGroup>

         <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Company Name:
            </Col>

            <Col sm={4}>
              <FormControl type="text" placeholder="Enter Company Name" />
            </Col>
         </FormGroup>

         <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Email:
            </Col>
           
            <Col sm={4}>
              <Button className='btn-email-field' onClick={props.handleAddEmail}>+</Button>
              {  
                 emailFields.map((emails) => {
                  return(emails);
                })
              }
            </Col>
          </FormGroup>

         <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Machine Inquired About:
            </Col>

            <Col sm={5}>
              <FormControl type="text" placeholder="Enter Machine Inquired" />
            </Col>
         </FormGroup>

         <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Machine Reference Number:
            </Col>

            <Col sm={5}>
              <FormControl type="text" placeholder="Enter Machine Reference Number" />
            </Col>
         </FormGroup>

           <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Machine Description:
            </Col>
           
            <Col sm={6}>
              <FormControl componentClass="textarea" placeholder="Enter Machine Description" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Inquiry Comments:
            </Col>
           
            <Col sm={6}>
              <FormControl componentClass="textarea" placeholder="Enter Inquiry Comments" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Amount Bought:
            </Col>

            <Col sm={5}>
              <FormControl type="text" placeholder="Enter Amount Bought" />
            </Col>
         </FormGroup>

         <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Shipping Number:
            </Col>

            <Col sm={5}>
              <FormControl type="text" placeholder="Enter Shipping" />
            </Col>
        </FormGroup>

        <FormGroup> 
            <Col componentClass={ControlLabel} sm={2}>
              Net Bought:
            </Col>

            <Col sm={5}>
              <FormControl type="text" placeholder="Enter Net Bought" />
            </Col>
        </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Date:
            </Col>
           
            <Col sm={4}>
              <DatePicker className="example-datepicker" value={props.date} onChange={props.handleDate} />
            </Col>
          </FormGroup>

        </div>

        <CustomButton increment={props.increment} />
      </Form>
    )
  }



  export default TicketInput;




