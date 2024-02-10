import MarkdownIt from "markdown-it";
import React, { useEffect } from 'react';
const md = new MarkdownIt({ html: true });

export default function Game(block) {
  return (
    <div>
      <div className="impactContainer">
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          jus
          width="90%"
          height="800"
          src="https://neon-puppy-394ccf.netlify.app/">
        </iframe>
      </div>
      <br/>
    </div>



  );
}
