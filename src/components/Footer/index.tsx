import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <p>Me mande uma mensagem</p>
      <ul>
        <li>
          <BsWhatsapp size={20} />
          <span>Whatsapp</span>
        </li>
        <li>
          <BsLinkedin size={20} />
          <span>LInkedin</span>
        </li>
        <li>
          <HiOutlineMail size={20} />
          <span>E-mail</span>
        </li>
      </ul>
    </Container>
  );
}
