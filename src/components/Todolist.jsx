import React from 'react';

const Todolist=(props) =>{
  return (
    <>
    <div>
      <li><button onClick={()=>{
          props.onselect(props.id);
      }}>x</button>{props.text}</li>
    </div>
    </>
  )
}

export default Todolist;
