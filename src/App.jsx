import { Routes, Route } from 'react-router-dom'
import './App.css'
import Categories from './components/Categorise/Categories'
import Home from './components/Home/Home'
import Popular from './components/Popular/Popular'
import Products from './components/Products/Products'
import LayOut from './components/LayOut/LayOut'


const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<LayOut />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="popular" element={<Popular />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
