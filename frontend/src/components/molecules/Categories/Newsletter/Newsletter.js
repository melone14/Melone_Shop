import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Wrapper = styled.section`
  height: 25vh;
  background: #00174f;
  padding: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.active {
    height: 57vh;
  }
`;

const StyledTitle = styled.h1`
  font-size: 1.85rem;
  padding: 0.5rem 0;
`;

const StyledParagraph = styled.p`
  font-size: 1.4rem;
  padding-bottom: 1rem;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`;

const ExpandedWrapper = styled.div`
  height: 30vh;
  padding-top: 1rem;
  display: none;
  &.active {
    display: block;
  }
`;

const ChecksWrapper = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Category = styled.div`
  padding-right: 4rem;
`;

const SubmitButton = styled.input`
  padding: 1rem;
  width: 100%;
  background: white;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  border: none;
  outline: none;
`;

const PrivacyCheckWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  & > label {
    display: flex;
  }

  & > label > p {
    padding-left: 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: white;
`;

const Newsletter = () => {
  const [activeEmail, setActiveEmail] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleEmailClick = () => {
    setActiveEmail((prevActiveEmail) => !prevActiveEmail);
  };

  return (
    <>
      <Wrapper className={activeEmail ? 'active' : null}>
        <StyledTitle>SUBSCRIBE TO THE NEWSLETTER</StyledTitle>
        <StyledParagraph>
          Stay up to date with our news and get a 10% discount on your first order
        </StyledParagraph>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            type="text"
            placeholder="Enter email address"
            name="email"
            ref={register({ required: true })}
            autoComplete="off"
            onClick={handleEmailClick}
          />
          {errors.email && <p>Wprowadź maila kurwa!</p>}
          <ExpandedWrapper className={activeEmail ? 'active' : null}>
            <ChecksWrapper>
              <Category>
                <label htmlFor="women">
                  <input type="checkbox" defaultChecked name="women" id="women" />
                  Women
                </label>
              </Category>
              <Category>
                <label htmlFor="men">
                  <input type="checkbox" defaultChecked name="men" id="men" />
                  Men
                </label>
              </Category>
              <Category>
                <label htmlFor="children">
                  <input type="checkbox" defaultChecked name="children" id="children" />
                  Children
                </label>
              </Category>
            </ChecksWrapper>
            <PrivacyCheckWrapper>
              <label htmlFor="privacy">
                <input type="checkbox" name="privacy" id="privacy" className="privacy" />
                <p>
                  Subscribe to receive Melone Newsletter (Communication regarding our products,
                  services and events). By subscribing you agree to our{' '}
                  <StyledLink to="/">Privacy Policy</StyledLink> . *
                </p>
              </label>
            </PrivacyCheckWrapper>
            <SubmitButton type="submit" value="SUBSCRIBE" />
          </ExpandedWrapper>
        </form>
      </Wrapper>
    </>
  );
};

export default Newsletter;
