import { Plus } from 'lucide-react'
import { useState } from 'react'
import ActionButton from '../UI/Button/ActionButton'
import PageTitle from '../UI/Title/PageTitle'
import InputAction from '../UI/Input/InputAction'
import './Products.css'

const productsMock = [
    {
        id: 1,
        name: 'Wireless Mouse',
        category: 'Electronics',
        qty: 12,
        price: 20,
    },
    {
        id: 2,
        name: 'USB-C Cable',
        category: 'Electronics',
        qty: 3,
        price: 8,
    },
    {
        id: 3,
        name: 'Mechanical Keyboard',
        category: 'Electronics',
        qty: 7,
        price: 75,
    },
    {
        id: 4,
        name: "27'' Monitor",
        category: 'Electronics',
        qty: 5,
        price: 230,
    },
    {
        id: 5,
        name: 'Office Chair',
        category: 'Furniture',
        qty: 2,
        price: 180,
    },
    {
        id: 6,
        name: 'Notebook A4',
        category: 'Stationery',
        qty: 40,
        price: 3,
    },
    {
        id: 7,
        name: 'Pen Set',
        category: 'Stationery',
        qty: 25,
        price: 6,
    },
]

const filterProducts = (searchText, listofProducts, lowStock) => {
    let result = listofProducts

    if (!searchText && !lowStock) {
        return result
    }

    if (searchText && lowStock) {
        result = listofProducts.filter(({ qty }) => qty <= 5)

        result = result.filter(({ name }) =>
            name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    if (lowStock && !searchText) {
        result = listofProducts.filter(({ qty }) => qty <= 5)
    }

    if (searchText && !lowStock) {
        result = listofProducts.filter(({ name }) =>
            name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    return result
}

const Products = () => {
    const [lowStock, setLowStock] = useState(false)
    const [search, setSearch] = useState('')

    const filteredProducts = filterProducts(search, productsMock, lowStock)

    return (
        <div className="products">
            <PageTitle>Products</PageTitle>
            <div className="products__actions">
                <InputAction
                    className="products__search"
                    onChange={(e) => {
                        setSearch(e.target.value)
                        console.log(search)
                    }}
                    value={search}
                    ico="&#8981;"
                    label="search"
                />
                <label htmlFor="lowStock" className="products__lowStock">
                    <span>Show Low Stock</span>
                    <input
                        id="lowStock"
                        onChange={(e) => setLowStock(e.target.checked)}
                        type="checkbox"
                    />
                </label>

                <ActionButton className="products__btn">
                    <span>
                        <Plus className="ico" />
                    </span>{' '}
                    <span>Add Products</span>
                </ActionButton>
            </div>

            <h3 className="products__list-title">List of products</h3>
            <div className="products__list-label">
                <span>Name</span>
                <span>Category</span>
                <span>Qty</span>
                <span>Price</span>
            </div>
            {filteredProducts.map((item) => (
                <div key={item.id} className="products__list-item">
                    <span>{item.name}</span>
                    <span>{item.category}</span>
                    <span className={item.qty <= 5 ? 'low' : ''}>
                        {item.qty}
                    </span>
                    <span>{item.price}</span>
                </div>
            ))}
        </div>
    )
}

export default Products
