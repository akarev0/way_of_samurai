import s from './Category.module.css'
import {NavLink} from "react-router-dom";

const Category = (props) => {

    return (
        <div>
            <NavLink className={s.category} to={props.categoryName.toLowerCase()}>
                {props.categoryName}
            </NavLink>
        </div>
    )
}

export default Category;