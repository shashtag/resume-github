import React from "react";
import styled from "styled-components";

import IntroductionView from "./IntroductionView";
import StatsView from "./StatsView";
import RepositoriesView from "./RepositoriesView";
import ContributionsView from "./ContributionsView";
import EducationView from "./EducationView";
import SkillsView from "./SkillsView";
import CertificationView from "./CertificationView";

const OptionsWrapper = styled.div`
  padding: 1rem 0;
  text-align: left;
`;

export default () => {
  return (
    <OptionsWrapper>
      <EducationView />
      <SkillsView />
      <IntroductionView />
      <StatsView />
      <RepositoriesView />
      <ContributionsView />
      <CertificationView />
    </OptionsWrapper>
  );
};
