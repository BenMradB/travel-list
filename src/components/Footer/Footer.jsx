import React from 'react'
import styles from './Footer.module.css'
import { useItems } from '../../context/ItemsProvider'

const Footer = () => {
    const { items } = useItems();
    const packedItems = items.filter(item => item.packed)
    const allPacked = packedItems.length === items.length;
    const packedPercentage = Math.round((packedItems.length / items.length) * 100)
    return (
        <footer className={styles.footer}>
            <h4>
                {!items.length ? <span>Start adding some items to your packing list 🚀</span> : null}
                {allPacked && items.length ? <span>You got everything! Ready to go ✈️</span> : null}
                {
                    items.length && !allPacked ?
                        <span>
                            🎒 You have {items.length} item(s) on your list, and you already packed {packedItems.length} ({packedPercentage}%)
                        </span>
                        :
                        null
                }
            </h4>
        </footer>
    )
}

export default Footer