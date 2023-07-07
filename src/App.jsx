import React, { useState } from 'react';
import "./App.css"
const App = () => {
  const [answer, setAnswer] = useState('');

  const handleAnswer = (response) => {
    setAnswer(response);
  };

  const handleMouseMove = (event) => {
    if (answer === 'нажмите еще раз чтобы узнать точный ответ') {
      const threshold = 100; // Предел перемещения кнопки
      const newX = Math.min(Math.max(event.clientX - threshold, 0), window.innerWidth - threshold * 2);
      const newY = Math.min(Math.max(event.clientY - threshold, 0), window.innerHeight - threshold * 2);
      event.target.style.transform = `translate(${newX}px, ${newY}px)`;
    }
  };

  return (
    <div className="quiz">
      <h1>Тест</h1>
      <p>Ты гей?</p>
      <div className="options">
        <button onClick={() => handleAnswer('Да')}>Да</button>
        <button onMouseMove={handleMouseMove} onClick={() => handleAnswer('нажмите еще раз чтобы узнать точный ответ')}>
          Нет
        </button>
      </div>
      {answer && <p>Твой ответ: {answer}</p>}
    </div>
  );
};

export default App;
