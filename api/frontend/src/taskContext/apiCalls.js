import {
  createTaskFailure,
  createTaskStart,
  createTaskSuccess,
  getTasksFailure,
  getTasksStart,
  getTasksSuccess,
  updateTaskStart,
  updateTaskSuccess,
  updateTaskFailure,
} from "./TaskActions";
import { axiosInstance } from "../config";

// get all tasks
export const getTasks = async (dispatch) => {
  dispatch(getTasksStart());
  let searchParams=new URLSearchParams(window.location.search).get("completed");
  try {
    const res =await axiosInstance.get(
      `${searchParams ? "list-timers?completed=" + searchParams : "list-timers"}`
    );
    dispatch(getTasksSuccess(res.data));
  } catch (err) {
    dispatch(getTasksFailure());
  }
};

//create
export const createTask = async (task, dispatch) => {
  dispatch(createTaskStart());
  try {
    const res = await axiosInstance.post("/timer", task);
    dispatch(createTaskSuccess(res.data));
  } catch (err) {
    dispatch(createTaskFailure());
  }
};

//update
export const updateTask = async (task, dispatch) => {
  dispatch(updateTaskStart());
  try {
    const res = await axiosInstance.put("/timer", task);
    console.log(res.data);
    dispatch(updateTaskSuccess(res.data));
  } catch (err) {
    dispatch(updateTaskFailure());
  }
};


