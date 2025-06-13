import React, { useEffect, useState } from "react";

const VoiceSearch = ({ onResult }) => {
  const [isListening, setIsListening] = useState(false);
  const [support, setSupport] = useState(true);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      setSupport(false);
    }
  }, []);

  const handleListen = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event);
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (onResult) onResult(transcript);
    };

    recognition.start();
  };

  if (!support) return null;

  return (
    <button
      onClick={handleListen}
      aria-label="Activate voice search"
      className={`p-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow transition ${
        isListening ? "animate-pulse" : ""
      }`}
    >
      🎤
    </button>
  );
};

export default VoiceSearch;
