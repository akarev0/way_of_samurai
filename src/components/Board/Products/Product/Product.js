import s from './Product.module.css'

const Product = (props) => {
    return (
        <div className={s.product}>
            <a href="#">{props.title}</a>
        </div>
    )
}

export default Product;