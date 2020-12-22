import s from './Category.module.css'
import {NavLink} from "react-router-dom";

const Category = (props) => {

    return (
        <div className={s.category}>
            {props.title}
            {props.title}
            {props.title}
        </div>
    )
}

export default Category;