import React from "react";

const User = ({ user }) => {
  return (
    <li>
      <h2>Username: {user.username}</h2>
      <p>Id: {user.id}</p>
      <p>Reg: {user.date_reg}</p>
      <p>Age: {user.age}</p>
      <p>Date born: {user.date_born}</p>
      {user.file && (
        <img
          src={`http://127.0.0.1:8000/upload/${user.file}`}
          alt={user.file}
          width={300}
        />
      )}
      <p>File: {user.file}</p>
      <p>Sex: {user.sex}</p>
    </li>
  );
};

export default User;
