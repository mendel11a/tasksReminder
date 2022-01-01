import React, { useEffect, useState, useContext } from "react";
import ListObj from "./ListCom";
import { TaskContext } from "../taskContext/TaskContext";
import { getTasks } from "../taskContext/apiCalls";



function AllTasksScreen() {
  const [arrayofobj, setObjects] = useState(localStorage.getItem("localtodos") ? JSON.parse(localStorage.getItem("localtodos")) : []);
  const { tasks, dispatch } = useContext(TaskContext);
  //to get the query if task completed or not
  const searchParams = new URLSearchParams(window.location.search).get("completed");
  const [currentdatetime, setTime] = useState("");




  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setTime(new Date().toLocaleString('en-GB'));
  }

  useEffect(() =>{
      getTasks(dispatch);
  }, [dispatch]);

return (
  <>
    <div className="main_div">
      <div className="center_div">

        {searchParams === 'true' ?
          <h3>Completed Tasks</h3>
          :
          searchParams === 'false' ?
            <h3>UnCompleted Tasks</h3>
            :
            <h3>All Tasks</h3>

        }

        <ol>
          {

            tasks.map((val, index) => {

              return <ListObj key={index} id={val.id}
                itemval={val.itemVal}
                dateval={val.dateVal}
                completed={val.completed}
                futuretask={val.futuretask}
                edited={val.edited}
                arrayofobj={arrayofobj}
                setObjects={setObjects}
              />

            })
          }
        </ol>
        <br />
      </div>
    </div>
  </>
);
};

export default AllTasksScreen;
