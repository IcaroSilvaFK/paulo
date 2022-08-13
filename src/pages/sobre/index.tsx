import Head from 'next/head';
import { useRouter } from 'next/router';
import { BsArrowLeft } from 'react-icons/bs';
import { TbFileDownload } from 'react-icons/tb';
import { ContactFooter } from '../../components/ContactFooter';

import { Header } from '../../components/Header';
import { MenuMobile } from '../../components/Mobile/Menu';
import { useOpenMenuMobile } from '../../hooks/useOpenMenuMobile';

import {
  Column,
  Grid,
  HabilitsSection,
  ListHeading,
  ListItem,
  Main,
  MarkerBlue,
  MarkerGray,
  MarkerGreen,
  MarkerOrange,
  MarkerPurple,
  MarkerYellow,
  Row,
  SectionButton,
  Separator,
  Ul,
} from '../../styles/Sobre.styles';

export default function Sobre() {
  const { handleCloseMenuMobile, handleOpenMenuMobile, isOpenMenuMobile } =
    useOpenMenuMobile();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Paulo UX</title>
      </Head>
      <Main>
        <Header handleOpenMobileMenu={handleOpenMenuMobile} />
        <Separator />
        <Row className="vh">
          <img src="/assets/paulo.png" alt="Paulo Nascimento" />
          <Column className="start">
            <div>
              <h1 className="first">Olá, Me chamo Paulo Nascimento</h1>
              <h1>
                <span>UI/UX Designer</span> do Rio de Janeiro
                <span>.</span>
              </h1>
            </div>
            <a href="/assets/curriculo.pdf" download>
              <button>
                <TbFileDownload size={25} />
                <span>Currículo</span>
              </button>
            </a>
          </Column>
        </Row>
        <Separator />
        <Column className="jornada">
          <h2>
            Um pouco sobre <br />
            minha jornada
          </h2>
          <p>
            Olá! Prazer, Me chamo Paulo Nascimento, tenho 19 anos e sou natural
            do Rio de Janeiro onde resido até o momento e sou completamente
            apaixonado por tecnologia. Meu contato com a tecnologia veio desde
            cedo com os jogos, até quando pude ter a oportunidade de fazer um
            curso técnico de informática em uma cidade vizinha e lá que de fato
            eu tive o primeiro contato com o mundo profissional da tecnologia, o
            curso era bem amplo e falou de praticamente todos os nichos da área
            onde eu pude aprender muito vendo de tudo um pouco e descobrindo o
            que eu realmente queria fazer. Depois de 2 anos e meio me formei no
            curso, e ja estava a beira de me formar no ensino médio. E veio
            aquela necessidade de buscar uma profissão que eu queria seguir, e
            até um pouco depois do meu ensino médio eu ainda não tinha definido
            o que eu queria de fato fazer. Só que o que eu sabia sobre mim, é
            que eu gostava de resolver problemas e também tinha um gosto pelo
            lado visual das coisas foi dai que começei a estudar programação e
            entrei na faculdade de Análise e Desenvolvimento de Sistemas onde eu
            buscava dentro e fora da faculdade me tornar um desenvolvedor
            front-end. E foi estudando e conversando com mais pessoas sobre as
            áreas e assuntos relacionados que eu conheci o UI/UX que é
            basicamente a mistura perfeita do que eu mais gosto de fazer. Que é
            cuidar do visual e resolver problemas usando a minha inteligência, e
            desde então nunca mais parei de estudar essa área e pretendo me
            especializar muito mais para adquirir cada vez mais conhecimentos.
          </p>
        </Column>
        <Separator />
        <HabilitsSection>
          <h2>Habilidades</h2>
          <Grid>
            <Ul>
              <ListHeading>UX Strategy</ListHeading>
              <ListItem>
                <MarkerOrange />
                Estratégia de mercado
              </ListItem>
              <ListItem>
                <MarkerOrange />
                Planeamento de negócio
              </ListItem>
              <ListItem>
                <MarkerOrange />
                ROI - Retorno de investimento
              </ListItem>
              <ListItem>
                <MarkerOrange />
                Gestão de projetos e produtos
              </ListItem>
              <ListItem>
                <MarkerOrange />
                Metodologias ágeis
              </ListItem>
              <ListItem>
                <MarkerOrange />
                Workshops e LDJ para facilitação de equipes
              </ListItem>
              <ListItem>
                <MarkerOrange />
                Avaliação de produtos digitais
              </ListItem>
              <ListItem>
                <MarkerOrange />
                Métricas HEART para medir Experiência do Usuário
              </ListItem>
              <ListItem>
                <MarkerOrange />
                Métricas AARRR para Produtos Digitais
              </ListItem>
              <ListItem>
                <MarkerOrange />
                Métricas de Equipe e OKRs
              </ListItem>
              <ListItem>
                <MarkerOrange />
                Roadmaps
              </ListItem>
            </Ul>
            <Ul>
              <ListHeading>UX Research</ListHeading>
              <ListItem>
                <MarkerBlue />
                Planejamento estratégico de pesquisa
              </ListItem>
              <ListItem>
                <MarkerBlue />
                Métodos de pesquisa qualitativa e quantitativa
              </ListItem>
              <ListItem>
                <MarkerBlue />
                Pesquisa documental
              </ListItem>
              <ListItem>
                <MarkerBlue />
                Métodos atitudinais e comportamentais
              </ListItem>
              <ListItem>
                <MarkerBlue />
                Análises com mapa de calor
              </ListItem>
              <ListItem>
                <MarkerBlue />
                Análise temática
              </ListItem>
              <ListItem>
                <MarkerBlue />
                Diagrama de afinidade
              </ListItem>
              <ListItem>
                <MarkerBlue />
                Análise quantitativa
              </ListItem>
              <ListItem>
                <MarkerBlue />
                Testes de usabilidade
              </ListItem>
              <ListItem>
                <MarkerBlue />
                Testes A/B
              </ListItem>
              <ListItem>
                <MarkerBlue />
                Análise de cliques
              </ListItem>
              <ListItem>
                <MarkerBlue />
                Análise e criação de personas
              </ListItem>
            </Ul>
            <Ul>
              <ListHeading>UX Writing</ListHeading>
              <ListItem>
                <MarkerGray />
                Definição de tom de voz
              </ListItem>
              <ListItem>
                <MarkerGray />
                Construção de vocabulário
              </ListItem>
              <ListItem>
                <MarkerGray />
                Microcopy e Melhor Leiturabilidade
              </ListItem>
              <ListItem>
                <MarkerGray />
                Métodos atitudinais e comportamentais
              </ListItem>
              <ListItem>
                <MarkerGray />
                Heurísticas de Conteúdo
              </ListItem>
              <ListItem>
                <MarkerGray />
                Storytelling
              </ListItem>
              <ListItem>
                <MarkerGray />
                Teste A/B
              </ListItem>
              <ListItem>
                <MarkerGray />
                Acessibilidade e inclusão
              </ListItem>
              <ListItem>
                <MarkerGray />
                Testes de usabilidade
              </ListItem>
              <ListItem>
                <MarkerGray />
                Testes A/B
              </ListItem>
              <ListItem>
                <MarkerGray />
                Análise de cliques
              </ListItem>
              <ListItem>
                <MarkerGray />
                Card sorting
              </ListItem>
            </Ul>
            <Ul>
              <ListHeading>UI Design</ListHeading>
              <ListItem>
                <MarkerPurple />
                Wireframes
              </ListItem>
              <ListItem>
                <MarkerPurple />
                Grids
              </ListItem>
              <ListItem>
                <MarkerPurple />
                Styleguide
              </ListItem>
              <ListItem>
                <MarkerPurple />
                Fundamento de Cores
              </ListItem>
              <ListItem>
                <MarkerPurple />
                Prototipação
              </ListItem>
              <ListItem>
                <MarkerPurple />
                Handoff
              </ListItem>
              <ListItem>
                <MarkerPurple />
                Hierarquia Visual
              </ListItem>
              <ListItem>
                <MarkerPurple />
                Tipografia
              </ListItem>
            </Ul>
            <Ul>
              <ListHeading>Front-end</ListHeading>
              <ListItem>
                <MarkerYellow />
                HTML
              </ListItem>
              <ListItem>
                <MarkerYellow />
                CSS
              </ListItem>
              <ListItem>
                <MarkerYellow />
                JAVASCRIPT
              </ListItem>
              <ListItem>
                <MarkerYellow />
                Bootstrap
              </ListItem>
              <ListItem>
                <MarkerYellow />
                Materialize
              </ListItem>
            </Ul>
          </Grid>
          <Separator />
          <h2>Ferramentas</h2>
          <Ul className="ferramentas">
            <ListItem>
              <MarkerGreen />
              Figma
            </ListItem>
            <ListItem>
              <MarkerGreen />
              Adobe XD
            </ListItem>
            <ListItem>
              <MarkerGreen />
              JAVASCRIPT
            </ListItem>
            <ListItem>
              <MarkerGreen />
              Trello
            </ListItem>
          </Ul>
        </HabilitsSection>
        <SectionButton>
          <button onClick={() => router.push('/')}>
            <BsArrowLeft />
            voltar para o início
          </button>
        </SectionButton>

        <ContactFooter />
      </Main>
      <MenuMobile
        isOpen={isOpenMenuMobile}
        handleCloseMenuMobile={handleCloseMenuMobile}
      />
    </>
  );
}
