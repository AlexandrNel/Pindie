
import { CardsList } from '../components/CardList/CardsList'
import { getNormalizedGamesDataByCategory } from '../data/data-utils'

export default async function New() {
  const newGames = await getNormalizedGamesDataByCategory('https://api-code-2.practicum-team.ru/games', 'new')
  return (
    <main className='main'>
         <CardsList id='new' title='Новинки' data={newGames}/>
    </main>
  )
}
