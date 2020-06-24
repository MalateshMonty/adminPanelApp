import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import UserList from "./components/userList/UserList";
import UserProfile from "./components/userProfile/UserProfile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./components/sideBar/SideBar";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="bar">
          <div className="sideBar">
            <SideBar />
          </div>
          <div className="userPart">
            <div className="header">
              <Header />
            </div>
            <Route exact path="/" component={UserList} />
            <Route exact path="/userProfile" component={UserProfile} />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
