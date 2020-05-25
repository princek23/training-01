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
import Report from "./components/Report/ReportPage";
import Home from "./components/HomePage/homepage";
import NeedAssistance from "./components/NeedAssistance/NeedAssistance";

function App(props) {
  useEffect(() => {
    props.getData();
  }, [props]);
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/report" exact component={Report} />
      <Route path="/NeedAssistance" exact component={NeedAssistance}/>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch({ type: "Get-ReportData" }),
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
