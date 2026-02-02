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
            <LayOut />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="categories" element={<Categories />} />
                <Route path="popular" element={<Popular />} />
            </Routes>
        </div>
    )
}

// import { useEffect, useState } from 'react'

// const BASE_URL = 'https://dummyjson.com/products'

// async function getProducts() {
//     try {
//         const response = await fetch(BASE_URL)

//         if (!response.ok) {
//             throw new Error('Failed to fetch products')
//         }

//         const data = await response.json()

//         return data.products // масив товарів
//     } catch (error) {
//         console.error('API error:', error)
//         throw error
//     }
// }

// function App() {
//     const [products, setProducts] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         async function loadProducts() {
//             try {
//                 setLoading(true)

//                 const data = await getProducts()

//                 setProducts(data)
//             } catch (err) {
//                 setError(err)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         loadProducts()
//     }, [])
//     console.log(products)

//     if (loading) return <p>Loading...</p>
//     if (error) return <p>{error}</p>

//     return (
//         <>
//         </>
//     )
// }

export default App
