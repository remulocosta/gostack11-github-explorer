import styled, { css } from 'styled-components';

interface ContainerProps {
  isDragging: boolean;
}

export const Container = styled.div<ContainerProps>`
  & + div {
    margin-top: 16px;
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.5);

    display: flex;
    align-items: center;
    transition: transform 0.2s;
    cursor: grab;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
  ${props =>
    props.isDragging &&
    css`
      border: 3px dashed rgba(0, 0, 0, 0.2);
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;
      margin-top: 16px;

      a {
        opacity: 0;
      }
    `}
`;
