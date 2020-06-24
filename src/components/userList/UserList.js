import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { profile } from "../../redux/actions/User";
import axios from "axios";
import "./UserList.css";

function UserList(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "https://reqres.in/api/users?page=2";
    axios.get(url).then((res) => {
      setUsers(res.data.data);
      console.log("res", res.data.data);
    });
  }, []);

  function profile(item) {
    console.log("item", item);
    props.profile(item.id);
    props.history.push("/userProfile");
  }

  return (
    <div>
      <h3 className="headerText">Users List</h3>
      <table id="customers">
        <tr>
          <th>Pic</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        {users.map((item, i) => {
          return (
            <tr onClick={() => profile(item)}>
              <img src={item.avatar} alt="" />
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    profile: (data) => dispatch(profile(data)),
  };
};

export default connect(null, mapDispatchToProps)(UserList);
