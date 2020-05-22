import React, { useEffect } from "react";
// import Header from "./components/Header/Header";
// import Routes from "./Routes";
import "antd/dist/antd.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./reset.css";
import {} from "redux";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Report from "./components/Report/Report";
import Home from "./components/HomePage/homepage";

function App(props) {
  useEffect(() => {
    props.getData();
  }, [props]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/report" exact component={Report} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>

    // <React.Fragment>
    //   <div>
    //   <h1>My name is {props.myname}</h1>
    //   <button onClick={()=>{props.changeName("xyz")}}>Change It</button>
    //   </div>
    // </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch({ type: "Get-Data" }),
  };
};
export default connect(null, mapDispatchToProps)(App);

// const mapStateToProps=(state)=>{
//   return {
//     myname:state.name,
//   }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return{
//     changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App);
