import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {

    // todo el procedimiento aqui
    // const [formState, setformState] = useState( { //estado donde esta cada input del form
    //     name: '',
    //     email: '',
    //     password: ''
    // }) 

    // const {name, email, password} = formState;     //destructuración del formState

    // const handleInputChange = (e) => { //handle name vs value de cada input
    //     setformState({
    //         ...formState,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const [formValues, handleInputChange] = useForm({ //hook useForm donde retorna formValues y handleInputChange 
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formValues;     //destructuración del formValues
    
    useEffect(() => {
        console.log('email changed')   
    }, [email]) 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hook</h1>
            <hr />

            <div className="form-group">
                <input
                 type="text"
                 name='name'
                 className='form-control'
                 placeholder='Your name'
                 autoComplete='off'
                 value={name}
                 onChange={handleInputChange}
                 />
            </div>
            <div className="form-group">
                <input
                 type='text'
                 name='email'
                 className='form-control'
                 placeholder='Your email'
                 autoComplete='off'
                 value={email}
                 onChange={handleInputChange}
                 />
            </div>
            <div className="form-group">
                <input
                 type='password'
                 name='password'
                 className='form-control'
                 placeholder='*********'
                 value={password}
                 onChange={handleInputChange}
                 />
            </div>

            <button
                className="btn btn-primary"
                type='submit'
            >Save</button>

        </form>
    )
}
