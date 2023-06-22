import { useState, useEffect } from 'react'
import { setBaseUrl, getUsers } from './api'
import './App.css'

setBaseUrl('http://127.0.0.1:3042')

function App() {
  const [users, setUsers] = useState<Awaited<ReturnType<typeof getUsers>>>([])

  useEffect(() => {
    async function fetchUsers() {
      const users = await getUsers({})
      setUsers(users)
    }

    fetchUsers()
  }, [])

  return (
    <>
      <h1>Vite + React</h1>
       {users.length === 0 ? (
        <div>No users yet</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.fullName}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
