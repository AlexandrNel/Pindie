import { getNormalizedGamesDataByCategory} from '../data/data-utils'
import { CardsList } from '../components/CardList/CardsList'

export default async function Runner() {
  const newGames = await getNormalizedGamesDataByCategory('https://api-code-2.practicum-team.ru/games', 'runner')
  return (
    <main className='main'>
         <CardsList id='runner' title='Ранеры' data={newGames}/>
    </main>
  )
}
