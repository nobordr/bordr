import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Career Success Made Simple</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>career resources database</FeatureTitle>
          <FeatureText>
            Detailed guides and resources for career planning and advancement in multiple countries.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>automate the paperwork</FeatureTitle>
          <FeatureText>
            Save time using our software to automate repetitive application processes.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>admissions calculator</FeatureTitle>
          <FeatureText>
            Accurately understand your chances of getting accepted into any university or college.
          </FeatureText> 
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>nobordr fellowship</FeatureTitle>
          <FeatureText>
            Hands-on mentorship for high-achieving 11th & 12th graders wanting to excel in university & internship applications.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>jobs & internships</FeatureTitle>
          <FeatureText>Use our extensive guides on landing the internship and job you want.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>expert consultation</FeatureTitle>
          <FeatureText>
            Looking for 1 on 1 help? Get a hold of an expert consultant today!
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
