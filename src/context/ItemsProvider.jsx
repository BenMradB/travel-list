import { createContext, useContext, useReducer } from "react";

const ItemsContext = createContext();

const initialState = {
    items: [],
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'items/add': return {
            ...state,
            items: [...state.items, payload]
        }
        case 'items/packed': {
            const updatedItems = state.items.map(item => item.id === payload ? { ...item, packed: !item.packed } : item);
            return { ...state, items: updatedItems }
        }
        case 'items/delete': return {
            ...state,
            items: state.items.filter(item => item.id !== payload)
        }
        case 'items/sort': return {
            ...state,
            items: payload
        }
        case 'items/clear': return initialState
        default: throw new Error('Unknown Action !!!')
    }
}

const ItemsProvider = ({ children }) => {
    const [itemsState, itemsDispatch] = useReducer(reducer, initialState);
    const { items } = itemsState;
    return <ItemsContext.Provider value={{
        items,
        itemsDispatch
    }}>
        {children}
    </ItemsContext.Provider>
}

const useItems = () => {
    const context = useContext(ItemsContext);
    if (!context) throw new Error('ItemsProvider Used Outside Context');
    return context;
}

export { ItemsProvider, useItems }