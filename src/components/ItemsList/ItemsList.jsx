import Item from '../Item/Item';
import styles from './ItemsList.module.css'

const ItemsList = ({ sortedItems }) => {
    return (
        <div className={styles.itemsList}>
            {
                sortedItems.map((item, i) => <Item key={i} item={item} />)
            }
        </div>
    )
}

export default ItemsList