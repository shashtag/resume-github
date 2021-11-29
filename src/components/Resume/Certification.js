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
      <h2 style={{ color: titleColor || "" }}>Certifications </h2>
      {state.data.certifications.map((data, i) => {
        if (state.CCount < i + 1) return null;
        return (
          <PRWrapper>
            <div className='name'>
              <a href='/'>{data.name}</a>
            </div>
            <ul className='description'>
              {data.authority ? <li>{data.authority}</li> : null}
              {data.license_number ? <li>{data.license_number}</li> : null}
              {data.url ? (
                <li>
                  <a href={data.url}>{data.url}</a>
                </li>
              ) : null}
            </ul>
            <div style={{ marginLeft: "16px" }}>{data.started_on}</div>
          </PRWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Certification;
