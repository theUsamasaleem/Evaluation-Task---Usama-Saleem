import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #282B2D;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
    color: #FFFFFF;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.5;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: #3A533C;
    border: 3px solid #3A533C;
    border-radius: 10px;
    color: #fff;
  }
`;
