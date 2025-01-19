import React from 'react'
import './App.css'
import { TodoTasksList } from './components/ToDoTaskList/TodoTasksList';
import { TypeInput } from './components/TypeInput/TypeInput';

function App() {

  return (
    <>
      <TodoTasksList />
      <TypeInput onChange={()=>{} } type={'text'} />
    </>
  )
}

export default App
