import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GameProvider } from './context/gameContext/GameContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { GlobalStyles } from './GlobalStyles';
import { PageContainer } from './styles';
import Home from './pages/home/Home';
import Games from './pages/games/Games';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';

function App() {
  return (
    <BrowserRouter>
      <GameProvider>
        <PageContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </PageContainer>
      </GameProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
