import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useTheme } from 'styled-components';

import { CardProject } from '../components/CardProject';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MenuMobile } from '../components/Mobile/Menu';
import { Presentation } from '../components/Presentation';
import { useOpenMenuMobile } from '../hooks/useOpenMenuMobile';

import {
  ContainerFirtsContent,
  Main,
  SectionCards,
  SectionProjects,
} from '../styles/Home.styles';

const Home: NextPage = () => {
  const { colors } = useTheme();
  const { handleCloseMenuMobile, handleOpenMenuMobile, isOpenMenuMobile } =
    useOpenMenuMobile();
  const router = useRouter();

  function handlePushToHoly() {
    router.push('/projects/holy');
  }
  function handlePushToNikCraft() {
    router.push('/projetcts/holy');
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <ContainerFirtsContent>
          <Header handleOpenMobileMenu={handleOpenMenuMobile} />
          <Presentation />
        </ContainerFirtsContent>
        <SectionProjects>
          <div className="sectionProjects__header">
            <h2>Projetos</h2>
            <MdKeyboardArrowDown color={colors.gray[900]} size={25} />
          </div>
          <SectionCards>
            <CardProject
              image="/assets/img_holy.png"
              heading="Holy - App de agenda para igrejas"
              onClick={handlePushToHoly}
            />
            <CardProject
              image="/assets/notebook_bikcraft.png"
              heading="Bikcraft - ecommerce de bicicletas modernas e inovadoras"
              onClick={handlePushToNikCraft}
            />
          </SectionCards>
        </SectionProjects>
        <Footer />
      </Main>
      <MenuMobile
        isOpen={isOpenMenuMobile}
        handleCloseMenuMobile={handleCloseMenuMobile}
      />
    </>
  );
};

export default Home;
