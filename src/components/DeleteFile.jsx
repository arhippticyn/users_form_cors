import React from "react";
import styles from "../styles/Form.module.css";
import { useDispatch } from "react-redux";
import { DeleteFiles } from "../redux/operation";

const DeleteFile = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.elements.id.value;
    dispatch(DeleteFiles(Number(id)));
    form.reset();
  };
  return (
    <div>
      <h2>Delete File</h2>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="id">Enter id:</label>
        <input className={styles.input} type="text" name="id" />
        <button className={styles.btn} type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteFile;
