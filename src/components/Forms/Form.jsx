export const Form = ({ formData, handleOnChange, errors, validateForm }) => {
    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        if (validateForm()) {
            console.log('enviando...', formData)
        }
    }
    return (
        <div style={{ border: '3px solid red' }}>
            <form onSubmit={handleOnSubmit}>
                <input
                    type='text'
                    name='nombre'
                    value={formData.nombre}
                    onChange={handleOnChange}
                    placeholder='Add Name'
                />
                <br />
                {errors && errors.nombre && <span>{errors.nombre}</span>}
                <br />
                <input
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleOnChange}
                    placeholder='Add Email'
                />
                <br></br>
                {errors && errors.email && <span>{errors.email}</span>}
                <br />
                <button>Send</button>
            </form>
        </div>
    )
}