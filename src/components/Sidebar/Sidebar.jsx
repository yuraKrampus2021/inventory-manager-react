import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3>WearHouse</h3>
            <nav className="sidebar__list">
                <li className="sidebar__list-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="sidebar__list-item">
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li className="sidebar__list-item">
                    <NavLink to="/categories">Categories</NavLink>
                </li>
                <li className="sidebar__list-item">
                    <NavLink to="/popular">Popular</NavLink>
                </li>
            </nav>
        </div>
    )
}

export default Sidebar
