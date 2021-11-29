import React from "react";
import { Wrapper } from "./styles";

const Certification = ({ titleColor }) => {
  return (
    <Wrapper>
      <h2 style={{ color: titleColor || "" }}>Skills</h2>
    </Wrapper>
  );
};

export default Certification;
