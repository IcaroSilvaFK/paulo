import Link from 'next/link';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiBehanceFill, RiInstagramLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';

import { ButtonMobile, Container, ListSVG, Nav } from './styles';

interface IHeaderProps {
  handleOpenMobileMenu(): void;
}

export function Header({ handleOpenMobileMenu }: IHeaderProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <ListSVG>
        <li>
          <a
            href="https://www.instagram.com/paulok1ngs/"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramLine size={23} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/paulonascimentouiux/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={23} />
          </a>
        </li>

        <li>
          <a
            href="https://www.behance.net/paulonascimentoUX/"
            target="_blank"
            rel="noreferrer"
          >
            <RiBehanceFill size={23} />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/c/K1NGS"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube size={23} />
          </a>
        </li>
      </ListSVG>
      <Nav>
        <ul>
          <li>
            <Link href="/assets/curriculo.pdf" download="PauloCurriculo">
              <a>Currículo</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Projetos</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </Nav>
      <ButtonMobile onClick={handleOpenMobileMenu}>
        <GiHamburgerMenu size={28} color={colors.gray[50]} />
      </ButtonMobile>
    </Container>
  );
}
