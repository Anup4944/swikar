import { useState } from "react";
import "./App.css";

type ToDo = {
  id: string;
  text: string;
};

function App() {
  const [input, setInput] = useState<string>("");
  const [toDo, setToDo] = useState<ToDo[]>([]);

  function handleOnSubmit(e: any) {
    e.preventDefault();
    setToDo([...toDo, { id: Math.random().toString(), text: input }]);
    console.log(toDo);
    setInput("");
  }

  function handleOnDelete(id: string) {
    const filteredToDo = toDo.filter((item) => item.id !== id);
    setToDo(filteredToDo);
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

      {toDo.map((item) => {
        return (
          <p key={item.id}>
            {item.id} : {item.text}{" "}
            <button onClick={() => handleOnDelete(item.id)}>Delete</button>
          </p>
        );
      })}
    </div>
  );
}

export default App;
