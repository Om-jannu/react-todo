// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Todolist from './components/Todolist';
import './style/style.css';

function App() {
  const [inputlist,setinputlist] = useState("");
  const [items,setitems] = useState([]);
  var inputfield = document.querySelector("#inputfield");

  const itemevent=(event) =>{
    setinputlist(event.target.value);
  };

  const addlisthandler=()=>{
      
      if(inputfield.value!==""){
        setitems((olditems)=>{
          return [...olditems,inputlist];
        });
        inputfield.value="";
        setinputlist("");
      }else{
        alert("Enter Text you DUMBSHIT");
      }
  };
  const deletelisthandler=(id)=>{
    setitems((olditems)=>{
      return olditems.filter((element,index)=>{
        return index !== id;
      })
    })
}

  return (
    <>
    <div className="maindiv">
      <div className="container">
        <h2 className='title'>Wat-TODO</h2>
        <br />
          <input className='inputfield' autoComplete='off' id='inputfield' type="text" placeholder='Add a ToDo' onChange={itemevent}/>
          <button className='addbtn' onClick={addlisthandler}><i class="fas fa-plus"></i></button>
        <br />
        <ol className='listbox'>
          {/* <li>{inputlist}</li> */
          items.map((itemval,index)=>{
            return <Todolist
            text = {itemval}
            id={index}
            key={index}
            onselect={deletelisthandler}
            />;
          })
          }
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
