import { useState } from "react"

export const formWhitValidation = (FormWrappedComponent) => {

    const NewFormWhitValidation = (props) => {
        const [errors, setErrors] = useState({})

        const validateForm = () => {
            let newErrors = {}
            let isValid = true

            if (!props.formData.nombre) {
                newErrors.name = 'Mandatory Field'
                isValid = false
            }
            if (!props.formData.email) {
                newErrors.email = 'Mandatory Field'
                isValid = false
            }

            setErrors(newErrors)
            return isValid
        }


        return (
            <FormWrappedComponent
                {...props}
                errors={errors}
                validateForm={validateForm}
            />
        )
    }

    return NewFormWhitValidation

}