import './InputAction.css'

const InputAction = ({ onChange, value, ico, label }) => {
    return (
        <input
            type="text"
            name={label}
            onChange={onChange}
            value={value}
            placeholder={`${ico} Search Product`}
        />
    )
}

export default InputAction
