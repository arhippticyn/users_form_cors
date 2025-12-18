import Form from "./components/Form";
import FormDelete from "./components/FormDelete";
import Image from "./components/Image";
import Users from "./components/Users";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: 'wrap' }}>
      <Form />
      <FormDelete />
      <Users />
      <Image />
    </div>
  );
}

export default App;
