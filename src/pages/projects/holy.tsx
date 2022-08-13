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
  Row,
  Section,
  Separator,
} from '../../styles/Project.styles';

const Project: NextPage = () => {
  const { handleCloseMenuMobile, handleOpenMenuMobile, isOpenMenuMobile } =
    useOpenMenuMobile();

  return (
    <>
      <Head>
        <title>Holy</title>
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
          <div className="problem">
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
            src="/assets/pesquisaholly.png"
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
          <Separator />
          <div className="flex__images">
            <img src="/assets/persona1.png" alt="persona1" />
            <img src="/assets/persona2.png" alt="persona2" />
          </div>
        </Section>
        <Section className="gray__section">
          <h3>Análise de competidores</h3>
          <Separator />
          <div className="flex__images">
            <img src="/assets/competidor1.png" alt="persona1" />
            <img src="/assets/competidor2.png" alt="persona2" />
          </div>
        </Section>
        <Section>
          <Separator />
          <img
            src="/assets/jornadausuario.png"
            alt="jornada usuario"
            style={{ maxWidth: 900 }}
            className="jornada"
          />
        </Section>
        <Section className="gray__section">
          <h3>Wireframe</h3>
          <Separator />
          <img
            src="/assets/wireframe.png"
            alt="Wireframe"
            style={{ maxWidth: 900 }}
          />
        </Section>
        <Section>
          <h3>MVP</h3>
          <Separator />
          <Row>
            <div>
              <img
                src="/assets/holyapphome.png"
                alt="Wireframe"
                style={{ maxWidth: 900 }}
              />
            </div>
            <div>
              <img
                src="/assets/holyappagenda.png"
                alt="Wireframe"
                style={{ maxWidth: 900 }}
              />
            </div>
            <div>
              <img
                src="/assets/holyappeventos.png"
                alt="Wireframe"
                style={{ maxWidth: 900 }}
              />
            </div>
          </Row>
          <Separator />
          <div className="holy__web">
            <img src="/assets/holyweb.png" alt="holy web" />
          </div>
        </Section>
        <Section className="gray__section">
          <h3>Próximos passos</h3>
          <Separator />
          <div className="problem">
            <p>
              O Holy tem em vista um crescimento muito bom no nicho que está
              sendo trabalhando pela escassez de serviços, tendo isso em mente
              os próximos passos seriam tentar acostumar os usuários com essa
              interface simples e prática mas por outro lado funcional e com o
              passar das atualizações ja ir implementando novas funcionalidades
              e outros serviços do nicho que podem ser implementados dentro do
              próprio holy.
            </p>
          </div>
        </Section>
        <Section>
          <h3>Resultados e Aprendizados</h3>
          <div className="project__employe">
            <p>
              Esse projeto foi um desafio e tanto pois foi tirado da ideia até o
              resultado de MVP final feito unicamente por mim que era o único
              contratado para fazer toda a parte de UI E UX, aprendi e
              aperfeiçoei mais meus conhecimentos em geral mas principalmente em
              UX Research pois tive que fazer muitos tipos de pesquisas para
              chegar no resultado esperado para a empresa.
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
