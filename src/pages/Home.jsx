import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import InputForm from '../components/InputForm'
import ContentExtraction from '../components/PopupForContentExtraction';

import { useContentContextHook } from '../context/content.context'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

const Home = () => {
  const { contentDisplay } = useContentContextHook();

  return (
    <>
      <HomeContainer>
        <Hero />
        <InputForm />

        { contentDisplay ? <ContentExtraction /> : null }
      </HomeContainer>
    </>
  )
}

export default Home