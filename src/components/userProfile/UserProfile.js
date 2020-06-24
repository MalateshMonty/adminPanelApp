import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./UserProfile.css";

function UserProfile(props) {
  const [userDetail, setUserDetail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const url = `https://reqres.in/api/users/${props.user}`;
    axios.get(url).then((res) => {
      setUserDetail(res.data.data);
      setName(res.data.data.first_name);
      setLastName(res.data.data.last_name);
      setEmail(res.data.data.email);
      console.log("res ------", res.data.data);
    });
  }, [props.user]);

  const SubmitHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    console.log("Name:", name);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("sucess");

    // return null;
  };

  return (
    <div className="container">
      <h3 className="headerText">User Profile</h3>
      <form onSubmit={SubmitHandler}>
        <div>
          <img className="pic" src={userDetail.avatar} alt="" />
        </div>
        <label>Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <label> Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        ></input>
        <label> Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  console.log("sss", reduxState);
  return {
    user: reduxState.User.id,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
