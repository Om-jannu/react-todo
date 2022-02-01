import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react';
import Todolist from './components/Todolist';

function App() {
  const [inputlist,setinputlist] = useState("");
  const [items,setitems] = useState([]);
  var inputfield = document.querySelector("#inputfield");

  const itemevent=(event) =>{
    setinputlist(event.target.value);
  };

  const addlisthandler=()=>{
      
      if(inputfield.value!=""){
        setitems((olditems)=>{
          return [...olditems,inputlist];
        });
        inputfield.value="";
        setinputlist("");
      }else{
        alert("Enter Text you DUMBSHIT")
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
        <h2>TODO List</h2>
        <br />
        <input id='inputfield' type="text" placeholder='Add a ToDo' onChange={itemevent}/>
        <button onClick={addlisthandler}>+</button>
        <br />
        <ol>
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
