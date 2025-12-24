import React from "react";
import styles from "../styles/Form.module.css";
import { useDispatch } from "react-redux";
import { DeleteUsers } from "../redux/operation";

const FormDelete = () => {
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.elements.id.value;
    dispatch(DeleteUsers(id));
    form.reset();
  };
  return (
    <div>
      <h2>Delete user</h2>
      <form action="" className={styles.form} onSubmit={handlesubmit}>
        <label className={styles.label} htmlFor="id">
          Enter id:
        </label>
        <input className={styles.input} type="text" name="id" id="" />
        <button className={styles.btn} type="submit">
          Delete User
        </button>
      </form>
    </div>
  );
};

export default FormDelete;
