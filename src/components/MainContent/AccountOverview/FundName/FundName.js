
import React, {Component} from "react";
// import style from "styled-components";
import "./FundName.css"

// const FundNameTag=style.section`
// padding-bottom: 40px;
// `;

// const FundName=style.p`
// color: #022737;
//     font-size: 16px;
//   font-weight: bold;
//   line-height: 1.5;
// `;

class fundInfo extends Component{
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
      
      handleClickOutside=(event)=>{
        if(window.contains(event.target))
        {
          alert("clicked outside");
        }
      }
    render(){
        return(
            <div className="fundname">
            {this.state.isEditMode
                ? this.renderEditView()
                : this.renderDefaultView()}
                <button onClick={this.changeEditMode}>Edit</button>    
            </div>
        )
    }
}

// const fundInfo=(props)=>{
//     return(
//     <FundNameTag>
//         <FundName>{props.data}</FundName>
//         <button>Edit</button>
//     </FundNameTag>
//     )
// }

export default fundInfo;