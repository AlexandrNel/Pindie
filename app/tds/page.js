
import { CardsList } from '../components/CardList/CardsList'
import { getNormalizedGamesDataByCategory } from '../data/data-utils'

export default async function TDS() {
  const newGames = await getNormalizedGamesDataByCategory('https://api-code-2.practicum-team.ru/games', 'TDS')
  return (
    <main className='main'>
         <CardsList id='TDS' title='TDS' data={newGames}/>
    </main>
  )
}
