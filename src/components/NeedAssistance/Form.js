import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      fullname: "",
      emailaddress: "",
      query: "",
    };
    this.state=this.initialState; 

    this.handlechangevalue=this.handlechangevalue.bind(this);
    this.handlesubmit=this.handlesubmit.bind(this);
  }

  //   handlename = (event) => {
  //     this.setState({ fullname: event.target.value });
  //     // console.log(event.target.value)
  //   };

  //   handleemail = (event) => {
  //     this.setState({ emailaddress: event.target.value });
  //   };

  //   handlequery = (event) => {
  //     this.setState({ query: event.target.value });
  //   };

  handlechangevalue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlesubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state)
    this.setState(this.initialState);
    // alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="formStyle">
        <form onSubmit={this.handlesubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            value={this.state.fullname}
            onChange={this.handlechangevalue}
          />

          <label>Email Address</label>
          <input
            type="email"
            name="emailaddress"
            value={this.state.emailaddress}
            onChange={this.handlechangevalue}
          />

          <label>Query</label>
          <textarea
            name="query"
            value={this.state.query}
            onChange={this.handlechangevalue}
          />
          <input type="submit" value="SEND" />
        </form>
      </div>
    );
  }
}

export default Form;
