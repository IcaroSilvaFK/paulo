import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 40px;

  background: ${({ theme }) => theme.colors.gray[900]};
  color: ${({ theme }) => theme.colors.gray[50]};

  padding: 60px 0;

  ul {
    display: flex;

    align-items: center;

    gap: 40px;

    li {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;
