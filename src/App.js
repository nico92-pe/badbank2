import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from './Components/navbar';
import Home from './Components/home';
import Login from './Components/login';
import AllData from './Components/alldata';
import CreateAccount from './Components/createaccount';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import UserContext from './Components/usercontext';

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}], activeUser: '0'}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/login/" element={<Login/>} />
            <Route path="/alldata/" element={<AllData/>} />
            <Route path="/createaccount/" element={<CreateAccount/>} />
            <Route path="/deposit/" element={<Deposit/>} />
            <Route path="/withdraw/" element={<Withdraw/>} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
