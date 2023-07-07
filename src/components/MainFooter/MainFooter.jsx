import React, { useEffect, useState } from 'react'
import styles from './MainFooter.module.css'
import { useItems } from '../../context/ItemsProvider'

const MainFooter = ({ children }) => {
    const { itemsDispatch, items } = useItems();

    const onClickHandler = () => {
        if (!items.length) return;
        const confirm = window.confirm('Are you sure you want to clear out your travel list ? NOTICE : No way to get it back after clearing .')
        if (confirm) {
            itemsDispatch({ type: 'items/clear' })
        }
    }

    return (
        <footer className={styles.mainFooter}>
            {children}
            <button onClick={onClickHandler}>Clear List</button>
        </footer>
    )
}

export default MainFooter