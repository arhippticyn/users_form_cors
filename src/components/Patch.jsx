import React from "react";
import styles from "../styles/Form.module.css";
import { useDispatch } from "react-redux";
import { PatchUsers } from "../redux/operation";

const Patch = () => {
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.elements.id.value;
    const newUsername = form.elements.newusername.value;
    dispatch(PatchUsers({ id: Number(id), newUsername: newUsername }));
    form.reset();
  };
  return (
    <div>
      <h2>Patch username</h2>
      <form action="" className={styles.form} onSubmit={handlesubmit}>
        <label className={styles.label} htmlFor="id">
          Enter id
        </label>
        <input className={styles.input} type="text" name="id" />
        <label className={styles.label} htmlFor="newusername">
          Enter new username
        </label>
        <input className={styles.input} type="text" name="newusername" />
        <button type="submit" className={styles.btn}>
          Patch user
        </button>
      </form>
    </div>
  );
};

export default Patch;
