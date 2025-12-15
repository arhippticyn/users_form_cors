import React from 'react';
import  styles  from '../styles/Form.module.css'

const Form = () => {
    const handlesubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const username = form.elements.text
        const password = form.elements.password
        const date_born = form.elements.date
        const sex = form.elements.text
        const file = form.elements.file

        form.reset()
    }
  return (
    <form className={styles.form} action="" onSubmit={handlesubmit}>
        <label className={styles.label} htmlFor="username">Enter username</label>
        <input className={styles.input} type="text" name="username" id="" />
        <label className={styles.label} htmlFor="password">Enter password</label>
        <input className={styles.input} type="password" name="password" id="" />
        <label className={styles.label} htmlFor="date_born">Enter date born</label>
        <input className={styles.input} type="date" name="date_born" id="" />
        <label className={styles.label} htmlFor="sex">Enter sex</label>
        <input className={styles.input} type="text" name="sex" id="" />
        <label className={styles.label} htmlFor="file">upload file</label>
        <input className={styles.input} type="file" name="file" id="" />

        <button className={styles.btn} type="submit">Add</button>
    </form>
  )
}

export default Form;