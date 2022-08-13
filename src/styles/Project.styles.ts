import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;
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
`;

export const Separator = styled.div`
  margin-top: 50px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
