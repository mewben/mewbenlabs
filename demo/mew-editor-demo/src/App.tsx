import { useState } from "react";
import { MewEditor } from "mew-editor";
import logo from "./logo.svg";
import "mew-editor/style.css";
// import "./App.css";

function App() {
  const [content, setContent] = useState();

  const onChange = (updatedContent) => {
    setContent(updatedContent);
  };

  return (
    <div className="App">
      <MewEditor content={content} onChange={onChange} />
    </div>
  );
}

export default App;
