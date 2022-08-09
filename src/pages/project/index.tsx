import type { NextPage } from 'next';
import Head from 'next/head';
import { IoIosArrowDown } from 'react-icons/io';

import { Header } from '../../components/Header';
import { MenuMobile } from '../../components/Mobile/Menu';
import { useOpenMenuMobile } from '../../hooks/useOpenMenuMobile';

import { Container, Main, Section } from '../../styles/Project.styles';

const Project: NextPage = () => {
  const { handleCloseMenuMobile, handleOpenMenuMobile, isOpenMenuMobile } =
    useOpenMenuMobile();

  return (
    <>
      <Head>
        <title>Project </title>
      </Head>
      <Main>
        <Container>
          <Header handleOpenMobileMenu={handleOpenMenuMobile} />
          <div className="description__project">
            <h1>Holy</h1>
            <span>App de agenda para igrejas</span>
            <IoIosArrowDown size={35} />
          </div>
        </Container>
        <Section>
          <img src="/assets/holy.png" alt="Holy" className="project" />
          <div className="project__employe">
            <h3>Sobre a empresa</h3>
            <p>
              O Holy é um produto da empresa <span>Next Solutions</span> cujo
              objetivo é solucionar problemas presentes no nosso cotidiano
              visando também a melhor usabilidade das pessoas, facilitando e
              construindo de uma forma mais moderna os nossos hábitos atuais.
            </p>
          </div>
        </Section>
        <Section className="gray__section">
          <h3>Problema</h3>
          <div>
            <p>
              Hoje em quase todas as igrejas as festas e eventos são marcados e
              divulgados por mini jornais da própria igreja, calendários, etc.,
              gastando uma parte da verba arrecadada com a produção desses
              produtos que ainda funcionam, mas que podem ser perdidos bem
              facilmente, amassados, molhados, etc.
            </p>
          </div>
        </Section>
        <Section>
          <div className="project__employe">
            <h3>Processo</h3>
            <p>
              O primeiro passo do processo, foi fazer um brainding de como
              queriam o desenvolvimento do produto, quais eram as preferências,
              se teriam alguma preterição e como seria o estilo da marca. Depois
              fomos para a pesquisa de mercado que foi inclusive bem complicada
              pois não tem tantos outros serviços como esse no mercado até
              mundial, após conseguir inspirações e uma base do nicho que estava
              sendo trabalhado, foram feitas mais pesquisas com possíveis
              clientes do produto para saber mais sobre suas dores e
              necessidades, sendo 3 dias de pesquisas. Com base nos resultados
              dessa pesquisa fui direto para validação das informações, para
              separar bem o que era essencial e o que eu poderia descartar de
              informação. Somente com essas pesquisas já tive materiais
              suficientes para construir as personas.
            </p>
          </div>
        </Section>
        <Section className="gray__section">
          <h3>Diamante Duplo</h3>
          <div>
            <img src="/assets/diamanteux.png" alt="diamante ux" />
          </div>
        </Section>
        <Section>
          <div className="project__employe">
            <h3>Pesquisa</h3>
            <p>
              As pesquisas foram feitas cuidadosamente com perguntas objetivas
              mas que respondiam muito sobre o mercado, foram feitas por
              formulários e pesquisas diretamente com os usuários.
            </p>
          </div>
          <img
            src="/assets/pesquisaholly.png"
            alt="pesquisa holy graphic"
            className="graphic"
          />
        </Section>
        <Section className="gray__section">
          <h3>Mapeamento de afinidade</h3>
          <div className="diagram">
            <p>
              Com os insights obtidos através da pesquisa foi feito um
              mapeamento de afinidade e agrupamos os insights por similaridades.
            </p>
            <p>A partir dai foram produzidas as personas.</p>
          </div>
          <img
            src="/assets/diagramaafinidade.png"
            alt="Diagrama de afinidade"
          />
        </Section>
        <Section>
          <h3>Personas</h3>
          <div className="flex__images">
            <img src="/assets/persona1.png" alt="persona1" />
            <img src="/assets/persona2.png" alt="persona2" />
          </div>
        </Section>
      </Main>
      <MenuMobile
        isOpen={isOpenMenuMobile}
        handleCloseMenuMobile={handleCloseMenuMobile}
      />
    </>
  );
};

export default Project;
