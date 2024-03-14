
import { CardsList } from '../components/CardList/CardsList'
import { getNormalizedGamesDataByCategory } from '../data/data-utils'

export default async function Popular() {
    const newGames = await getNormalizedGamesDataByCategory('https://api-code-2.practicum-team.ru/games', 'popular')
  return (
    <main className='main'>
         <CardsList id='popular' title='Популярные' data={newGames}/>
    </main>
  )
}
