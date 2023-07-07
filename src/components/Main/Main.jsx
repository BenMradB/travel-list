import React, { useState } from 'react'
import styles from './Main.module.css'
import Form from '../Form/Form'
import { useItems } from '../../context/ItemsProvider';
import ItemsList from '../ItemsList/ItemsList';
import MainFooter from '../MainFooter/MainFooter';

const Main = () => {
    const [sortBy, setSortBy] = useState('');
    const { items } = useItems();

    let sortedItems = items;
    if (sortBy === 'input') sortedItems = items;
    if (sortBy === 'desc') {
        sortedItems = items.slice().sort((curr, next) => (
            curr.item.toLowerCase().localeCompare(next.item.toLowerCase())
        ));
    }
    if (sortBy === 'packed') {
        sortedItems = items.slice().sort((a, b) => (
            +a.packed - +b.packed
        ));
    }

    return (
        <main className={styles.main}>
            <Form />
            <ItemsList sortedItems={sortedItems} />
            <MainFooter>
                <select name="" id="" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="desc">Sort by description</option>
                    <option value="packed">Sort By Packed Items</option>
                </select>
            </MainFooter>
        </main>
    )
}

export default Main