import { TwitterFollowCard } from './TwitterFollowCard'
import { users } from './users'
import './App.css'

export function App() {
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard key={ userName } userName={ userName } initialIsFollowing={ isFollowing }>
                        { name }
                    </TwitterFollowCard>                 
                ))
            }
        </section>
    )
}