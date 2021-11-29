import React, { useContext } from "react";
import { UIContext } from "../../Context/UIContext";
import { WrapperDiv } from "./style";

const Skills = () => {
  const { state, dispatch } = useContext(UIContext);
  return (
    <WrapperDiv>
      <h4>Change Skills View</h4>
      <label>
        Pills View:
        <input
          type='checkbox'
          checked={state.pills}
          onChange={(e) =>
            dispatch({ type: "SET_PILLS", payload: e.target.checked })
          }
        />
      </label>
      {state.pills && (
        <label>
          Change Pills style:
          <input
            type='checkbox'
            checked={state.outlined}
            onChange={(e) =>
              dispatch({ type: "SET_OUTLINED", payload: e.target.checked })
            }
          />
        </label>
      )}
    </WrapperDiv>
  );
};

export default Skills;
