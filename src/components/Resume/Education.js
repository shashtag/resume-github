import React, { useContext } from "react";
import { UIContext } from "../../Context/UIContext";
import styled from "styled-components";
import { Wrapper } from "./styles";

const PRWrapper = styled.div`
  margin: 16px 0;
  padding-left: 16px;
  a {
    text-decoration: none;
    color: var(--repoTitleColor);
  }
  a:hover {
    color: var(--repoTitleHoverColor);
  }
  .name {
    font-size: 20px;
    margin: 4px 0;
  }
  .stats {
    font-family: "Noticia Text", sans-serif;
  }
`;

const Certification = ({ titleColor }) => {
  const { state } = useContext(UIContext);
  return (
    <Wrapper>
      <h2 style={{ color: titleColor || "" }}>Education </h2>
      {state.data.education.map((data, i) => {
        if (state.educationCount < i + 1) return null;
        return (
          <PRWrapper>
            <div className='name'>
              <a href='/'>{data.school_name}</a>
            </div>
            <ul className='description'>
              {data.degree_name ? <li>{data.degree_name}</li> : null}
            </ul>
            <div style={{ marginLeft: "16px" }}>
              {data.start_date} - {data.end_date}
            </div>
          </PRWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Certification;
