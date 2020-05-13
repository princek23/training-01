import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Routes from "./Routes";
import {} from 'redux';
import {connect} from 'react-redux';


function App(props) {
  console.log(props)
  return (
    <React.Fragment>
      <Header />
      <Routes />
    </React.Fragment>
    // <React.Fragment>
    //   <div>
    //   <h1>My name is {props.myname}</h1>
    //   <button onClick={()=>{props.changeName("xyz")}}>Change It</button>
    //   </div>
    // </React.Fragment>
  );
}

const mapStateToProps=(state)=>{
  return {
    myname:state.name,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
