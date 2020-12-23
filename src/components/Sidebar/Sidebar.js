import s from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className={s.sidebar}>
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
