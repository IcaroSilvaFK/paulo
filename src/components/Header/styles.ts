import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 1100px;

  padding: 30px 0;

  margin: 0 auto;

  @media screen and (max-width: 500px) {
    justify-content: flex-end;

    padding: 30px 20px;
  }
`;

export const ListSVG = styled.ul`
  display: flex;
  gap: 22px;

  li {
    color: ${({ theme }) => theme.colors.gray[50]};

    transition: all linear 0.3s;

    :hover {
      color: ${({ theme }) => theme.colors.green[500]};
    }
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  color: ${({ theme }) => theme.colors.gray[50]};

  display: flex;
  gap: 20px;

  ul {
    display: flex;

    gap: 30px;

    li {
      transition: all linear 0.3s;

      :hover {
        color: ${({ theme }) => theme.colors.green[500]};
      }
    }
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const ButtonMobile = styled.button`
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    jusitfy-content: center;

    align-self: flex-end;

    background: transparent;
  }
`;
