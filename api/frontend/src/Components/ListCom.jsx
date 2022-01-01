import React, { useState, useEffect} from "react";
import moment from "moment"
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import alarm from "../alarmring.mp3"
import CountDownTimer from "./timer";
import swal from 'sweetalert2';
import { axiosInstance } from "../../config";

const ListCom = (props) => {
  const currentdatetime = moment(new Date()).format().split('+')[0];
  const [editeddate, setEditdate] = useState(props.dateval);

  let count = 0, alarmcnt;

  // if a task end -> make an alert
  if (currentdatetime === editeddate && !props.completed) {
    const playalarm = () => {
      count++;

      if (count === 2) {
        clearInterval(alarmcnt);
      }

      props.setObjects(props.arrayofobj.map((obj) => {
        if (obj.id === props.id) {
          return {
            ...obj, futuretask: false
          }
        }
        return obj;
      })
      )
      let alarmsound = new Audio(alarm);
      alarmsound.play();

      if (count === 2) {
        props.setObjects(props.arrayofobj.map((obj) => {
          if (obj.id === props.id) {
            return {
              ...obj, futuretask: true
            }
          }
          return obj;
        })
        )
      }
    }
    alarmcnt = setInterval(playalarm, 3000);
    swal.fire('The task "' + props.itemval + '" ended').then(() => {
      window.location = "/";
    });
  }
  //udpdate a task that has ended
  useEffect(()=>{
    const updateTask= async ()=>{
      if(currentdatetime >= editeddate && !props.completed){
        try {
          const res = await axiosInstance.put('/timer',
            {
              id:props.id,
              completed:true
            }
          );
          console.log('res',res)
        } catch (err) {
          console.log(err);
        }
      };
    }
      updateTask();
  },[props])

  return (
    <div className="todo_style"  >

      {props.edited ? (
        <>
          <input className="datetime editdt bigbtn" type="datetime-local" id="editdatetime" name="taskdatetime"
            value={editeddate} autoComplete="off" />

        </>
      )
        :
        (<>
          <span className="bigbtn">
            <DoneOutlineIcon className={props.completed ? "doneIcon CompletedIcon" : "doneIcon"} />
          </span>

          <li className="bigbtn">
            <div className={props.completed ? "itemdiv itdiv completetask" :
              (props.futuretask ? "itemdiv itdiv" : "itemdiv itdiv timeup")}>
              {props.itemval}

            </div>

            <div className={props.completed ? "timediv itdiv completetask" :
              (props.futuretask ? "timediv itdiv" : "timediv itdiv timeup")}>
              <CountDownTimer countdownTimestampMs={new Date(props.dateval)} />
            </div>
          </li>
        </>)
      }


      {props.edited ?
        (
          <>
            <li className="small_list">
              <input className="datetime smalleditdt" type="datetime-local" id="editdatetime" name="taskdatetime"
                value={editeddate} autoComplete="off" />

              <hr />
            </li>
          </>)
        :
        (<>
          <li className="small_list">
            <div className="donebtn">
              <span >
                <DoneOutlineIcon className={props.completed ? "doneIcon CompletedIcon" : "doneIcon"} />
              </span>
            </div>
            <div className="small_div">
              <div className={props.completed ? "small_checkitem itdiv completetask" :
                (props.futuretask ? "small_checkitem itdiv" : "small_checkitem itdiv timeup")}>
                {props.itemval}

              </div>

              <div className={props.completed ? "small_crosstime itdiv completetask" :
                (props.futuretask ? "small_crosstime itdiv" : "small_crosstime itdiv timeup")}>
                <CountDownTimer countdownTimestampMs={new Date(props.dateval)} />
              </div>
            </div>

            <hr />
          </li>
        </>)
      }
    </div>

  );
};

export default ListCom;