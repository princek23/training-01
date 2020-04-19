import React from 'react';
import Header from './components/Header/Header';
import AccountDetails from './components/MainContent/AccountDetails/AccountDetails';
import AccountOverview from "./components/MainContent/AccountOverview/AccountOverview";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <AccountOverview/>
      <AccountDetails />
    </React.Fragment>
  );
}

export default App;
