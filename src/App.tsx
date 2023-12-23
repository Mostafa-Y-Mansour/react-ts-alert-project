import { AlertCircle, BanIcon, Book, CheckCheck, Info } from "lucide-react";
import "./App.css";
import Alert from "./components/ui/Alert/index";

function App() {
  return (
    <div>
      <h1> YOU DON'T KNOW REACTJS</h1>
      <Alert
        type={"default"}
        icon={<Book size={20} />}
        title="this is the default message!"
        description="Hello World!"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus iure
        quidem, <a href="/">"ipsam"</a>
        sequi explicabo officia quaerat iste aperiam mollitia tenetur.
      </Alert>
      <Alert
        type={"error"}
        icon={<BanIcon size={20} />}
        title="Something Went Wrong"
        description="Hello World!"
      />
      <Alert
        type={"info"}
        icon={<Info size={20} />}
        title="Some information"
        description="Hello World!"
      />
      <Alert
        type={"warning"}
        icon={<AlertCircle size={20} />}
        title="Something giving you warning"
        description="Hello World!"
      />
      <Alert
        type={"success"}
        icon={<CheckCheck size={20} />}
        title="Something giving you success"
        description="Hello World!"
      />
    </div>
  );
}

export default App;
