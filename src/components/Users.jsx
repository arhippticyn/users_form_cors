import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/selectors";
import User from "./User";
import { FetchUsers } from "../redux/operation";

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(getUsers)

    useEffect(() => {
        dispatch(FetchUsers)
    }, [dispatch])
  return (
    <ul>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </ul>
  );
};

export default Users;
