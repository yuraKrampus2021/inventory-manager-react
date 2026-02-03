import { useState } from 'react'
import { Plus } from 'lucide-react'
import { AlertTriangle } from 'lucide-react'
import './Home.css'

const Home = () => {
    const [lowStockActive, setLowStockActive] = useState(false)

    const statsCards = [
        { cardsName: 'Products', count: 120 },
        { cardsName: 'Categories', count: 7 },
        { cardsName: 'Low Stock', count: 6 },
    ]

    const lowStockItems = [
        { id: 1, name: 'Mouse', qty: 2 },
        { id: 2, name: 'Cable', qty: 1 },
        { id: 3, name: 'USB Drive', qty: 3 },
    ]

    return (
        <div className="home">
            <h3 className="home__title">Welcome to MyWarehouse Assistant</h3>

            <div className="infoCards">
                {statsCards.map((card, id) => (
                    <div
                        key={id}
                        className="infoCards__item"
                        onClick={() => {
                            card.cardsName === 'Low Stock'
                                ? setLowStockActive(true)
                                : setLowStockActive(false)
                        }}
                    >
                        <span>{card.count}</span>
                        <h5>{card.cardsName}</h5>
                    </div>
                ))}
            </div>

            {lowStockActive && (
                <div className="lowStock">
                    <span
                        className="lowStock__close"
                        onClick={() => setLowStockActive(false)}
                    >
                        X
                    </span>
                    <h4 className="lowStock__title">
                        <span>
                            <AlertTriangle />
                        </span>
                        <span>Low Stock Products</span>
                    </h4>
                    <hr />
                    <ul className="lowStock__list">
                        {lowStockItems.map((item) => (
                            <li key={item.id} className="lowStock__item">
                                {item.name} <span>({item.qty})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="quickActions">
                <h4 className="quickActions__title">Quick Actions</h4>
                <hr />
                <div className="quickActions__wrapper">
                    <button className="quickActions__btn">
                        <span>
                            <Plus
                                style={{
                                    padding: '4px',
                                    backgroundColor: 'grey',
                                    borderRadius: '50%',
                                }}
                            />
                        </span>{' '}
                        <span>Add Product</span>
                    </button>

                    <button className="quickActions__btn">
                        <span>
                            <Plus
                                style={{
                                    padding: '4px',
                                    backgroundColor: 'grey',
                                    borderRadius: '50%',
                                }}
                            />
                        </span>{' '}
                        <span>Add Category</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
