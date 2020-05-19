import React, { Component } from "react";
// import Form from "../NeedAssistance/Form";
import Button from "../Button/Button";
import { connect } from 'react-redux';
import "./NeedAssistance.css";
import history from "../../history";

class NeedAssistance extends Component {
  state = {
    formData: {
        fullname: "",
        emailaddress: "",
        query: "",
    },

    validSubmit: false,
}

handlechangevalue = (e) => {
  const updatedvalue = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
  }
  // console.log(updatedvalue);
  this.setState({
      formData: updatedvalue
  })
}

  // this.handlechangevalue=this.handlechangevalue.bind(this);
  // this.handlesubmit=this.handlesubmit.bind(this);

  onSubmit = (e) => {
    e.preventDefault();
    this.props.submitData({ ...this.state.formData, key: this.props.keyValue });
    this.setState({
        validSubmit: true,
    })
  };


  handlechangevalue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      !this.state.validSubmit ?
      <div className="NeedAss">
      <h3>Need Assistance?</h3>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis
      </p>
      <p>
      For answers to other common questions, click here to go to our FAQ
      section.
      </p>
      <hr></hr>
      <p>
      Seeking Assistance for &nbsp;<span>‘{this.props.fundName}’</span>
        </p>
        <form onSubmit={this.onSubmit}>
        <label>Full Name<strong>*</strong></label>
          <input type="text" name="fullname" value={this.state.fullname} onChange={this.handlechangevalue} value={this.state.formData.fullnamename}/>

          <label>Email Address<strong>*</strong></label>
          <input type="email" name="emailaddress" value={this.state.emailaddress} onChange={this.handlechangevalue}
          />

          <label>Query<strong>*</strong></label>
          <textarea name="query" id="query" required cols="40" rows="10" placeholder="Please describe your query"
            value={this.state.query}
            onChange={this.handlechangevalue}
          />
          <Button type="submit">SEND</Button>
        </form>
        <p>Hit a snag?</p>
        <p>Contact us at 888-383-4483</p>
        <h3>{JSON.stringify(this.state.fields)}</h3>
      </div>
      :
      <div className="formSubmit">
      <div>
      <h2>Request Submitted</h2>
                    <div>
                        <div></div>
                    </div>
                    <p>You have successfully submmited your request for assistance.
                    We will get back to you within 2 - 3 business days.</p>
                    <Button invert onClick={() => history.push("/")}>DONE</Button>
                    <h3>Hit a snag?</h3>
                    <span>Contact us at 888-383-4483</span>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      fundName: state.fundName,
      keyValue: state.keyValue
  };
}
const mapDispatchToProps = dispatch => {
  return {
    // drawerHandler: () => dispatch({ type: 'Drawer' }),
      submitData: (addData) => dispatch({ type: 'Submit', addData: addData }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NeedAssistance);
