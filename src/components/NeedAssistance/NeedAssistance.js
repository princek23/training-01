import React, { Component } from "react";
import Form from "../NeedAssistance/Form";
import "./NeedAssistance.css";

class NeedAssistance extends Component {
  // constructor(props){
  //   super(props);
  //   // this.handleClickOutside=this.handleClickOutside.bind(this)
  // }

  state = {
    fields: {},
  };

  state = {
    value: "The Church Fund - A1050919",
    isEditMode: false,
  };

  changeEditMode = () => {
    // console.log("edit mode")
    this.setState({
      isEditMode: !this.state.isEditMode,
    });
  };

  onSubmit = (fields) => {
    this.setState({ fields: fields });
  };

  updateComponentValue=()=>{
    this.setState({
      isEditMode:false,
      value:this.refs.textInput.value
    })
  }

  renderEditView = () => {
    return <div>
     <input type="text" defaultValue={this.state.value}
     ref="textInput" />
    <button onClick={this.updateComponentValue}>OK</button>
    </div>
  };
  
  renderDefaultView = () => {
    return <span onDoubleClick={this.changeEditMode}>{this.state.value}</span>;
  };
  
  // handleClickOutside=(event)=>{
  //   if(window.contains(event.target))
  //   {
  //     alert("clicked outside");
  //   }
  // }
  
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
      Seeking Assistance for <br></br>
      {this.state.isEditMode
        ? this.renderEditView()
        : this.renderDefaultView()}
        <button onClick={this.changeEditMode}>Edit</button>        
        </p>
        <Form onSubmit={this.onSubmit} />
        <p>Hit a snag?</p>
        <p>Contact us at 888-383-4483</p>
        <h3>{JSON.stringify(this.state.fields)}</h3>
      </div>
    );
  }
}

export default NeedAssistance;
