import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { useState, useEffect } from 'react'
import {
    Menu,
    House,
    Package,
    LayoutGrid,
    Flame,
    ArrowBigLeft,
} from 'lucide-react'

const menuItems = [
    {
        id: 1,
        name: 'Home',
        className: 'sidebar__list-item',
        icon: <House size={30} color="#38bdf8" />,
        path: '/',
    },
    {
        id: 2,
        name: 'Products',
        className: 'sidebar__list-item',
        icon: <Package size={30} color="#38bdf8" />,
        path: '/products',
    },
    {
        id: 3,
        name: 'Categories',
        className: 'sidebar__list-item',
        icon: <LayoutGrid size={30} color="#38bdf8" />,
        path: '/categories',
    },
    {
        id: 4,
        name: 'Popular',
        className: 'sidebar__list-item',
        icon: <Flame size={30} color="#38bdf8" />,
        path: '/popular',
    },
]

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)

        // Встановлюємо початкове значення
        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        // Слухаємо тільки зміну стану (match/unmatch)
        const listener = () => setMatches(media.matches)
        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)
    }, [matches, query])

    return matches
}

const Sidebar = () => {
    const [isSidebarHide, setIsSidebarHide] = useState(false)
    const isMobile = useMediaQuery('(max-width: 520px)')

    useEffect(() => {
        setTimeout(() => {
            setIsSidebarHide(isMobile)
        }, 0)
    }, [isMobile])

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
            <span
                className={
                    !isSidebarHide ? 'sidebar__arrow' : 'sidebar__menu--ico'
                }
                onClick={() => setIsSidebarHide(!isSidebarHide)}
            >
                {resizeElemtsOfSidebar(
                    isSidebarHide,
                    <Menu size={25} color="#1E293B" />,
                    <ArrowBigLeft size={20}></ArrowBigLeft>
                )}
            </span>

            {!isSidebarHide && <h3 className="sidebar__title">Wearhouse</h3>}
            <nav className="sidebar__list">
                {menuItems.map((elem) => (
                    <li key={elem.id} className={elem.className}>
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
        </div>
    )
}

export default Sidebar
