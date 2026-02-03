import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './LayOut.css'

const LayOut = () => {
    return (
        <div className="layout">
            <Sidebar />
            <main className="main">
                <Outlet />
            </main>
        </div>
    )
}

export default LayOut
