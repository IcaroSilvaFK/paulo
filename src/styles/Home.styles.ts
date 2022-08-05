import styled from 'styled-components';

export const Main = styled.main``;

export const ContainerFirtsContent = styled.div`
  background: ${({ theme }) => theme.colors.gray[900]};
  display: flex;
  flex-direction: column;

  height: 100vh;

  .content__presentation {
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
      }
    }
  }
`;
