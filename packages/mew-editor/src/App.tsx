import { useState } from "react";
import { MewEditor } from "./lib";
import "./App.css";

const App = () => {
  const [content, setContent] = useState();

  const handleSave = async (updatedContent: any) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        setContent(updatedContent);
        // setUpdatedAt(new Date());
        resolve(0);
      }, 0)
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-blue-900">
              MewEditor
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              A notion-like rich text editor
            </p>
          </div>
          <div className="border-t border-gray-200 ">
            <div className="px-40 py-5 space-y-4">
              <MewEditor
                onChange={handleSave}
                content={content}
                characterLimit={1000}
              />
              <hr />
              <MewEditor
                onChange={handleSave}
                content={content}
                mode="stripped"
              />
              {/* <Editor
                  id="2a1"
                  blocks={blocks2}
                  onChange={handleSave2}
                  autoFocus
                /> */}
              <hr />
              <pre className="bg-gray-200 text-xs font-mono rounded-sm p-1 mt-8">
                {JSON.stringify(content, null, " ")}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
