import React from "react";
import styled from "styled-components";

import IntroductionView from "./IntroductionView";
import StatsView from "./StatsView";
import RepositoriesView from "./RepositoriesView";
import ContributionsView from "./ContributionsView";
import EducationView from "./EducationView";

const OptionsWrapper = styled.div`
  padding: 1rem 0;
  text-align: left;
`;

export default () => {
  return (
    <OptionsWrapper>
      <EducationView />
      <IntroductionView />
      <StatsView />
      <RepositoriesView />
      <ContributionsView />
    </OptionsWrapper>
  );
};
