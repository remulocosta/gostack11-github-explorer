import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

interface ContainerProps {
  hasOpacity: number;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 30px;
`;

export const Form = styled.form<FormProps>`
  position: relative;
  margin-top: 30px;
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
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.5);

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.5);

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 10px;
`;

export const Repositories = styled.div`
  margin-top: 10px;
  max-width: 700px;
`;

export const ContainerDel = styled.div<ContainerProps>`
  display: flex;
  height: 120px;
  max-width: 700px;
  border: 3px dashed rgba(255, 0, 0, 0.3);
  border-radius: 0;
  background: rgba(255, 0, 0, 0.1);
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  opacity: 0;

  ${props =>
    props.hasOpacity &&
    css`
      opacity: ${props.hasOpacity};
    `}

  svg {
    color: red;
    opacity: 0.4;
  }
`;
