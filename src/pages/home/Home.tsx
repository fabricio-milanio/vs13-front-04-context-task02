import { Link } from 'react-router-dom';
import bannerGamer from '../../assets/banner-games.jpg';
import { HomeContainer } from './home';

export default function Home() {
  return (
    <HomeContainer>
      <div className="div-img">
        <img src={bannerGamer} alt="" />
      </div>
      <h1>Seja Bem-vindo a melhor página de games</h1>
      <p>
        **Explorando Mundos Virtuais: Sua Jornada nos Jogos Começa Aqui!**
        Bem-vindo ao nosso universo de jogos, onde a aventura nunca termina e a
        emoção está sempre à espreita. No coração deste reino digital, você
        encontrará uma coleção diversificada de jogos que prometem desafios,
        diversão inigualável e a chance de se perder em mundos extraordinários.
        Descubra a magia da jogabilidade imersiva, onde suas escolhas moldam o
        curso da narrativa e cada desafio superado traz uma recompensa única.
        Desde jogos de estratégia cerebral até épicos repletos de ação, nossa
        plataforma oferece algo para todos os tipos de jogadores. Explore vastos
        mundos abertos, repletos de maravilhas e segredos. Enfrente criaturas
        místicas, embarque em missões épicas e forme alianças estratégicas com
        outros jogadores. Nossos jogos proporcionam uma experiência única, onde
        a camaradagem e a competição se encontram. Não importa se você é um
        jogador casual procurando escapar da rotina diária ou um veterano ávido
        por desafios mais complexos, temos algo que irá cativar sua imaginação.
        Nossa biblioteca de jogos é constantemente atualizada para garantir que
        você esteja sempre na vanguarda da emoção virtual. Além dos jogos,
        oferecemos comunidades vibrantes onde jogadores de todo o mundo podem se
        conectar, compartilhar dicas e truques, e celebrar suas conquistas.
        Junte-se a nós e faça parte de uma família global unida pela paixão
        pelos jogos. Prepare-se para uma jornada emocionante. Seja você um herói
        destemido, um estrategista astuto ou um explorador curioso, há um mundo
        esperando para ser conquistado. Então, equipe-se, aprimore suas
        habilidades e embarque na sua aventura digital conosco. O seu próximo
        desafio está a um clique de distância. Vamos jogar! Quer conhecer todos
        os jogos?
      </p>
      <Link to="/games">Clique aqui</Link>
    </HomeContainer>
  );
}
