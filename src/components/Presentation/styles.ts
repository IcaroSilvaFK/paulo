import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  color: ${({ theme }) => theme.colors.gray[50]};

  h1 {
    font-weight: 400;
    font-size: 3.6rem;

    span {
      color: ${({ theme }) => theme.colors.green[500]};
      font-weight: bold;
    }
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;
