/* eslint-disable no-useless-catch */
// import { useState } from "react";
// import "./App.css";
// import MyButton from "./components/MyButton";
// import { formatDate } from "./utils/data.";

// import { useEffect } from "react";

// function App() {
//   const [title, setTitle] = useState("My title");
//   const [desc, setDesc] = useState("New desx");
//   const [date, setDate] = useState(new Date().toISOString());

//   const handleOnCLick = () => {
//     setTitle("new title");
//   };
//   const handleDateCLick = () => {
//     const newDate = formatDate(date);
//     setTitle(newDate);
//   };
//   return (
//     <>
//       <h1>{title}</h1>
//       <p>{desc}</p>
//       {date}
//       <MyButton
//         title="Submit Data"
//         variant="primary"
//         size="sm"
//         onClick={handleOnCLick}
//       />
//       <MyButton
//         title="Submit Data"
//         variant="secondary"
//         size="md"
//         onClick={handleDateCLick}
//       />
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(1);
  const [toDos, setToDos] = useState([]);
  const [error, setError] = useState(" ");

  async function getData() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      return json;
    } catch (error) {
      throw error;
    }
  }

  async function handleGetTodo() {
    try {
      const data = await getData();
      setToDos(data);
    } catch (e) {
      setError(e.message);
      setToDos([]);
    }
  }
  // useEffect(() => {
  //   async function getDataAsync() {
  //     const data = await getData();
  //     setToDos(data);
  //     console.log(data);
  //   }

  //   getDataAsync();
  // }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <button onClick={handleGetTodo}>Get Todos</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {toDos.length > 0 && <p>{toDos[0].title}</p>}
    </div>
  );
}

export default App;
