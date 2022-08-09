import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  padding: 30px 0;

  color: ${({ theme }) => theme.colors.gray[900]};

  p {
    font-weight: 600;
    font-size: 1.1rem;
  }

  ul {
    display: flex;
    gap: 40px;

    li {
      display: flex;
      align-items: center;

      gap: 6px;

      span {
        font-weight: 600;
        font-size: 0.875rem;
      }
    }
  }

  @media screen and (max-width: 500px) {
    ul {
      padding: 20px;
      gap: 20px;
    }
  }
`;
