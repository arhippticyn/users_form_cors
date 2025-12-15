import React from 'react';
import  styles  from '../styles/Form.module.css'

const FormDelete = () => {
  const handlesubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const id = form.elements.number
    form.reset()
  }
  return (
    <form action="" className={styles.form}>
      <label className={styles.label} htmlFor="id">Enter id:</label>
      <input className={styles.input} type="number" name="id" id="" />
      <button className={styles.btn} type="submit">Delete User</button>
    </form>
  )
}

export default FormDelete;