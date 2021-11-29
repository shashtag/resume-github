import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 16px 0;
  font-family: "Noticia Text", serif;
  text-align: center;
  .links {
    margin: 10px 0;
    font-size: 15px;
    line-height: 24px;
  }
  .attribution {
    text-align: right;
    font-size: 12px;
    margin-top: 32px;
  }
  a {
    color: var(--repoTitleColor);
  }
`;

function Footer({ username, githubUrl, websiteUrl, twitterUsername }) {
  return (
    <FooterWrapper>
      <div className='links'>
        <div>@{username}</div>
        <div>
          <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
            {githubUrl}
          </a>
        </div>
        <div>
          <a href={websiteUrl} target='_blank' rel='noopener noreferrer'>
            {websiteUrl}
          </a>
        </div>
        {twitterUsername ? (
          <div>Twitter Handle - @{twitterUsername}</div>
        ) : null}
      </div>
    </FooterWrapper>
  );
}

export default Footer;
