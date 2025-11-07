import { useState } from 'react'
import Button from './html/Button'
import Input from './html/Input'
//
const TodoEditor = ({ addTodo }: { addTodo: (title: string) => void }) => {
  const [text, setText] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text.trim()) return
    //trim절사이다
    addTodo(text)
    setText('')
  }

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <div className="todo__editor">
        <Input
          type="text"
          className="todo__input"
          placeholder="Enter Todo List"
          value={text}
          onChange={e => setText(e.target.value)}
        />

        <Button className="todo__button" type="submit">
          Add
        </Button>
      </div>
    </form>
  )
}

export default TodoEditor
//id : number
//title: string
//done:
//새로고침을 못하도록 상단고정
