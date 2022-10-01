const Questions = [
  {
    questionType: "radio",
    dataField: "mood",
    QuestionText: "How is your mood today ?",
    answerOptions: ["happy", "normal", "sad"],
  },
  {
    questionType: "radio",
    dataField: "releaseDate",
    QuestionText: "do u care about release date ?",
    answerOptions: [
      "last year",
      "last 3 year",
      "last 5 year",
      "last 10 year ",
      "last 20 year",
    ],
  },
  {
    questionType: "checkbox",
    dataField: "genres",
    QuestionText: "what genre do u wanna watch a movie ?",
    answerOptions: [
      "action",
      "comdey",
      "drama",
      "romance",
      "fantasy",
      "adventure",
      "history",
      "horror",
      "sports",
      "music",
      "biography",
      "animation",
      "western",
    ],
  },
  {
    questionType: "radio",
    dataField: "reason",
    QuestionText: "whats the occasion?",
    answerOptions: [
      "watching a movie alone",
      "movie date",
      "watching a movie with family",
      "movie night",
      "netflix and chill",
    ],
  },
  {
    questionType: "radio",
    dataField: "age-rarting",
    QuestionText:
      "Is the age-appropriateness rating of the movie important to you?",
    answerOptions: ["yes", "no"],
  },
];

export default Questions;
