import React, { useReducer } from 'react'
import styles from './Form.module.css'
import Button from '../Button/Button'
import { useItems } from '../../context/ItemsProvider'

const initialState = {
    quantity: 1,
    item: ''
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'item': return { ...state, item: payload };
        case 'item/quantity': return { ...state, quantity: +payload }
        case 'reset': return initialState;
        default: throw new Error('Unknown Action !!!')
    }
}

const Form = () => {
    const { itemsDispatch } = useItems();
    const [state, dispatch] = useReducer(reducer, initialState);
    const { quantity, item } = state;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!item) return;
        const newItem = {
            id: crypto.randomUUID(),
            item,
            quantity,
            packed: false
        }

        itemsDispatch({ type: 'items/add', payload: newItem });
        dispatch({ type: 'reset' });
    }

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <div className={styles.formContent}>
                <h3>What do you need for your 😍 trip?</h3>
                <select value={quantity} onChange={(e) => dispatch({ type: 'item/quantity', payload: e.target.value })}>
                    {
                        Array.from({ length: 20 }, (curr, i) => i + 1).map((ele) => <option value={ele} key={ele}> {ele} </option>)
                    }
                </select>
                <input type='text' placeholder='Item ...' value={item} onChange={(e) => dispatch({ type: 'item', payload: e.target.value })} />
                <Button type='add'>Add</Button>
            </div>
        </form>
    )
}

export default Form