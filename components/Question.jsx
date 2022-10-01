import React, { useState, useEffect } from "react";
import Questions from "../src/Questions";

function Question() {
  const [currentQ, setCurrentQ] = useState(0);
  const [radio, setRadio] = useState("");
  const [checkedState, setCheckedState] = React.useState([]);
  const [data, setData] = useState({});
  useEffect(() => {
    setCheckedState(
      (checkedState) =>
        (checkedState = new Array(
          Questions[currentQ].answerOptions.length
        ).fill(false))
    );
  }, [currentQ]);
  function handleOnChange(event) {
    setRadio((radio) => (radio = event.target.value));
  }
  function handleChange(position) {
    setCheckedState(
      checkedState.map((item, index) => (index === position ? !item : item))
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const dataArray = [];
    Questions[currentQ].answerOptions.length <= 7
      ? setData({
          ...data,
          [`${Questions[currentQ].dataField}`]: radio,
        })
      : checkedState.map((check, index) => {
          if (check) dataArray.push(Questions[currentQ].answerOptions[index]);
          setData({
            ...data,
            [`${Questions[currentQ].dataField}`]: dataArray,
          });
        });
    setCurrentQ(Questions.length - 1 != currentQ ? currentQ + 1 : currentQ);
  }
  return (
    <div className="questionForm">
      <h2>{Questions[currentQ].QuestionText}</h2>
      <form onSubmit={handleSubmit} className="questionForm">
        <ul>
          {Questions[currentQ].answerOptions.length <= 7
            ? Questions[currentQ].answerOptions.map((ans, index) => {
                return (
                  <li key={index} className={`list--item-${ans}`}>
                    <label
                      className="answer--container"
                      htmlFor={`custom-radio-${index}`}
                    >
                      <input
                        type="radio"
                        key={index}
                        id={`custom-radio-${index}`}
                        name={`${Questions[currentQ].dataField}`}
                        value={ans}
                        onChange={handleOnChange}
                        checked={radio === ans}
                        className="input--radio"
                      />
                      <span className="checkMark">{ans}</span>
                    </label>
                  </li>
                );
              })
            : Questions[currentQ].answerOptions.map((ans, index) => {
                return (
                  <li key={index}>
                    <label
                      className="answer--container"
                      htmlFor={`custom-checkbox-${index}`}
                    >
                      <input
                        type="checkbox"
                        key={index}
                        id={`custom-checkbox-${index}`}
                        name={ans}
                        value={ans}
                        checked={checkedState[index]}
                        onChange={() => handleChange(index)}
                        className="input--checkbox"
                      />
                      <span className="checkMark">{ans}</span>
                    </label>
                  </li>
                );
              })}
        </ul>
        <button type="submit" className="submit">
          next question
        </button>
      </form>
    </div>
  );
}
export default Question;
