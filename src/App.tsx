import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Todos items={["Learn TypeScript", "Learn React"]} />
    </div>
  );
}

export default App;
