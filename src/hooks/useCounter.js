import { useState } from "react"

export const useCounter = (initialState = 1) => {
    const [stateCounter, setState] = useState(initialState)

    const increment = ( factor ) => {
        setState(stateCounter + factor)
    }

    const decrement = ( factor ) => {
        setState (stateCounter - factor)
    }

    const reset = () => {
        setState (initialState)
    }

    return {
        stateCounter, //counter
        increment,
        decrement,
        reset
    }
}