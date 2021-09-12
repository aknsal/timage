import React, { useState } from "react";
import "./styles.css";
export function Quiz() {
  const questions = [
    {
      questionText:
        "During which geological time did dinosaurs flourish on Earth?",
      answerOptions: [
        { answerText: "Palaezoic", isCorrect: false },
        { answerText: "Devonian", isCorrect: false },
        { answerText: "Mesozoic", isCorrect: true },
        { answerText: "Coenozoic", isCorrect: false },
      ],
    },
    {
      questionText:
        "In which part of the world can a real Dinosaur Park be observed?",
      answerOptions: [
        { answerText: "China", isCorrect: false },
        { answerText: "Red Deer River,Alberta", isCorrect: true },
        { answerText: "Antarctica", isCorrect: false },
        {
          answerText: "Flamming Cliffs,Gobi Desert,Mongolia",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "What category of animals are dinosaurs?",
      answerOptions: [
        { answerText: "Reptiles", isCorrect: true },
        { answerText: "Reptiles and birds", isCorrect: false },
        { answerText: "Ambhibians and reptiles", isCorrect: false },
        { answerText: "Reptiles and mammals", isCorrect: false },
      ],
    },
    {
      questionText: "Which movie was based on dinosaurs?",
      answerOptions: [
        { answerText: "Triassic Park", isCorrect: false },
        { answerText: "Cretaceous Park", isCorrect: false },
        { answerText: "Dinosaur Park", isCorrect: false },
        { answerText: "Jurrasic Park", isCorrect: true },
      ],
    },
    {
      questionText: "Which of the following animals evolved before dinosaurs?",
      answerOptions: [
        { answerText: "Fishes", isCorrect: false },
        { answerText: "Ambhibians", isCorrect: false },
        { answerText: "Fishes,amphibians and lizards", isCorrect: false },
        { answerText: "Fishes and amphibians", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following dinosaurs had a sail like structure on their back?",
      answerOptions: [
        { answerText: "Iguanodon", isCorrect: false },
        { answerText: "Seymauria", isCorrect: false },
        { answerText: "Ankylosaurus", isCorrect: false },
        { answerText: "Dimetrodon", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following dinosaurs had a characteristic plate like structure on the dorsal side of the body?",
      answerOptions: [
        { answerText: "Iguanodon", isCorrect: false },
        { answerText: "Brontosaurus", isCorrect: false },
        { answerText: "Ankylosaurus", isCorrect: false },
        { answerText: "Stegosaurus", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following dinosaurs is known as fish-lizards?",
      answerOptions: [
        { answerText: "Ankylosaurus", isCorrect: false },
        { answerText: "Pelycosaurs", isCorrect: false },
        { answerText: "Pteranodon", isCorrect: false },
        { answerText: "Ichthyosaurus", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following dinosaurs is considered as the largest carnivorous din and named as the king of dinosaurs?",
      answerOptions: [
        { answerText: "Campiosaurus", isCorrect: false },
        { answerText: "Tyrannosaurus", isCorrect: true },
        { answerText: "Stegosaurus", isCorrect: false },
        { answerText: "Apenosaurus", isCorrect: false },
      ],
    },
    {
      questionText:
        "On which continent have the most dinosaur fossils been found?",
      answerOptions: [
        { answerText: "North America", isCorrect: true },
        { answerText: "Antarctica", isCorrect: false },
        { answerText: "ASia", isCorrect: false },
        { answerText: "Africa", isCorrect: false },
      ],
    },
    {
      questionText:
        "Stegosaurus was a plant eater ,but it was no wimp. How did Stegosaurus protect itself from enemies?",
      answerOptions: [
        { answerText: " Bit them ", isCorrect: false },
        { answerText: "Sat on them", isCorrect: false },
        { answerText: "Stomped on them", isCorrect: false },
        { answerText: "Smacked them with its spiky tail", isCorrect: true },
      ],
    },
    {
      questionText:
        "If Tyrannosaurus rex were chasing you across a field how could you outrun this predator?",
      answerOptions: [
        { answerText: "By running", isCorrect: false },
        { answerText: "By walking", isCorrect: false },
        {
          answerText: "By zooming away on a motorized scooter",
          isCorrect: true,
        },
        { answerText: "By riding a skateboard", isCorrect: true },
      ],
    },
    {
      questionText:
        "Dinosaurs live at the same time as which of these creatures?",
      answerOptions: [
        { answerText: "None of these", isCorrect: true },
        { answerText: "Early humans", isCorrect: false },
        { answerText: "Saber toothed cats", isCorrect: false },
        { answerText: "Wooly mammoths", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the scientific word for ossilized dinosaur droppings?",
      answerOptions: [
        { answerText: "Coprolite", isCorrect: false },
        { answerText: "Cretaceous Park", isCorrect: false },
        { answerText: "Doodicus", isCorrect: true },
        { answerText: "Gigantic stink", isCorrect: false },
      ],
    },
    {
      questionText:
        "When the first dinosaur bones were discovered in China about 2000 years ago,people thought they were?",
      answerOptions: [
        { answerText: "Pamda bones", isCorrect: false },
        { answerText: "Dragon bones", isCorrect: true },
        { answerText: "Chcken bones", isCorrect: false },
        { answerText: "Tiger bones", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                style={{ margin: 10 }}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
