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
      <button onClick={() => handleChange("eating")}>Eating</button>
      <button onClick={() => handleChange("playing")}>Playing</button>
      <button onClick={() => handleChange("napping")}>Napping</button>
    </>
  );
};

export default DemoComponent;
