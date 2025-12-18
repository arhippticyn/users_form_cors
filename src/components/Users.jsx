import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/selectors";
import User from "./User";
import { FetchUsers } from "../redux/operation";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(FetchUsers());
    form.reset();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <button type="submit">Fetch</button>
      </form>
      <ul>
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default Users;
