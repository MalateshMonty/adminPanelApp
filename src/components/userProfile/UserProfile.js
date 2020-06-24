import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./UserProfile.css";

function UserProfile(props) {
  const [userDetail, setUserDetail] = useState("");

  useEffect(() => {
    const url = `https://reqres.in/api/users/${props.user}`;
    axios.get(url).then((res) => {
      setUserDetail(res.data.data);
      console.log("res ------", res.data.data);
    });
  }, [props.user]);

  return (
    <div className="container">
      <form>
        <div>
          <img className="pic" src={userDetail.avatar} alt="" />
        </div>
        <label> Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder={userDetail.first_name}
        ></input>
        <label> Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder={userDetail.last_name}
        ></input>
        <label> Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={userDetail.email}
        ></input>
        <input type="submit" value="Submit"></input>
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
