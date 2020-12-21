import Category from "./Category/Category";
import s from './Sidebar.module.css'

const Sidebar = (props) => {

    let categoriesList = props.categories.map( cat => <Category categoryName={cat.title} />)

    return (
        <nav className={s.sidebar}>
            { categoriesList }
        </nav>
    )
}

export default Sidebar;
