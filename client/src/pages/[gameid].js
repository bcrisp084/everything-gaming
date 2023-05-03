import { useRouter } from 'next/router'

export default function (){
  const router = useRouter()
  const { gameid } = router.query
  console.log(gameid)
  return (
    <div>
      <h1>Game</h1>
      <p>Game page</p>
    </div>
  )
}