const TaskReducer = (state, action) => {
  switch (action.type) {
    case "GET_TASKS_START":
      return {
        tasks: [],
        isFetching: true,
        error: false,
      };
    case "GET_TASKS_SUCCESS":
      return {
        tasks: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_TASKS_FAILURE":
      return {
        tasks: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_TASK_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_TASK_SUCCESS":
      return {
        tasks: [...state.tasks, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_TASK_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_TASK_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_TASK_SUCCESS":
      return {
        tasks: state.tasks.map(
          (task) => task.id === action.payload.id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_TASK_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default TaskReducer;