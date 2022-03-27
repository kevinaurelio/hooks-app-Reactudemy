import React, {useState} from "react";
import { MultipleCustomHooks } from "../examples/MultipleCustomHooks";

import "../useEffect/effects.css";

export const RealRef = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Real Example REF</h1>
      <hr />

      {show && <MultipleCustomHooks />}

    <button className="btn btn-primary mt-5"
      onClick={ () => {
        setShow(!show)
      }}
    >
      Show/Hidw
    </button>

    </>
  );
};
