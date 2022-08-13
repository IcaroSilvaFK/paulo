import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import { Container } from './styles';

export function ContactFooter() {
  return (
    <Container>
      <h3>Contato</h3>
      <h3>Me mande uma mensagem</h3>
      <ul>
        <li>
          <BsWhatsapp />
          <span>Whatsapp</span>
        </li>
        <li>
          <BsLinkedin />
          <span>LInkedin</span>
        </li>
        <li>
          <HiOutlineMail />
          <span>E-mail</span>
        </li>
      </ul>
    </Container>
  );
}
