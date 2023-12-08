import React, { useState } from "react";
import LoyalVassals from "./LoyalVassals";
import "./App.css";

function App() {

  const [displayVerdict, declareVerdict] = useState(false);
  const [affinity, setAffinity] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the average lifespan of most otter species in the wild?",
      options: [
        { id: 0, text: "5-8 years", isCorrect: false },
        { id: 1, text: "10-15 years", isCorrect: true },
        { id: 2, text: "20-25 years", isCorrect: false },
        { id: 3, text: "30-35 years", isCorrect: false },
      ],
    },
    {
      text: "What is the primary diet of otters?",
      options: [
        { id: 0, text: "Plants", isCorrect: false },
        { id: 1, text: "Fish", isCorrect: true },
        { id: 2, text: "Insects", isCorrect: false },
        { id: 3, text: "Birds", isCorrect: false },
      ],
    },
    {
      text: "How do otters keep their fur waterproof?",
      options: [
        { id: 0, text: "They secrete oils from special glands", isCorrect: true },
        { id: 1, text: "They use leaves to cover themselves", isCorrect: false },
        { id: 2, text: "They roll in mud", isCorrect: false },
        { id: 3, text: "They have naturally waterproof fur", isCorrect: false },
      ],
    },
    {
      text: "What is the collective noun for a group of otters?",
      options: [
        { id: 0, text: "Flock", isCorrect: false },
        { id: 1, text: "Pod", isCorrect: false },
        { id: 2, text: "Raft", isCorrect: true },
        { id: 3, text: "Herd", isCorrect: false },
      ],
    },
    {
      text: "In which habitat are sea otters primarily found?",
      options: [
        { id: 0, text: "Deserts", isCorrect: false },
        { id: 1, text: "Forests", isCorrect: false },
        { id: 2, text: "Oceans", isCorrect: true },
        { id: 3, text: "Grasslands", isCorrect: false },
      ],
    },
    {
      text: "Which sense is highly developed in otters and helps them locate prey underwater?",
      options: [
        { id: 0, text: "Smell", isCorrect: false },
        { id: 1, text: "Hearing", isCorrect: true },
        { id: 2, text: "Taste", isCorrect: false },
        { id: 3, text: "Touch", isCorrect: false },
      ],
    },
    {
      text: "What family do otters belong to?",
      options: [
        { id: 0, text: "Mustelidae", isCorrect: true },
        { id: 1, text: "Felidae", isCorrect: false },
        { id: 2, text: "Canidae", isCorrect: false },
        { id: 3, text: "Ursidae", isCorrect: false },
      ],
    },
    {
      text: "How do otters communicate with each other?",
      options: [
        { id: 0, text: "Whistling", isCorrect: false },
        { id: 1, text: "Morse code-like tapping", isCorrect: false },
        { id: 2, text: "Echolocation", isCorrect: false },
        { id: 3, text: "Vocalizations", isCorrect: true },
      ],
    },
    {
      text: "What is the purpose of an otter's 'slide and dive' behavior?",
      options: [
        { id: 0, text: "Territorial marking", isCorrect: false },
        { id: 1, text: "Exercise and play", isCorrect: true },
        { id: 2, text: "Hunting technique", isCorrect: false },
        { id: 3, text: "Avoiding predators", isCorrect: false },
      ],
    },
    {
      text: "Which otter species is known for its ability to close its ears and nostrils while underwater?",
      options: [
        { id: 0, text: "Giant Otter", isCorrect: false },
        { id: 1, text: "Sea Otter", isCorrect: true },
        { id: 2, text: "Smooth-Coated Otter", isCorrect: false },
        { id: 3, text: "Eurasian Otter", isCorrect: false },
      ],
    },
  ];  

  const Otters = [
    'https://abcnews4.com/resources/media/4a70b26d-b2cd-4f6d-b1e7-3e990ee6ad54-Otterpups.jpg',
    'https://fisheries-2023.sites.olt.ubc.ca/files/2023/08/image004.jpg',
    'https://d3ftabzjnxfdg6.cloudfront.net/app/uploads/2020/05/18-10-28_0002-sea-otter-BB-web-1024x512.jpg',
    'https://images.squarespace-cdn.com/content/v1/58f90fb3bebafb328ca3e008/1611679022633-O4N6TLCSOXAVL6Q6693X/.jpg',
    'https://external-preview.redd.it/OWjYNHuW5EsGBFJ1J-pRgdPXi-YGjEqZC6DnlRNGeTw.jpg?width=640&crop=smart&auto=webp&s=91138ffdd263d8bbe55e510fa6167f4047ec0af3',
    'https://media.npr.org/assets/img/2020/06/12/ap_120126057740_wide-3684f4091007a502fa561405bc0de57ae06cc934-s1400-c100.jpg',
    'https://miro.medium.com/v2/resize:fit:1200/1*ir3MBJgZwPKAVghEbSdFIg.jpeg',
    'https://i.pinimg.com/736x/50/b3/2b/50b32bcc41ec07e830dbe3e69878ab32.jpg',
    'https://pbs.twimg.com/media/Bt0Gs2oIcAAu7Mx.jpg:large',
    'https://i.natgeofe.com/k/41de528e-c521-4a29-ade6-d385d9a4e5f7/sea-otter-closeup_16x9.jpg',
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setAffinity(affinity + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      declareVerdict(true);
    }
  };

  const redoTrial = () => {
    setAffinity(0);
    setCurrentQuestion(0);
    declareVerdict(false);
  };

  const affinityColor = '#fcf55f';

  return (
    <div className="App">
      <h1>The Great Otter Sovereign 那维莱特 has stopped you!</h1>

      <h2>The amount of Otters that acknowledge you is {" "}
        <span style={{ color: affinityColor }}>{affinity}</span>
      </h2>

      {displayVerdict ? (
        <div className="otter-ender">
          <h2>The Otter Sovereign has judged your fate!</h2>
          <h2>Your otter affinity is {(affinity / questions.length) * 100}%</h2>
          <button onClick={() => redoTrial()}>Try again?</button>
        </div>
      ) : (
        <div className="otter-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="qtext">{questions[currentQuestion].text}</h3>
          <LoyalVassals imageLink={Otters[currentQuestion]} />
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}>
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;