import styled from 'styled-components';

export const Main = styled.main`
  background: ${({ theme }) => theme.colors.gray[900]};

  height: 100%;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.gray[50]};

  &.vh {
    height: 100vh;

    img {
      max-width: 500px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;

    margin-top: 100px;

    &.vh {
      height: auto;

      margin-bottom: 120px;

      img {
        max-width: 120px;
      }
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  gap: 50px;

  align-items: center;

  button {
    color: ${({ theme }) => theme.colors.green[500]};
    padding: 14px 32px;

    background: ${({ theme }) => theme.colors.gray[50]};

    border-radius: 2px;

    display: flex;
    align-items: center;

    gap: 5px;

    span {
      font-size: 1rem;
    }
  }
  div {
    .first {
      font-weight: 400;
    }
    max-width: 400px;

    h1 {
      font-size: 2.6rem;

      span {
        color: ${({ theme }) => theme.colors.green[500]};
      }
    }
  }

  &.start {
    align-items: center;
    flex: 1;

    margin-top: 100px;
  }

  &.jornada {
    text-align: left;
    align-items: flex-start;

    h2 {
      text-align: left;
      font-size: 2.5rem;
    }

    color: ${({ theme }) => theme.colors.gray[50]};

    max-width: 1200px;

    margin: 0 auto;
  }

  @media screen and (max-width: 500px) {
    gap: 10px;

    div {
      max-width: 250px;
      h1 {
        font-size: 20px;
      }
    }

    &.start {
      flex: 1;

      margin-top: 10px;
      margin-left: 8px;
    }

    button {
      color: ${({ theme }) => theme.colors.green[500]};
      padding: 8px 22px;

      background: ${({ theme }) => theme.colors.gray[50]};

      border-radius: 2px;

      display: flex;
      align-items: center;

      gap: 5px;

      width: 150px;

      span {
        font-size: 1rem;
      }
    }
    &.jornada {
      text-align: center;

      h2 {
        text-align: center;
        font-size: 1.8rem;
        width: 100%;

        padding: 10px;
      }

      color: ${({ theme }) => theme.colors.gray[50]};

      p {
        padding: 10px;
      }
    }
  }
`;

export const Separator = styled.div`
  margin-top: 50px;
`;

export const HabilitsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    color: ${({ theme }) => theme.colors.gray[50]};
    text-transform: uppercase;

    font-size: 2rem;
    &::after {
      display: block;
      content: '';
      height: 2px;
      width: 150px;
      background: ${({ theme }) => theme.colors.green[500]};
      margin-top: -6px;
    }
  }

  @media screen and (max-width: 500px) {
    h2 {
      text-align: center;
      &::after {
        margin-left: 82px;
      }
    }
  }
`;

export const Ul = styled.ul`
  margin-top: 50px;

  &.ferramentas {
    margin-top: 20px;
    li {
      font-weight: bold;
      font-size: 1, 875rem;
      color: ${({ theme }) => theme.colors.gray[50]};
    }
  }

  @media screen and (max-width: 500px) {
    &.ferramentas {
      padding: 50px;
    }
  }
`;

export const ListHeading = styled.p`
  color: ${({ theme }) => theme.colors.gray[50]};
  font-size: 1.4rem;
  font-weight: bold;

  margin-bottom: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;

    padding: 50px;
  }
`;

export const MarkerOrange = styled.div`
  height: 4px;
  width: 10px;

  background: #ff5c00;
`;
export const MarkerBlue = styled.div`
  height: 4px;
  width: 10px;

  background: #214d89;
`;
export const MarkerGray = styled.div`
  height: 4px;
  width: 10px;

  background: #9c9c9c;
`;
export const MarkerPurple = styled.div`
  height: 4px;
  width: 10px;

  background: #ff00e5;
`;
export const MarkerYellow = styled.div`
  height: 4px;
  width: 10px;

  background: #feb80a;
`;

export const MarkerGreen = styled.div`
  height: 4px;
  width: 10px;

  background: #044848;
`;

export const SectionButton = styled.div`
  margin: 80px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    cursor: pointer;

    background: transparent;

    font-weight: bold;

    display: flex;
    align-items: center;

    gap: 5px;

    color: ${({ theme }) => theme.colors.gray[50]};

    font-size: 1.2rem;
  }
`;
