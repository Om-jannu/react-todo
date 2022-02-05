import React from 'react';
const Todolist=(props) =>{
  return (
    <>
    <div className='listdiv'>
      <li className='list'><button className='crossbtn' onClick={()=>{
          props.onselect(props.id);
      }}><i class="fas fa-trash"></i></button>{props.text} <div className="checkline"><input className='checkbox' type="checkbox" name="check"/></div></li>
    </div>
    </>
  )
}

export default Todolist;
