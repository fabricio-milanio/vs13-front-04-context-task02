import { Link } from 'react-router-dom';
import { NavContainer } from './navBar';

export default function NavBar() {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/about">Sobre</Link>
    </NavContainer>
  );
}
