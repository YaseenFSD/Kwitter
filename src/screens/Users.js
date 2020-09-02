import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { MenuContainer } from "../components"

export const Users = () => {
  const photoUrl = "https://kwitter-api.herokuapp.com";

  const [usernames, setUsers] = useState([]);
  const [message, setMessage] = useState('')
  useEffect(() => {
    usersList();
  }, []);

  const usersList = async () => {
    const users = await api.getUsers();
    console.log(users.users);
    const usersArr = users.users;
    setUsers(usersArr);
  };
  const handleChange = event =>{
    setMessage(event.target.value)
  }

  return (
    <div>
      <MenuContainer />
      <br/>
      <input
        type="text"
        placeholder="Enter Username"
        value={message}
        onChange={handleChange}
      />
      <button>Search Users</button>
      <br/>
      {usernames.map((profile) => (
        <>
          <div>
            <img
              src={photoUrl + profile.pictureLocation}
              height="50px"
              width="50px"
              alt=""
            />{" "}
            <br />
            User: {profile.username} <br />
            Joined on: {profile.createdAt}
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};
