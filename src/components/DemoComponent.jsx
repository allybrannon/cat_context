import React, { useContext } from "react";
import StateContext from "../context";

const handleChange = (e, dispatch) => {
  dispatch({
    type: "CHANGE_ACTIVITY",
    name: e.target.value,
  });
};

const DemoComponent = () => {
  const [value, dispatch] = useContext(StateContext);
  const { activity } = value;
  return (
    <>
      <p>The cat is: {activity}</p>
      <button onClick={(e) => handleChange(e, dispatch, "eating")}>
        Eating
      </button>
      <button onClick={(e) => handleChange(e, dispatch, "playing")}>
        Playing
      </button>
      <button onClick={(e) => handleChange(e, dispatch, "napping")}>
        Napping
      </button>
    </>
  );
};

export default DemoComponent;
