import s from './Product.module.css'

const Product = (props) => {

    return (
        <div className={s.product}>
            <img className={s.img} src={props.image} />
                <div>
                    <a href="#">{props.title}</a>
                </div>
        </div>
    )
}

export default Product;