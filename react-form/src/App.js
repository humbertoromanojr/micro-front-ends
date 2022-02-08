import React, { useState } from 'react';
import Parcel from 'single-spa-react/parcel'

const App = ({ name }) => {
  const [task, updateTask] = useState('')

  const handleChange = event => {
    updateTask(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    console.log('SAVING...')

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