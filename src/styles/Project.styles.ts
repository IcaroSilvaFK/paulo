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

    h3 {
      font-size: 1.4rem;
    }

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

    div {
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
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top: 60px;

    img {
      max-width: 600px;

      object-fit: cover;
    }
  }
`;
