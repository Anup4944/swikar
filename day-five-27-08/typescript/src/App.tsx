import "./App.css";
import Box from "./components/Box";

function App() {
  return (
    <div>
      Typescript
      <div>
        <Box title="box no 1" description="Hello box" bathNum={123} />
        <Box title="box no 2" description="Hello box" bathNum={123} />
        <Box title="box no 3" description="Hello box" />
      </div>
    </div>
  );
}

export default App;
