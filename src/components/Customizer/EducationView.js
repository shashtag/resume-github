import React, { useContext } from "react";
import { UIContext } from "../../Context/UIContext";
import { WrapperDiv } from "./style";

const EducationView = () => {
  const { state, dispatch } = useContext(UIContext);
  return (
    <WrapperDiv>
      <h4>Customize Education</h4>
      <label>
        Count:
        <input
          type='number'
          min={1}
          max={6}
          value={state.educationCount}
          onChange={(e) =>
            dispatch({ type: "SET_EDC", payload: Number(e.target.value) })
          }
        />
      </label>
    </WrapperDiv>
  );
};

export default EducationView;
