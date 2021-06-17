import React from "react";

interface TodoItemProps {
  name: string;
}

function TodoItem(props: TodoItemProps) {
  
  return(
    <div>
      <div style={{backgroundColor: '#ffcbc7'}}>
        <input type = "checkbox"></input>
      {props.name}
      </div>
    </div>
  )
}
//asd
export default TodoItem;