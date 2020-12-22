import s from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = (props) => {

    // let categoriesList = props.categories.map(cat => <Category categoryName={cat.title}/>)

    return (
        <div className={s.sidebar}>
            {/*<nav className={s.sidebar}>*/}
            {/*    {categoriesList}*/}
            {/*</nav>*/}
            <div>
                <NavLink to="/clothes">Clothes</NavLink>
            </div>
            <div>
                <NavLink to="/footwear">Footwear</NavLink>
            </div>
            <div>
                <NavLink to="/accessory">Accessory</NavLink>
            </div>


        </div>


    )
}

export default Sidebar;
