import { Link } from 'react-router-dom';
import logoImg from '../../assets/game-icon.svg';
import NavBar from '../navBar/NavBar';
import { HeaderContainer } from './header';

export default function Header() {
  return (
    <HeaderContainer>
      <header>
        <div className="header-left">
          <Link to="/">
            <img
              src={logoImg}
              alt="controle de video game como logo da aplicação"
            />
          </Link>
        </div>
        <div className="header-right">
          <NavBar />
        </div>
      </header>
    </HeaderContainer>
  );
}
