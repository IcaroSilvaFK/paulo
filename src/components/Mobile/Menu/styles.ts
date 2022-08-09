import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: ${({ theme }) => theme.colors.gray[900]};

  display: flex;
  align-items: center;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.gray[50]};

  font-size: 1.1rem;

  nav {
    ul {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const ListSVG = styled.ul`
  display: flex;
  gap: 20px;

  margin-top: 40px;
`;

export const ContainerButtonClose = styled.div`
  padding: 30px 30px;

  display: flex;
  justify-content: flex-end;

  width: 100%;

  button {
    background: transparent;
  }
`;
