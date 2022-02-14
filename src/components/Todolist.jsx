import React from 'react';
const Todolist=(props) =>{
  return (
    <>
    <div className='listdiv'>
      <li className='list'>
      <div className="checkline"><input id='cbox' className='checkbox' type="checkbox" name="check"/></div>
      <div className="listtext">{props.text}</div>
       
      </li>
      <div className="delbtndiv"><button className='crossbtn' onClick={()=>{
          props.onselect(props.id);
        }}><i class="fas fa-trash"></i></button></div>
    </div>
    </>
  )
}

export default Todolist;
