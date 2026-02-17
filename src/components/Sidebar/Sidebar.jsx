import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { useState } from 'react'
import { House, Package, LayoutGrid, Flame } from 'lucide-react'

const Sidebar = () => {
    const [isSidebarHide, setIsSidebarHide] = useState(false)

    const menuItems = [
        {
            name: 'Home',
            className: 'sidebar__list-item',
            icon: <House size={30} />,
            path: '/',
        },
        {
            name: 'Products',
            className: 'sidebar__list-item',
            icon: <Package size={30} />,
            path: '/products',
        },
        {
            name: 'Categories',
            className: 'sidebar__list-item',
            icon: <LayoutGrid size={30} />,
            path: '/categories',
        },
        {
            name: 'Popular',
            className: 'sidebar__list-item',
            icon: <Flame size={30} />,
            path: '/popular',
        },
    ]

    const resizeElemtsOfSidebar = (isHide, hideItem, normalItem) =>
        isHide ? hideItem : normalItem

    return (
        <div
            className={resizeElemtsOfSidebar(
                isSidebarHide,
                'sidebar sidebar--small',
                'sidebar'
            )}
        >
            <h3>WearHouse</h3>
            <nav className="sidebar__list">
                {menuItems.map((elem) => (
                    <li className={elem.className}>
                        <NavLink to={elem.path}>
                            {resizeElemtsOfSidebar(
                                isSidebarHide,
                                elem.icon,
                                elem.name
                            )}
                        </NavLink>
                    </li>
                ))}
            </nav>
            <button
                className="small"
                onClick={() => setIsSidebarHide(!isSidebarHide)}
            >
                small
            </button>
        </div>
    )
}

export default Sidebar
