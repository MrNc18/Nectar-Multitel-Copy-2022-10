import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Table from '@ckeditor/ckeditor5-table/src/table';
import { data } from "jquery";

function Tele() {
  const [value, setvalue] = useState("");

  //   onChange={(data) =>
  //    ({ target: { value: data } }, id)
  //   }
  const handleSubmit = () => {
    console.log(value, "hvhgvhjv");
  };

  return (
    <div>
      Tele
      <CKEditor
        id="ck"
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          setvalue(data);
          console.log({ event, editor, data });
        }}
        config={{
          toolbar: [
            "heading",
            "|",
            "fontfamily",
            "fontsize",
            "|",
            "alignment",
            "|",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bold",
            "italic",
            "strikethrough",
            "underline",
            "subscript",
            "superscript",
            "|",
            "link",
            "|",
            "outdent",
            "indent",
            "|",
            "bulletedList",
            "numberedList",
            "todoList",
            "|",
            "code",
            "codeBlock",
            "|",
            "insertTable",
            "|",
            "uploadImage",
            "blockQuote",
            "|",
            "undo",
            "redo",
          ],
          // plugins: [Table],
        }}

        // onChange={() => handleChange}
      />
      <button onClick={() => handleSubmit()}>Go</button>
    </div>
  );
}

export default Tele;

// const editorConfig = {
//   fontFamily: {
//     options: [
//       "default",
//       "Ubuntu, Arial, sans-serif",
//       "Ubuntu Mono, Courier New, Courier, monospace",
//     ],
//   },
//   toolbar: {
//     items: [
//       "heading",
//       "|",
//       "bold",
//       "italic",
//       "underline",
//       "|",
//       "alignment",
//       "|",
//       "link",
//       "|",
//       "outdent",
//       "indent",
//       "|",
//       "undo",
//       "redo",
//       "|",
//       "bulletedList",
//       "numberedList",
//       "|",
//       "highlight:yellowMarker",
//       "removeHighlight",
//       // "blockQuote",
//       // "undo",
//       // "redo"
//     ],
//   },
//   plugins: [
//     Essentials,
//     Bold,
//     Italic,
//     Paragraph,
//     Underline,
//     Alignment,
//     Clipboard,
//     LinkPlugin,
//     ListPlugin,
//     Table,
//     PasteFromOffice,
//     Highlight,
//     Indent,
//     // InlineHighlighters
//   ],
//   highlight: {
//     options: [
//       {
//         model: "yellowMarker",
//         class: "marker-yellow",
//         title: "Yellow marker",
//         color: "yellow",
//         type: "marker",
//         styles: {
//           "background-color": "yellow",
//         },
//       },
//       {
//         model: "redPen",
//         class: "pen-red",
//         title: "Red pen",
//         color: "red",
//         type: "pen",
//         styles: {
//           color: "red",
//         },
//       },
//     ],
//   },
// };
