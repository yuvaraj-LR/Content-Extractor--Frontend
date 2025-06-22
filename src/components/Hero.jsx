import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  width: 100%;
  gap: 16px;
  margin: 25px auto 20px;

  @media(min-width: 768px) {
    gap: 20px;
  }

  @media(min-width: 1200px) {
    gap: 24px;
  }
`

const HeroMainText = styled.h1`
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  font-family: "Roboto Slab", serif;
  background-image: linear-gradient(144deg,rgba(255, 255, 255, 1) 0%, rgba(102, 102, 102, 1) 100%);
  color: transparent;
  background-clip: text;
  font-weight: 500;

  @media(min-width: 768px) {
    font-size: 55px;
    line-height: 62px;
  }

  @media(min-width: 1200px) {
    font-size: 70px;
    line-height: 76px;
  }
`

const HeroSubHeading = styled.h3`
  font-size: 12px;
  line-height: 25px;
  text-align: center;
  font-weight: 200;
  max-width: 820px;
  width: 100%;
  margin: auto;

  @media(min-width: 768px) {
    font-size: 16px;
    line-height: 27px;
  }

  @media(min-width: 1200px) {
    font-size: 20px;
    line-height: 32px;
  }
`

const Hero = () => {
  return (
    <HeroContainer>
      <HeroMainText>From raw pages to clean text, instantly and reliably.</HeroMainText>

      <HeroSubHeading>Paste any URL. Webstract instantly extracts clean, structured content using AI — ready for you to use, summarize, or analyze. </HeroSubHeading>
    </HeroContainer>
  )
}

export default Hero