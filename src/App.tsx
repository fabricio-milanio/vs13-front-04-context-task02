import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { GlobalStyles } from './GlobalStyles';
import { PageContainer } from './styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Games from './pages/games/Games';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </PageContainer>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
