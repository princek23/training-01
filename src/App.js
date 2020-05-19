import React from "react";
import Header from "./components/Header/Header";
import Routes from "./Routes";
import 'antd/dist/antd.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './reset.css';
import {} from 'redux';
import {connect} from 'react-redux';
import { BrowserRouter } from "react-router-dom";


function App(props) {
  console.log(props)
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      </BrowserRouter>
    
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
