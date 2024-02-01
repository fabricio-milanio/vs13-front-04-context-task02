import { Link } from 'react-router-dom';
import { NotFoundContainer } from './notFound';

export default function NotFound() {
  return (
    <NotFoundContainer>
      <h1>
        <i className="ph ph-warning-circle"></i>404 - Página não encontrada
      </h1>
      <Link to="/">Página Inicial</Link>
    </NotFoundContainer>
  );
}
