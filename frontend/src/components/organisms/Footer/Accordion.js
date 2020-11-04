import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import plus from "../../../assets/icons/plus.svg";
import minus from "../../../assets/icons/minus.svg";

const Wrapper = styled.div`
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    css`
      & > ${List} {
        max-height: 400px;
        opacity: 1;
      }
      & > ${MainText}:after {
        content: url(${minus});
      }
    `};
  @media (max-width: 42.5rem) {
    cursor: auto;
  }
`;

const MainText = styled.div`
  position: relative;
  display: block;
  padding: 20px 0;
  font-weight: 700;
  color: #dedfe0;
  font-size: 1.8rem;

  &:after {
    content: url(${plus});
    position: absolute;
    width: 20px;
    height: 20px;
    right: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  opacity: 0;
  padding: 0;
  margin: 0;
  max-height: 0vh;
  overflow: hidden;
  transition: max-height 0.4s, opacity 0.25s;
`;

const ListItem = styled.li`
  padding: 0.8rem 0;
  font-size: 1.4rem;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #c5c7c9;
  transition: 0.15s;

  &:hover {
    color: #dedfe0;
  }
`;

const Accordion = ({ heading, links }) => {
  const [isActive, setActive] = useState(false);

  const expand = () => {
    setActive(!isActive);
  };

  return (
    <Wrapper onClick={expand} isActive={isActive}>
      <MainText>{heading}</MainText>
      <List>
        {links.map(({ path, name }) => (
          <ListItem key={name}>
            <StyledLink to={path}>{name}</StyledLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

Accordion.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Accordion;
