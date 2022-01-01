import React, { useEffect, useState,useContext } from "react";
import AddTasks from "./AddTasks";
import ButtonsLayout from "./ButtonsLayout";
import { createTask } from "../taskContext/apiCalls";
import { TaskContext } from "../taskContext/TaskContext";
import swal from 'sweetalert2';


function CreateTaskScreen() {
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");
  const [addingItem, setAddingItem] = useState("");
  const [connection, setConnection] = useState(localStorage.getItem("localconnection") ? JSON.parse(localStorage.getItem("localconnection")) : []);
  const { dispatch } = useContext(TaskContext);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());


  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const dateEvent = (event) => {
    setDate(event.target.value + ':00');
    document.getElementById('taskdatetime').style.color = 'white';
  }


  const addingTaskEvent = (event) => {
    setAddingItem(event.target.value);
    swal.fire('The task has been added')
  }

  useEffect(()=>{
    if (item && date) { // if the user filled a date and title of the task
      createTask({ 
        id: makeid(10),
        itemVal: item,
        dateVal: date},dispatch)
    }
  },[addingItem,dispatch])

 //local storage to remember when the user has been connected for the last time
  useEffect(() => {
    localStorage.setItem("localconnection", JSON.stringify(currentTime));
  }, [currentTime])

  //function that make an id for each task
  const makeid=(length) =>{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
          charactersLength));
   }
   return result;
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <AddTasks item={item} itemEvent={itemEvent} dateEvent={dateEvent} date={date} AddItems={addingTaskEvent} />
          <ButtonsLayout />
          <br />
          <h3>Your last Connection was on : {connection}</h3>
        </div>
      </div>
    </>
  );
};

export default CreateTaskScreen;
