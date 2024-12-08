import "./App.css";
import Alert from "./components/UI/Alert/Alert";
import { Ban } from "lucide-react";
function App() {
  return (
    <>
      <Alert
        type={"alert-danger"}
        icon={<Ban size={20} />}
        title={"Some Thing Wrong"}
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ex atque
        tenetur obcaecati maxime voluptate commodi veritatis facilis sunt quas ."
      >
        <p>
          Lorem ipsum dolor sit amet <a href="/">consectetur</a>, adipisicing
          elit. Nihil ex atque tenetur obcaecati maxime voluptate commodi
          veritatis facilis sunt quas .
        </p>
      </Alert>
      <Alert
        type={"alert-warning"}
        icon={<Ban size={20} />}
        title={"Some Thing Wrong"}
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ex atque
        tenetur obcaecati maxime voluptate commodi veritatis facilis sunt quas ."
      />
      <Alert
        type={"alert-info"}
        icon={<Ban size={20} />}
        title={"Some Thing Wrong"}
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ex atque
        tenetur obcaecati maxime voluptate commodi veritatis facilis sunt quas ."
      />
      <Alert
        type={"alert-success"}
        icon={<Ban size={20} />}
        title={"Some Thing Wrong"}
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ex atque
        tenetur obcaecati maxime voluptate commodi veritatis facilis sunt quas ."
      />
      <Alert
        type={"alert-default"}
        icon={<Ban size={20} />}
        title={"Some Thing Wrong"}
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ex atque
        tenetur obcaecati maxime voluptate commodi veritatis facilis sunt quas ."
      />
    </>
  );
}

export default App;
