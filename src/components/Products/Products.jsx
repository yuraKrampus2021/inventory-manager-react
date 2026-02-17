import { Plus } from 'lucide-react'
import { useState } from 'react'
import { productStore } from '../../store/productStore'
import ActionButton from '../UI/Button/ActionButton'
import PageTitle from '../UI/Title/PageTitle'
import InputAction from '../UI/Input/InputAction'

import './Products.css'

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
    const { products, addProduct, updateProduct, deleteProduct } =
        productStore()

    const [lowStock, setLowStock] = useState(false)
    const [search, setSearch] = useState('')
    const [modalAdd, setModalAdd] = useState(false)
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        category: '',
        qty: 0,
        price: 0,
    })

    const filteredProducts = filterProducts(search, products, lowStock)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prevState) => ({
            ...prevState,
            [name]: name === 'qty' || name === 'price' ? +value : value,
        }))
    }

    const saveHandler = (e) => {
        e.preventDefault()

        for (let key in formData) {
            if (!formData[key] && key !== 'id') return
        }

        const isExisting = products.some(
            (prod) => prod.id === formData.id && prod.id !== 0
        )

        if (isExisting) updateProduct(formData)

        if (!isExisting) addProduct(formData)

        setFormData({
            id: 0,
            name: '',
            category: '',
            qty: 0,
            price: 0,
        })
    }

    const editProduct = (item) => {
        setModalAdd(true)
        setFormData({ ...item })
    }

    return (
        <div className="products">
            <PageTitle>Products</PageTitle>
            <div className="products__actions">
                <InputAction
                    className="products__search"
                    onChange={(e) => {
                        setSearch(e.target.value)
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
                    onClick={() => setModalAdd(true)}
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
                                    onChange={(e) => handleChange(e)}
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
                                    onChange={(e) => handleChange(e)}
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
                                    onChange={(e) => handleChange(e)}
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
                                    onChange={(e) => handleChange(e)}
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
                <span>Delete</span>
                <span>Corect</span>
            </div>

            {!filteredProducts.length && <h5>Products list is empty</h5>}
            {filteredProducts.map((item) => (
                <div key={item.id} className="products__list-item">
                    <span>{item.name}</span>
                    <span>{item.category}</span>
                    <span className={item.qty <= 5 ? 'low' : ''}>
                        {item.qty}
                    </span>
                    <span>{item.price}</span>
                    <span>
                        <button onClick={() => deleteProduct(item.id)}>
                            Delete
                        </button>
                    </span>
                    <span>
                        <button onClick={() => editProduct({ ...item })}>
                            Corect
                        </button>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Products
