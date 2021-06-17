import React, { useState } from "react";
import TodoItem from "./components/TodoItem"

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
  newSele: string;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      newTodo: "",
      newSele:"",
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    this.setState({
      newTodo: e.target.value,
    });
  }
  handleNewSele = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    this.setState({
      newSele: e.target.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if(this.state.newTodo === ""){
      e.preventDefault();
      console.log("22")
      const items = this.state.todoItems.concat()
      this.setState({
        todoItems: items,
        newTodo: "",
        newSele:this.state.newSele,
      })

    }else{
      e.preventDefault();
      console.log("111")
      const items = this.state.todoItems.concat(this.state.newTodo+"("+this.state.newSele+")")
      this.setState({
        todoItems: items,
        newTodo: "",
        newSele:this.state.newSele,
    })
    }
  }

  render() {
    return (
      <div >
        <div style={{border: '2px solid black',backgroundColor: '#b5d7f5'}}> 
        <h3>TODO</h3>
       
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">뭘 해야하나요?</label> <br />
          주제    :<input type="text" id="new-todo" value={this.state.newSele} onChange={this.handleNewSele} /> <br />
          할 일 :<input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br />
          

          <button>Add #{this.state.todoItems.length + 1}</button>
        </form>
        </div>
        <div style={{border: '2px solid black'}}>
        {
          this.state.todoItems.map((item, idx) => (
            <TodoItem name={item} key={idx}/>
          ))
        }
          </div>
      </div>
    )
  }
}

export default TodoApp;