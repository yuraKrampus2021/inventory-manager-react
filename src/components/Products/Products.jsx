import { Plus } from 'lucide-react'
import { useState } from 'react'
import ActionButton from '../UI/Button/ActionButton'
import PageTitle from '../UI/Title/PageTitle'
import InputAction from '../UI/Input/InputAction'
import './Products.css'

const Products = () => {
    const [search, setSearch] = useState('')

    const searchHandler = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="products">
            <PageTitle>Products</PageTitle>
            <div className="products__actions">
                <InputAction
                    className="products__search"
                    onChange={searchHandler}
                    value={search}
                    ico="&#8981;"
                    label="search"
                />
                <ActionButton className="products__btn">
                    <span>
                        <Plus className="ico" />
                    </span>{' '}
                    <span>Add Products</span>
                </ActionButton>
            </div>
        </div>
    )
}

export default Products
