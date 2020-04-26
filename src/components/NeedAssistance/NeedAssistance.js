import React, { Component } from "react";
import Form from "../NeedAssistance/Form";
import "./NeedAssistance.css"

class NeedAssistance extends Component {

    state={
        fields:{}
    }

    onSubmit=(fields)=>{
        this.setState({fields:fields})
    }
  render() {
    return (
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
          Seeking Assistance for <span>‘The Church Fund’</span>
        </p>
        <Form onSubmit={this.onSubmit}/>
        <p>Hit a snag?</p>
        <p>Contact us at 888-383-4483</p>
        <h3>{JSON.stringify(this.state.fields)}</h3>
      </div>
    );
  }
}

export default NeedAssistance;
