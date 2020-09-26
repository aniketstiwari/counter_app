import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';


const TodoList = () => {
    const [num, updateCounter] = useState(0);
    
    const IncNum = () => {
        updateCounter(num + 1);
    }

    const DecNum = () => {
        if(num <= 0){
            alert("Enter valid number")
        }else{
            updateCounter(num - 1);
        }
        
    }

    return (
        <>
          <div className="main_div">
              <div className="center_div">
                  <h1>{num}</h1>
                  <div className="btn_div">
                      <button onClick={IncNum}><AddIcon/></button>
                      <button onClick={DecNum}><DeleteIcon/></button>
                  </div>
              </div>
          </div>
        </>
    )
}

export default TodoList;