import './App.css'
import { useState, useEffect } from 'react'
import { Header } from './Mycomponents/Header'
import { Todos } from './Mycomponents/Todos'
import { Footer } from './Mycomponents/Footer'
import { Addtodo } from './Mycomponents/Addtodo'
import { About } from './Mycomponents/About'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  let initTodo
  if (localStorage.getItem('todos') == null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }
  const onDelete = (todoToDelete) => {
    let modifiedtodos = todos
    let newTodoList = modifiedtodos.filter((todoItem) => {
      return todoItem !== todoToDelete
    })
    settodos(newTodoList)
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const [todos, settodos] = useState(initTodo)

  const addToDo = (t, d) => {
    let sno
    if (todos.length === 0) {
      sno = 0
    } else {
      sno = todos[todos.length - 1].sno + 1
    }
    let todoObj = {
      sno: sno,
      title: t,
      desc: d,
    }
    settodos([...todos, todoObj])
  }
  // by the time, settodos run, it is not sure that if has completed its task of adding todos.
  // useEffect() hooks helps in this.

  useEffect(() => {
    // Save these todos to LocalStorage object
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Addtodo addToDo={addToDo}></Addtodo>
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              )
            }}
          ></Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
