import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import InputForm from '../components/InputForm'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Hero />
        <InputForm />
      </HomeContainer>
    </>
  )
}

export default Home