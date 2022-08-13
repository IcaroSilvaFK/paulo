import { Container } from './styles';

interface ICardProps {
  heading: string;
  image: string;
}

export function CardProject({ heading, image }: ICardProps) {
  return (
    <Container>
      <div className="image__container">
        <img src={image} alt={heading} />
      </div>
      <div className="heading__content">
        <span>{heading}</span>
      </div>
      <button>Ver projeto</button>
    </Container>
  );
}
