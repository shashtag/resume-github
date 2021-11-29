import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { UIContext } from "../../Context/UIContext";
import { Wrapper } from "./styles";

const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    width: 100%;
    margin: 10px 0;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .count-stats {
    line-height: 24px;
  }

  ${({ pills, outlined }) =>
    pills &&
    css`
      display: flex;
      flex-direction: column;

      ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        list-style-type: none;
      }

      li {
        display: inline-block;
        padding: 6px 12px;

        margin: 4px;
        border-radius: 8px;
        ${outlined
          ? `border: 1px solid var(--color); color: var(--color);`
          : `background: var(--color); color: #fff;`}
      }
    `}
`;

const Certification = ({ titleColor }) => {
  const { state } = useContext(UIContext);
  return (
    <Wrapper>
      <h2 style={{ color: titleColor || "" }}>Skills</h2>
      <Statistics pills={state.pills} outlined={state.outlined}>
        <ul>
          {state.data.skills.map((data, i) => (
            <li className='count-stats' key={i}>
              {" "}
              {data.name}
            </li>
          ))}
        </ul>
      </Statistics>
    </Wrapper>
  );
};

export default Certification;
