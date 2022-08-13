import type { NextPage } from 'next';
import Head from 'next/head';
import { IoIosArrowDown } from 'react-icons/io';
import { ContactFooter } from '../../components/ContactFooter';

import { Header } from '../../components/Header';
import { MenuMobile } from '../../components/Mobile/Menu';
import { useOpenMenuMobile } from '../../hooks/useOpenMenuMobile';
import {
  Container,
  Main,
  Section,
  Separator,
} from '../../styles/Project.styles';

const Project: NextPage = () => {
  const { handleCloseMenuMobile, handleOpenMenuMobile, isOpenMenuMobile } =
    useOpenMenuMobile();

  return (
    <>
      <Head>
        <title>Bikcraft</title>
      </Head>
      <Main>
        <Container>
          <Header handleOpenMobileMenu={handleOpenMenuMobile} />
          <div className="description__project">
            <h1>Bikcraft</h1>
            <span>E-commerce de bicicletas modernas e inovadoras</span>
            <IoIosArrowDown size={35} />
          </div>
        </Container>
        <Section>
          <img src="/assets/mackbookpage.png" alt="Holy" className="project" />
          <div className="project__employe">
            <h3>Sobre a empresa</h3>
            <p>
              O Bikcraft é um E-commerce de bicicletas mordernas e inovadoras
              cujo cada bikcraft é única e possui a sua identidade. As medidas
              serão exatas para o seu corpo e altura, garantindo maior conforto
              e ergonomia na sua pedalada. Então é de fato é uma empresa que
              veio para revolucionar o mercado no Brasil.
            </p>
          </div>
        </Section>
        <Section className="gray__section">
          <h3>Problema</h3>
          <div className="problem">
            <p>
              Entrar de fato no mercado nacional com vendas e alugueis de
              bicicletas feitas com tecnologia queatende a todos os tipos de
              públicos não importando muito a fisionomia do cliente.
            </p>
          </div>
        </Section>
        <Section>
          <div className="project__employe">
            <h3>Processo</h3>
            <p>
              O processo para desenvolver esse E -commerce na web foi de fato
              fazer uma boa análise do mercado e dos competidores diretos e
              indiretos nesse segmentto atravez de pesquisas e depois a
              validação de todas as informações que foram colatadas. Com base em
              todo o estudo feito, juntamos tudo que era útil para o projeto e
              começamos a dar vida ao bikcraft.
            </p>
          </div>
        </Section>
        <Section className="gray__section">
          <h3>Diamante Duplo</h3>
          <Separator />
          <div>
            <img src="/assets/diamanteux.png" alt="diamante ux" />
          </div>
        </Section>
        <Section>
          <div className="project__employe">
            <h3>Pesquisa</h3>
            <Separator />
            <p>
              As pesquisas foram feitas cuidadosamente com perguntas objetivas
              mas que respondiam muito sobre o mercado, foram feitas por
              formulários e pesquisas diretamente com os usuários.
            </p>
          </div>
          <img
            src="/assets/graphicircle.png"
            alt="pesquisa holy graphic"
            className="graphic"
          />
        </Section>
        <Section className="gray__section">
          <h3>Mapeamento de afinidade</h3>
          <Separator />
          <div className="diagram">
            <p>
              Com os insights obtidos através da pesquisa foi feito um
              mapeamento de afinidade e agrupamos os insights por similaridades.
              A partir dai foram produzidas as personas.
            </p>
            <p>A partir dai foram produzidas as personas.</p>
          </div>
          <img
            src="/assets/afinidadebikcraft.png"
            alt="Diagrama de afinidade"
          />
        </Section>
        <Section>
          <h3>Personas</h3>
          <Separator />
          <div className="flex__images">
            <img src="/assets/Persona1bikcraft.png" alt="persona1" />
            <img src="/assets/persona2bikcraft.png" alt="persona2" />
          </div>
        </Section>
        <Section className="gray__section">
          <h3>Análise de competidores</h3>
          <Separator />
          <div className="flex__images">
            <img src="/assets/competidoresbikcraft.png" alt="persona1" />
            <img src="/assets/competidortes2bikcraft.png" alt="persona2" />
          </div>
        </Section>

        <Section className="gray__section">
          <h3>Wireframe</h3>
          <Separator />
          <img
            src="/assets/wireframe1Bicke.png"
            alt="Wireframe"
            style={{ maxWidth: 900 }}
          />
        </Section>
        <Section>
          <h3>MVP</h3>
          <Separator />
          <Separator />
          <div className="holy__web">
            <img src="/assets/bikcraftfinal.png" alt="bickecraft web" />
          </div>
        </Section>
        <Section className="gray__section">
          <h3>Próximos passos</h3>
          <Separator />
          <div className="problem">
            <p>
              O bikcraft tem como próximo passo a expansão para um aplicativo
              digital que as pessoas podemde forma facilitada comprar e alugar
              suas bicicletas e também pedir ajuda no suporte caso forpreciso de
              acontecer da bicicleta ter algum dano na rua, e também implementar
              rastreadores quesão ligados juntamenteo a localização no
              aplicativo no seu celular com a opção de conseguiremitir um alerta
              caso o usuário for furtado ou coisa do tipo, ajudando a localizar
              e contataras autoridades mais perto.
            </p>
          </div>
        </Section>
        <Section>
          <h3>Resultados e Aprendizados</h3>
          <div className="project__employe">
            <p>
              Projeto fictício em que exercitei habilidades como de UI/UX em
              geral e pude melhorar minhas percepções sobre alinhamentos e sobre
              pesquisas com usuários e steakholders.
            </p>
          </div>
        </Section>
        <ContactFooter />
      </Main>
      <MenuMobile
        isOpen={isOpenMenuMobile}
        handleCloseMenuMobile={handleCloseMenuMobile}
      />
    </>
  );
};

export default Project;
