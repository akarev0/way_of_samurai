import s from './Product.module.css'
import {NavLink} from "react-router-dom";

const Product = (props) => {

    return (
        <div className={s.product}>
            <img className={s.img} src={props.image} alt="image" />
                <div>
                    <NavLink to="#">{props.title}</NavLink>
                </div>
        </div>
    )
}

export default Product;