import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'
function Section({
  title,
  backgroundImg,
  description,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
       <Zoom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Zoom>
      <Fade bottom>

      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="images/down-arrow.svg" />
      </Buttons>
      </Fade>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url(images/${props.bgImage})`};
  z-index:10;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: 10;
`;

const Buttons = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 23, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display:flex;
  justify-content:center;
  align-items: center;
  border-radius:100px;
  opacity:0.85;
  text-transform:uppercase:
  font-size:12px;
  cursor:pointer;
  margin:8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string,
};

Section.defaultProps = {
  description: "Order Online for Touchless Delivery",
  leftBtnText: "Custom Order",
  
  backgroundImg: "model-s.jpg",
};
