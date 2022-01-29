import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react';
function App() {
  const [inputlist,setinputlist] = useState("");
  const [items,setitems] = useState([]);


  const itemevent=(event) =>{
    setinputlist(event.target.value);
  };

  const addlisthandler=()=>{
    setitems((olditems)=>{
      return [...olditems,inputlist];
    });
  };

  return (
    <>
    <div className="maindiv">
      <div className="container">
        <h2>TODO List</h2>
        <br />
        <input type="text" placeholder='Add a ToDo' onChange={itemevent}/>
        <button onClick={addlisthandler}>+</button>
        <br />
        <ol>
          {/* <li>{inputlist}</li> */
          items.map((itemval)=>{
            return <li>{itemval}</li>
          })
          }
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
