import ReactTypingEffect from 'react-typing-effect';

import { Container } from './styles';

const labels = [
  'UX Writer',
  'User Interface',
  'UX Strategy',
  'UI/UX Developer',
  'Product Design',
  'Usability Testing',
  'UX Research',
];

export function Presentation() {
  return (
    <Container>
      <h1>
        Olá, Me chamo <br />
        Paulo Nascimento <br />
        <span>
          <ReactTypingEffect
            text={labels}
            typingDelay={50}
            speed={20}
            eraseDelay={50}
          />
        </span>
      </h1>
    </Container>
  );
}
