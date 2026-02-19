import './InputAction.css'

const InputAction = ({ onChange, value, ico, label, className }) => {
    return (
        <input
            type="text"
            name={label}
            onChange={onChange}
            value={value}
            placeholder={`${ico} Search Product`}
            className={className}
        />
    )
}

export default InputAction
