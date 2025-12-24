import AddFiles from "./components/AddFile";
import DeleteFile from "./components/DeleteFile";
import Files from "./components/Files";
import Form from "./components/Form";
import FormDelete from "./components/FormDelete";
import Image from "./components/Image";
import Patch from "./components/Patch";
import Users from "./components/Users";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Form />
        <FormDelete />
        <Image />
        <Patch />
        <AddFiles />
        <DeleteFile />
      </div>
      <Users />
      <Files />
    </div>
  );
}

export default App;
