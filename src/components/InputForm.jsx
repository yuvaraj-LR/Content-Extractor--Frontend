import React from 'react'
import styled from 'styled-components'
import { StaticImage } from '../static/image';
import { useContentContextHook } from '../context/content.context';
import { PulseLoader } from 'react-spinners';

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
  font-size: 16px;
  font-weight: 500;
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

const Loader = styled.div`
  position: absolute;
  top: calc(50% + 60px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 25;
`

const InputForm = () => {

  const { url, setUrl, handleSubmitForm, loading } = useContentContextHook();

  return (
    <>
      <FormContainer onSubmit={(e) => handleSubmitForm(e)}>
        <LinkImage src={StaticImage.LinkIcon} alt="Link-icon"  />

        <InputField value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Enter a public url (https://www.google.com/)' />

        { loading ? <Loader> <PulseLoader color='#ffffff' /></Loader> : null }

        <SubmitButton>Extract Now</SubmitButton>
      </FormContainer>
    </>
  )
}

export default InputForm