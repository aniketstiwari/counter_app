import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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
              <Tooltip title="Add">
                <Button onClick={IncNum} className="btn_green">
                  <AddIcon/>
                </Button>
              </Tooltip>
              <Tooltip title="Delete">
                <Button onClick={DecNum} className="btn_red"><DeleteIcon/></Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </>
    )
}

export default TodoList;