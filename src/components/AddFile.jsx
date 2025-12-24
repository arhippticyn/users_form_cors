import React from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/Form.module.css";
import { AddFile } from "../redux/operation";

const AddFiles = () => {
  const dispatch = useDispatch();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.elements.id.value;
    const file = form.elements.file.files[0];
    dispatch(AddFile({ userId: Number(id), file: file }));
    form.reset();
  };
  return (
    <div>
      <h2>Add file</h2>
      <form action="" className={styles.form} onSubmit={HandleSubmit}>
        <label className={styles.label} htmlFor="id">
          Enter id user
        </label>
        <input type="text" className={styles.input} name="id" />
        <label className={styles.label} htmlFor="file">
          Upload file
        </label>
        <input type="file" className={styles.input} name="file" />

        <button type="submit" className={styles.btn}>
          Add file
        </button>
      </form>
    </div>
  );
};

export default AddFiles;
