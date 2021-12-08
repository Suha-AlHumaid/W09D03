// Define an initial state value for the app
const initialState = {
  tasks: [],
};

// Create a "reducer" function that determines what the new state
// should be when something happens in the app
const reducerTasks = (state = initialState, action) => {
  const { type, payload } = action;
  // Reducers usually look at the type of action that happened
  // to decide how to update the state

  switch (type) {
    case "ALL_TASKS":
      return { tasks: payload };

    case "ADD_TASK":
      const tasks = [...state.tasks, payload];
      return { tasks };

    case "DELETE_TASK":
      console.log("payload",payload);
     const filteredTasks= state.tasks.filter(elem=>elem._id !== payload._id)
       return {tasks:[...filteredTasks]};

    case "EDIT_TASK":
      const {task} = payload
     const updated=state.tasks.map(elem=>{
     
        if(elem._id === payload._id){
          return task
        }else{
          return elem
        }
      })
      return {tasks: updated };

    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
};

export default reducerTasks;

export const allTasks = (data) => {
  console.log("all", data);
  return {
    type: "ALL_TASKS",
    payload: data,
  };
};

export const addTaskk = (data) => {
  console.log("data", data);
  return {
    type: "ADD_TASK",
    payload: data,
  };
};

export const deleteTaskk = (data) => {
  return {
    type: "DELETE_TASK",
    payload: data,
  };
};

export const editTaskk = (data) => {
  return {
    type: "EDIT_TASK",
    payload: data,
  };
};

