// pages/index.js
"use client"


// pages/index.js

import React, { useState } from 'react';

export default function Home() {
  const [paragraph, setParagraph] = useState('');
  const [sentenceCount, setSentenceCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  const countSentencesAndWords = (text : any) => {
    if (text.trim() === '') {
      setSentenceCount(0);
      setWordCount(0);
      setCharacterCount(0);
      setSpaceCount(0);
      setParagraphCount(0);
      return;
    }

    const sentences = text.match(/[.?!]+/g) || [];
    const words = text.match(/\S+/g) || [];
    setSentenceCount(sentences.length);
    setWordCount(words.length);
    setCharacterCount(text.length);
    setSpaceCount((text.match(/ /g) || []).length);
    setParagraphCount((text.match(/\n/g) || []).length + 1);
  };

  const handleTextareaChange = (e:any) => {
    const text = e.target.value;
    setParagraph(text);
    countSentencesAndWords(text);
  };

  return (
    <div>
      <textarea
        value={paragraph}
        onChange={handleTextareaChange}
        placeholder="Enter your paragraph here..."
        rows={10}
        cols={50}
      />
      <div>
        <p>Sentence Count: {sentenceCount}</p>
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {characterCount}</p>
        <p>Space Count: {spaceCount}</p>
        <p>Paragraph Count: {paragraphCount}</p>
      </div>
    </div>
  );
}
