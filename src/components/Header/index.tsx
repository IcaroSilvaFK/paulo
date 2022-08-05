import Link from 'next/link';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { RiBehanceFill, RiInstagramLine } from 'react-icons/ri';

import { Container, ListSVG, Nav } from './styles';

export function Header() {
  return (
    <Container>
      <ListSVG>
        <li>
          <a href="/">
            <RiInstagramLine size={23} />
          </a>
        </li>
        <li>
          <a href="/">
            <FaLinkedin size={23} />
          </a>
        </li>

        <li>
          <a href="/">
            <RiBehanceFill size={23} />
          </a>
        </li>
        <li>
          <a href="/">
            <FaYoutube size={23} />
          </a>
        </li>
      </ListSVG>
      <Nav>
        <ul>
          <li>
            <Link href="">
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
    </Container>
  );
}
