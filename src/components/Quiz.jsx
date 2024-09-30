const Quiz = (questions, currentQuestionIndex) => {
    console.log(questions);
    console.log(currentQuestionIndex);
    
    
  return (
    <>
      <span className="text-2xl font-bold ">{`${currentQuestionIndex + 1}/${
        questions.length + 1
      }`}</span>
      <h1 className="text-4xl font-bold">
        {questions[currentQuestionIndex].subject}
      </h1>
      <div className="shadow-xl bg-blue-100 rounded-xl flex flex-col justify-center items-center my-4 gap-6 p-5">
        <p className="text-xl">{questions[currentQuestionIndex].question}</p>
        <div className="flex gap-5">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              className="border p-6 bg-yellow-500 hover:bg-yellow-600 hover:scale-110 transition-all"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Quiz;
