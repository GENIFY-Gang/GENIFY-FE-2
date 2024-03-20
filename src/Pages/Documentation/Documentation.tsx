import React from "react";
import NavigationBar from "../Navigation/Navigation";
import { useQuill } from "react-quilljs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Documentation = () => {
  const { quill, quillRef } = useQuill();

  console.log(quill); // undefined > Quill Object
  console.log(quillRef);
  return (
    <>
      <div>
        <NavigationBar />
        {/* Other content of your Generator page */}
      </div>
      <div style={{ width: "200px", height: "300px" }}>
        <div ref={quillRef} />
        <ReactQuill
          readOnly
          theme="bubble"
          // value={textValue}
        />
      </div>
    </>
  );
};

export default Documentation;
