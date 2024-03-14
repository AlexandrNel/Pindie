
import { CardsList } from '../components/CardList/CardsList'
import { getNormalizedGamesDataByCategory } from '../data/data-utils'

export default async function Shooter() {
  const newGames = await getNormalizedGamesDataByCategory('https://api-code-2.practicum-team.ru/games', 'shooter')
  return (
    <main className='main'>
         <CardsList id='shooter' title='Шутеры' data={newGames}/>
    </main>
  )
}
