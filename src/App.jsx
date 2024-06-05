import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  marked.setOptions({
    breaks : true
  })

  return (
    <div id="container">
      <textarea id="editor" onChange={(e)=> 
        setMarkdown(e.target.value)} value={markdown}></textarea><br />
      <div id="preview"dangerouslySetInnerHTML={{ __html: marked(markdown)}}></div>
    </div>
  )
}

export default App
