import './ActionButton.css'

const ActionButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="Action__btn">
            {children}
        </button>
    )
}

export default ActionButton
