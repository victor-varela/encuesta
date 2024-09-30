import { useState } from "react";
import { questions } from "../data";
import Results from "./Results";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [finish, setFinish] = useState(false);
  
  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);

    if (currentQuestionIndex == questions.length - 1) {
      setFinish(true);
      return;
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="flex flex-col flex-wrap justify-center items-center mt-24">
      {!finish ? (
        <>
          <span className="text-2xl font-bold ">{`${currentQuestionIndex + 1}/${
            questions.length
          }`}</span>
          <h1 className="text-4xl text-center font-bold">
            {questions[currentQuestionIndex].subject}
          </h1>
          <div className="shadow-xl bg-blue-100 rounded-xl flex flex-col justify-center items-center my-4 gap-6 p-5">
            <p className="text-xl text-center">
              {questions[currentQuestionIndex].question}
            </p>
            <div className="flex flex-col md:flex-row flex-wrap gap-5">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="border p-6 bg-yellow-500 md:hover:bg-yellow-600 md:hover:scale-110 transition-all"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Results answers={userAnswers} />
      )}
    </div>
  );
};

export default Quiz;
