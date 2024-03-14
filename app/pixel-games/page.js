
import { CardsList } from '../components/CardList/CardsList'
import { getNormalizedGamesDataByCategory } from '../data/data-utils'

export default async function PixelGames() {
  const newGames = await getNormalizedGamesDataByCategory('https://api-code-2.practicum-team.ru/games', 'pixel')
  return (
    <main className='main'>
         <CardsList id='pixel' title='Пиксельные' data={newGames}/>
    </main>
  )
}
