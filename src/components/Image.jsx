import React from "react";
import styles from "../styles/Form.module.css";
import { useDispatch } from "react-redux";
import { ProccessImage } from "../redux/operation";

const Image = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.elements.id.value;
    const width = form.elements.width.value;
    dispatch(ProccessImage({ id: Number(id), width_r: Number(width) }));
    form.reset();
  };
  return (
    <div>
      <h2>Remake image</h2>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="id">
          Enter id for remake image
        </label>
        <input className={styles.input} type="text" name="id" />
        <label htmlFor="" className={styles.label}>
          Enter width for remake img
        </label>
        <input className={styles.input} type="text" name="width" />

        <button type="submit" className={styles.btn}>
          Remake
        </button>
      </form>
    </div>
  );
};

export default Image;
