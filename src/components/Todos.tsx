import {useEffect, useState} from 'react'

const USERS = [
  {id: 1, name: 'Alex'},
  {id: 2, name: 'Andriy'},
  {id: 3, name: 'Oleg'},
]

const loadUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(USERS), 2000)
  })
}

export const Todos = () => {
  const [users, setUsers] = useState<unknown[]>([])
  const [loading, setIsLoading] = useState(false)

  useEffect(() => {
    const getUsers = async() => {
      try {
        setIsLoading(true)
        const data = await loadUsers()

        setUsers((data as unknown[]))
      } catch (error) {
        console.log(error, 'error')
      }
      finally {
        setIsLoading(false)
      }
    }

    getUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>LOADED</h1>
    </div>
  )
}
