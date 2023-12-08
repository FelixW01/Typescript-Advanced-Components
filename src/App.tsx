import Input from "./components/input.tsx";

function App() {
  return (
    <main>
      <Input id="name" label="your name" type="text" disabled />
      <Input id="age" label="your age" type="number" />
    </main>
  );
}

export default App;
