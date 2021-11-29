import React, { useContext } from "react";
import { UIContext } from "../../Context/UIContext";
import { WrapperDiv } from "./style";
const CertificationView = () => {
  const { state, dispatch } = useContext(UIContext);
  return (
    <WrapperDiv>
      <h4>Customize Certification</h4>
      <label>
        Count:
        <input
          type='number'
          min={1}
          max={6}
          value={state.CCount}
          onChange={(e) =>
            dispatch({ type: "SET_CC", payload: Number(e.target.value) })
          }
        />
      </label>
    </WrapperDiv>
  );
};

export default CertificationView;
