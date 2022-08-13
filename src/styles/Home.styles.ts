import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;

  overflow: hidden;
`;

export const ContainerFirtsContent = styled.div`
  background: ${({ theme }) => theme.colors.gray[900]};
  display: flex;
  flex-direction: column;

  height: 100vh;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const SectionProjects = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 50px auto;

  max-width: 1100px;

  .sectionProjects__header {
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
      color: ${({ theme }) => theme.colors.gray[900]};
    }
  }
`;

export const SectionCards = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 40px;

  margin: 50px auto;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;
