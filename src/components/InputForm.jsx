import React from 'react'
import styled from 'styled-components'
import { StaticImage } from '../static/image';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 820px;
  width: 100%;
  margin: auto;
  position: relative;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const InputField = styled.input`
  border: 2px solid #ccc;
  padding: 16px 10px 16px 50px;
  background: transparent;
  width: 100%;
  border-radius: 10px;
  color: #fff;
`;

const SubmitButton = styled.button`
  min-width: 200px;
  background: #240751;
  background: linear-gradient(144deg,rgba(36, 7, 81, 1) 40%, rgba(0, 0, 0, 1) 100%);
  color: #fff;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-transform: uppercase;
  min-height: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #240751;
    background: linear-gradient(144deg,rgba(36, 7, 81, 1) 0%, rgba(0, 0, 0, 1) 100%);
    transform: scale(1.02);
  }

`;

const LinkImage = styled.img`
  position: absolute;
  width: 20px;
  height: 30px;
  top: 10px;
  left: 16px;
` 

const InputForm = () => {
  return (
    <>
      <FormContainer>
        <LinkImage src={StaticImage.LinkIcon} alt="Link-icon"  />

        <InputField placeholder='Enter a public url (https://www.google.com/)'></InputField>

        <SubmitButton>Extract Now</SubmitButton>
      </FormContainer>
    </>
  )
}

export default InputForm