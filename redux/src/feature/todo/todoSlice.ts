import { createSlice, nanoid } from "@reduxjs/toolkit";

type ToDo = {
  id: string;
  text: string;
};

const initialState: { todos: ToDo[] } = { todos: [] };

const toDoSlice = createSlice({
  name: "To-do",
  initialState,
  reducers: {
    addToDo: (state, { payload }) => {
      state.todos.push({ id: nanoid(), text: payload });
    },
  },
});

export const { addToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
