import React, {useState} from 'react'

import './counter.css'

export const CounterApp = () => {
    
    const [state, setState] = useState({ //state destructurado ya que es un objeto
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const {counter1, counter2} = state;
  
    return (
        <>
          <h1>Counter1 {counter1} and Counter2 {counter2}</h1>
          <hr /> 

          <button className="btn btn-primary"
            onClick={ () => {
                setState( {
                    ...state, 
                    counter1: counter1 + 1,
                } )
            }
                 
            }
          > </button> 
        </>
    )
}
