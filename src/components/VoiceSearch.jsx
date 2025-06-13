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
  className={`w-14 h-14 p-3 md:p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow transition flex items-center justify-center ${
    isListening ? "animate-pulse" : ""
  } focus:outline-none focus:ring-2 focus:ring-blue-300`}
  aria-label="Tap to search by voice"
>
  🎤
</button>
  );
};

export default VoiceSearch;
