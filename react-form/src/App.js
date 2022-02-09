import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import Parcel from 'single-spa-react/parcel'
import { emitEvent } from '@jrdev/utils'

const App = ({ name }) => {
  const [task, updateTask] = useState('')

  const handleChange = event => {
    updateTask(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    emitEvent('@jrdev/react-form/todo/add-task', {
      id: uuid(),
      describe: task,
    })

    updateTask('')
  }

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>ADD</button>
      </form>
      <Parcel 
        config={() => System.import('@jrdev/react-parcel')}
      />
    </>
  )
}

export default App;