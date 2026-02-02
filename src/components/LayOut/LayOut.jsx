import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const LayOut = () => {
    return (
        <>
            <Sidebar />
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}

export default LayOut
