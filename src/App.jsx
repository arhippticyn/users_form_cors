import Form from "./components/Form";
import FormDelete from "./components/FormDelete";
import Image from "./components/Image";
import Patch from "./components/Patch";
import Users from "./components/Users";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between"}}>
      <div className="">
      <Form />
      <FormDelete />
      <Image />
      <Patch />
      </div>
      <Users />
    </div>
  );
}

export default App;
