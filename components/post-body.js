import { useRef, useEffect } from 'react';
import markdownStyles from './markdown-styles.module.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import Head from 'next/head';

export default function PostBody({ content }) {
  const node = useRef();
  useEffect(() => {
    if (node) {
      const nodes = node.current.querySelector('pre');
      hljs.highlightAll(nodes);
      console.log(nodes);
    }
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/styles/github-dark-dimmed.min.css"
        />
        <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/languages/javascript.min.js"></script>
      </Head>
      <div className="max-w-2xl mx-auto ">
        <div
          ref={node}
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}
