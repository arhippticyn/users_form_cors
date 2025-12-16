import Form from "./components/Form";
import FormDelete from "./components/FormDelete";
import Users from "./components/Users";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Form />
      <FormDelete />
      <Users />
    </div>
  );
}

export default App;
