import { shade } from 'polished';
import styled, { keyframes, css } from 'styled-components';

interface FormProps {
  hasError: boolean;
  loading: string;
}

interface ContainerProps {
  hasOpacity: number;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 40px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  ${props =>
    props.loading &&
    css`
      button svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 10px;
`;

export const Repositories = styled.div`
  margin-top: 50px;
  max-width: 700px;
`;

export const ContainerDel = styled.div<ContainerProps>`
  position: fixed;
  z-index: 10;
  top: 0;
  clear: both;
  margin-bottom: 0;
  width: 100%;

  display: flex;
  height: 120px;
  border: 3px dashed rgba(255, 0, 0, 0.3);
  border-radius: 0;
  background: rgba(255, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  opacity: 0;
  left: 0;

  svg {
    color: red;
    opacity: 0.4;
  }

  ${props =>
    props.hasOpacity &&
    css`
      opacity: ${props.hasOpacity};
    `}
`;
