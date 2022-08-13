import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[900]};
  display: flex;
  flex-direction: column;

  height: 100vh;

  .description__project {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.gray[50]};

    gap: 15px;
    span {
      color: ${({ theme }) => theme.colors.gray[100]};
      text-align: center;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  line-height: 150%;

  & + & {
    margin-top: 100px;
  }

  p {
    font-weight: 300;
  }
  h3 {
    font-size: 1.8rem;
  }

  .project {
    margin-top: -140px;
  }

  .project__employe {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    max-width: 790px;

    margin: 60px auto;

    gap: 20px;

    color: ${({ theme }) => theme.colors.gray[900]};

    p {
      text-align: left;

      font-family: ${({ theme }) => theme.fonts.roboto};

      span {
        font-weight: bold;
      }
    }
  }

  &.gray__section {
    background: ${({ theme }) => theme.colors.gray[100]};

    padding: 40px 0;

    font-family: ${({ theme }) => theme.fonts.roboto};

    .problem {
      text-align: left;
      max-width: 790px;
      color: ${({ theme }) => theme.colors.gray[900]};
      padding: 20px 0;
    }
    .diagram {
      max-width: 790px;
      padding: 50px 0;

      p + p {
        margin-top: 12px;
      }
    }
  }

  .graphic {
    width: 950px;
    margin-top: 40px;
  }

  .flex__images {
    flex: 1;
    max-width: 1200px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      max-width: 600px;

      object-fit: cover;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;

    text-align: center;
    .project {
      margin-top: -60px;

      max-width: 250px;
    }

    p {
      padding: 20px;
      text-align: center;
    }

    .graphic {
      width: 350px;
    }
    &.gray__section {
      img {
        width: 280px;
      }
    }
    .flex__images {
      flex-direction: column;
      gap: 40px;

      img {
        width: 300px;
      }
    }
    .jornada {
      width: 100%;
    }

    .holy__web {
      img {
        width: 350px;
      }
    }
  }
`;

export const Separator = styled.div`
  margin-top: 50px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100vh;
    margin-top: -100px;
    align-items: center;
    justify-content: center;

    div {
      margin-top: -100px;
      img {
        width: 130px;
      }
    }

    div:nth-child(2) {
      align-self: flex-end;
    }
  }
`;
