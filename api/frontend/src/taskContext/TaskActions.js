// get tasks
export const getTasksStart = () => ({
  type: "GET_TASKS_START",
});

export const getTasksSuccess = (tasks) => ({
  type: "GET_TASKS_SUCCESS",
  payload: tasks,
});

export const getTasksFailure = () => ({
  type: "GET_TASKS_FAILURE",
});

// Create
export const createTaskStart = () => ({
  type: "CREATE_TASK_START",
});

export const createTaskSuccess = (task) => ({
  type: "CREATE_TASK_SUCCESS",
  payload: task,
});

export const createTaskFailure = () => ({
  type: "CREATE_TASK_FAILURE",
});


// update
export const updateTaskStart = () => ({
  type: "UPDATE_TASK_START",
});

export const updateTaskSuccess = (task) => ({
  type: "UPDATE_TASK_SUCCESS",
  payload: task,
});

export const updateTaskFailure = () => ({
  type: "UPDATE_TASK_FAILURE",
});
