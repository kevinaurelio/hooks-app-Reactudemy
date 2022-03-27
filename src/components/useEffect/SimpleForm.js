import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState( { //estado donde esta cada input del form
        name: '',
        email: ''
    }) 

    const {name, email} = formState;     //destructuración del formState
    
    useEffect( () => { 
        // console.log('hey')
    }, [])

    useEffect( () => { //solo para cuando se cambia algo en el formstate
        // console.log('state cambio'})
    }, [formState])

    useEffect( () => { //solo para cuando se cambia algo en el email
        // console.log('email cambio')
    }, [email])

    const handleInputChange = (e) => { //handle name vs value de cada input
        setformState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <h1>Simple Form Use Effect</h1>
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

            {name==='123' && <Message/>} 
            {/* Si y solo si name es 123 aparecerá Message */}
        </>
    )
}
