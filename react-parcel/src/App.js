import React, { useState, useEffect } from 'react';
import { listenEvent } from '@jrdev/utils'

const App = () => {
  const [tasks, updateTasks] = useState([])

  useEffect(() => {
    listenEvent('@jrdev/react-form/todo/add-task', event => {
      updateTasks(oldTasks => [
        ...oldTasks,
        event.detail,
      ])
    })
  }, [])

  return (
    <>
      <h1>@jrdev/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TASK</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App;