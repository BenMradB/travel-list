import styles from './Button.module.css';
import React from 'react'

const Button = ({ type, children }) => {
    return (
        <button className={`${styles.btn} ${styles[type]}`}>
            {children}
        </button>
    )
}

export default Button