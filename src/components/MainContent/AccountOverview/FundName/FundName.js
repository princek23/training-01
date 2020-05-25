
import React, {Component} from "react";
// import style from "styled-components";
import "./FundName.css"
import { connect } from 'react-redux';


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

      updateComponentValue=()=>{
        this.setState({
          isEditMode:false,
          value:this.refs.textInput.value
        })
      }
    
      renderEditView = () => {
        return <div className="tickmark">
         <input type="text" defaultValue={this.state.value}
         ref="textInput" />
         <img src="https://img.icons8.com/metro/20/000000/checked-2.png" alt="tick-mark" onClick={this.updateComponentValue}/>
        </div>
      };
      
      renderDefaultView = () => {
        return <span onDoubleClick={this.changeEditMode}>{this.state.value}</span>;
      };

      clickedOkHandler = () => {
        this.props.updateName();
        this.setState({
          isEditMode: !this.state.isEditMode
        });
    }

    clickHandler = () => {
      this.props.cancelChange();
      this.setState({
        isEditMode: !this.state.isEditMode
      });
  }
    render(){
        return(
            <div className="fundname">
            {this.state.isEditMode ?
              <> <input value={this.props.whileUpdating} onChange={this.props.changeName} />
              <img src="https://img.icons8.com/metro/20/000000/checked-2.png" alt="pencil-icon" onClick={this.clickedOkHandler}/></>
              : <span>{this.props.fundName}</span>
          }
          {this.state.isEditMode ? 
            null
              : <img src="https://img.icons8.com/pastel-glyph/20/000000/edit.png" alt="pencil-icon" onClick={this.clickHandler}/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
      fundName: state.fundName,
      whileUpdating: state.whileUpdating
  };
}

const mapDispatchToProps = dispatch => {
  return {
      changeName: (e) => dispatch({ type: 'Change-FundName', updatedName: e.target.value }),
      updateName: () => dispatch({ type: 'Update-FundName' }),
      cancelChange: () => dispatch({ type: 'Cancel-Change' })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(fundInfo);