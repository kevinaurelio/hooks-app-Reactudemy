// custom hook encargado de manejar los formularios con validaciones etc

import {useState} from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)
    
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return [values, handleInputChange]

}