
import { authorize, getNormalizedGamesDataByCategory } from "./data/data-utils.js";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsList } from "./components/CardList/CardsList";


export default async function Home() {
  const popularGames = await getNormalizedGamesDataByCategory('https://api-code-2.practicum-team.ru/games','popular');
  const newGames = await getNormalizedGamesDataByCategory('https://api-code-2.practicum-team.ru/games', 'new');
  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярные" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}
