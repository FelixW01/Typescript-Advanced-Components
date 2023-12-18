import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
// import Container from "./components/Container.tsx";
import Form from "./components/Form.tsx";

function App() {
  return (
    <main>
      <Form>
        <Input type="text" label="name" id="name" />
        <Input type="number" label="age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
