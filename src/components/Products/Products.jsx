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
    return listofProducts.filter((product) => {
        const matchesStock = lowStock ? product.qty <= 5 : true

        const matchesSearch = searchText
            ? product.name.toLowerCase().includes(searchText.toLowerCase())
            : true

        return matchesStock && matchesSearch
    })
}

const Products = () => {
    const [lowStock, setLowStock] = useState(false)
    const [search, setSearch] = useState('')
    const [modalAdd, setModalAdd] = useState(false)
    const [updateList, setUpdateList] = useState(productsMock)
    const [formData, setFormData] = useState({
        id: 111111,
        name: '',
        category: '',
        qty: 0,
        price: 0,
    })

    const filteredProducts = filterProducts(search, updateList, lowStock)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const saveHandler = (e) => {
        e.preventDefault()
        for (let key in formData) {
            if (!formData[key]) return
        }
        setFormData((prev) => ({ ...prev, id: Date.now() }))
        setUpdateList((prev) => [...prev, formData])
        setFormData({
            id: Date.now(),
            name: '',
            category: '',
            qty: 0,
            price: 0,
        })

        console.log(updateList)
    }

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

                <ActionButton
                    onClick={() => setModalAdd(!modalAdd)}
                    className="products__btn"
                >
                    <span>
                        <Plus className="ico" />
                    </span>{' '}
                    <span>Add Products</span>
                </ActionButton>
            </div>

            {modalAdd && (
                <div className="products__backdrop">
                    <div className="products__form">
                        <span onClick={() => setModalAdd(false)}>close X</span>
                        <form action="">
                            <label htmlFor="name-product">
                                Name
                                <input
                                    type="text"
                                    name="name"
                                    id="name-product"
                                    onChange={handleChange}
                                    value={formData.name}
                                    placeholder="Phone"
                                />
                            </label>

                            <label htmlFor="category-product">
                                Category
                                <input
                                    type="text"
                                    name="category"
                                    id="category-product"
                                    onChange={handleChange}
                                    value={formData.category}
                                    placeholder="Electronics"
                                />
                            </label>

                            <label htmlFor="qty-product">
                                Qty
                                <input
                                    type="number"
                                    name="qty"
                                    id="qty-product"
                                    onChange={handleChange}
                                    value={formData.qty}
                                    placeholder="5"
                                />
                            </label>
                            <label htmlFor="price-product">
                                Price
                                <input
                                    type="number"
                                    name="price"
                                    id="price-product"
                                    onChange={handleChange}
                                    value={formData.price}
                                    placeholder="300"
                                />
                            </label>

                            <button onClick={(e) => saveHandler(e)}>
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}

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
