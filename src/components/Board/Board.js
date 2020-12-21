import Product from "./Products/Product/Product";
import styles from './Board.module.css'


const Board = (props) => {

    let productsList = props.products.map(prod => <Product title={prod.title}/>)

    return (
        <div className={styles.board}>
            <div className={styles.products}>
                {productsList}
            </div>
        </div>

    )
}

export default Board;