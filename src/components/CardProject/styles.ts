import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};

  padding: 10px 30px;

  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.roboto};

  .image__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    img {
      height: 200px;
      max-width: 350px;
      object-fit: cover;
    }

    span {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
  .heading__content {
    max-width: 260px;
    flex: 1;
  }
  button {
    background: ${({ theme }) => theme.colors.gray[900]};
    color: ${({ theme }) => theme.colors.gray[100]};

    padding: 8px 16px;
    font-weight: bold;

    align-self: flex-start;

    margin: 20px 0;

    transition: all linear 0.3s;

    :hover {
      background: ${({ theme }) => darken(0.2, theme.colors.gray[900])};
    }
  }

  @media screen and (max-width: 500px) {
    div {
      img {
        margin-top: -50px;
      }
    }
  }
`;
