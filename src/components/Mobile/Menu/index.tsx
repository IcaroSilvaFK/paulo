import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { RiBehanceFill, RiInstagramLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';

import { Container, ContainerButtonClose, ListSVG } from './styles';

interface IMenuMobileProps {
  isOpen: boolean;
  handleCloseMenuMobile(): void;
}

export function MenuMobile({
  handleCloseMenuMobile,
  isOpen,
}: IMenuMobileProps) {
  const { colors } = useTheme();

  if (!isOpen) {
    return null;
  }

  return (
    <Container>
      <ContainerButtonClose>
        <button onClick={handleCloseMenuMobile}>
          <AiOutlineClose color={colors.gray[50]} size={30} />
        </button>
      </ContainerButtonClose>
      <nav>
        <ul>
          <li>
            <Link href="/assets/curriculo.pdf" download="PauloCurriculo">
              <a>Currículo</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Projetos</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
      <ListSVG>
        <li>
          <RiInstagramLine size={22} />
        </li>
        <li>
          <FaLinkedin size={22} />
        </li>
        <li>
          <RiBehanceFill size={22} />
        </li>
        <li>
          <FaYoutube size={22} />
        </li>
      </ListSVG>
    </Container>
  );
}
