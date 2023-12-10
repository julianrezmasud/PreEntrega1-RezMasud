import { useState } from "react"
import { Form } from "./Form"
import { formWhitValidation } from "./FormWithValidation"


const FormWhitValidation = formWhitValidation(Form)

export const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: ''
    })

    const handleOnChange = (evt) => {

        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <FormWhitValidation
            formData={formData}
            handleOnChange={handleOnChange}
        />
    )
}