import { Container } from './styles';

interface ICardProps {
  heading: string;
  image: string;
  onClick?: () => void;
}

export function CardProject({ heading, image, onClick }: ICardProps) {
  return (
    <Container>
      <div className="image__container">
        <img src={image} alt={heading} />
      </div>
      <div className="heading__content">
        <span>{heading}</span>
      </div>
      <button onClick={onClick}>Ver projeto</button>
    </Container>
  );
}
