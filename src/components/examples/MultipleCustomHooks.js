import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "../useEffect/effects.css";

export const MultipleCustomHooks = () => {

  const { stateCounter, increment } = useCounter(1);

  const URI = `https://www.breakingbadapi.com/api/quotes/${stateCounter}`;

  const { data, loading } = useFetch(URI); //porque el custom hook useFetch retorna un state

  const { author, quote } = !!data && data[0]

  console.log(stateCounter)

  return (
    <>
      <h2>Breaking Bad Quotes!!!</h2>
      <hr />

      {loading ? ( //si loading es true entonces muestra Loading
        <div className="alert alert-info text-center">Loading...</div>
      ) : ( //else muestra quote y author
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button 
        className="btn btn-primary" 
        onClick={() => increment(1)}>
          Next Quote</button>
    </>
  );
};
