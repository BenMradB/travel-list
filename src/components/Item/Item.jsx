import React from 'react'
import styles from './Item.module.css'
import { useItems } from '../../context/ItemsProvider';

const Item = ({ item }) => {
    const { itemsDispatch } = useItems();
    return (
        <div className={styles.item}>
            <input type="checkbox" checked={item.packed} onChange={() => itemsDispatch({ type: 'items/packed', payload: item.id })} />
            <p className={item.packed ? styles.itemPacked : ''}>
                <span> {item.quantity} </span>
                <span> {item.item} </span>
            </p>
            <button onClick={() => itemsDispatch({ type: 'items/delete', payload: item.id })}>❌</button>
        </div>
    )
}

export default Item