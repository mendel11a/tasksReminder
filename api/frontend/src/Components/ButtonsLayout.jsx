import React from 'react';
import { useHistory } from "react-router-dom";

function ButtonsLayout(){
    const history = useHistory();
    const completedOption = () =>{
        history.push('/list-timers?completed=true' );
    }
    const unCompletedOption = () =>{
        history.push('/list-timers?completed=false' );
    }
    const allTasksOption = () =>{
        history.push('/list-timers' );
    }

    return (
        <div className="buttons-container">
          <button className="button"  onClick={allTasksOption}>All</button>
          <button className="button"  onClick={completedOption}>Completed</button>
          <button className="button"  onClick={unCompletedOption}>Uncompleted</button>
        </div>
    );
}
export default ButtonsLayout;