import { useState, useEffect } from 'react'
import { getUsers } from './api'
import './App.css'

function App() {
  const [users, setUsers] = useState<Awaited<ReturnType<typeof getUsers>>>([])

  useEffect(() => {
    async function fetchUsers() {
      const users = await getUsers({
      })
      setUsers(users)
    }

    fetchUsers()
  }, [])

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-6xl">Known Users</h1>
         {users.length === 0 ? (
          <div>No users yet</div>
        ) : (

        <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
          <div className="relative rounded-xl overflow-auto">
            <div className="shadow-sm overflow-hidden my-8">
              <table className="table-auto w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">id</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Full name</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">email</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{user.id}</td>
                    <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">{user.fullName}</td>
                    <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">{user.email}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        )}
      </div>
    </>
  )
}

export default App
