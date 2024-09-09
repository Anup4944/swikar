import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "./feature/todo/todoSlice";

type ToDo = {
  id: string;
  text: string;
};

function App() {
  const [input, setInput] = useState<string>("");

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  function handleOnSubmit(e: any) {
    e.preventDefault();

    dispatch(addToDo(input));
    setInput("");
  }

  return (
    <div>
      <h1>Day-13 To do app</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>

      {todos.map((item) => {
        return (
          <p>
            {item.id} : {item.text}
          </p>
        );
      })}
    </div>
  );
}

export default App;
