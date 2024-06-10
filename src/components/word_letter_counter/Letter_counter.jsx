import React, { useState } from 'react';

const Letter_counter = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    countWordsAndLetters(inputText);
  };

  const countWordsAndLetters = (inputText) => {
    const words = inputText.trim().split(/\s+/).filter(Boolean);
    const letters = inputText.replace(/\s+/g, '');
    setWordCount(words.length);
    setLetterCount(letters.length);
  };

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Word and Letter Counter</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type or paste your text here..."
        className="w-full h-40 p-4 border border-gray-300 rounded-lg mb-4 text-lg"
      />
      <div className="counts flex justify-around mt-4">
        <p className="text-xl">Word Count: {wordCount}</p>
        <p className="text-xl">Letter Count: {letterCount}</p>
      </div>
    </div>
  );
};

export default Letter_counter;
