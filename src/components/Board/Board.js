import Product from "./Products/Product/Product";
import styles from './Board.module.css'


const Board = (props) => {

    let productsList = props.state.products.map(prod => <Product title={prod.title} image={prod.image}/>)

    return (
        <div className={styles.board}>
            <div className={styles.products}>
                {productsList}
            </div>
        </div>

    )
}

export default Board;