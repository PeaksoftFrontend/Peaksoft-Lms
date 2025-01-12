import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testName: "",
  questions: [
    {
      text: "",
      options: [""],
      singleChoice: true,
    },
  ],
  isLoading: false,
  error: null,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTestName(state, action) {
      state.testName = action.payload;
    },
    addQuestion(state) {
      state.questions.push({ text: "", options: [""], singleChoice: true });
    },
    deleteQuestion: (state, action) => {
      const { index } = action.payload;
      state.questions.splice(index, 1);
    },
    updateQuestionText(state, action) {
      const { index, text } = action.payload;
      state.questions[index].text = text;
    },
    addOption: (state, action) => {
      const { questionIndex, value } = action.payload;
      state.questions[questionIndex].options.push(value || "");
    },

    updateOption(state, action) {
      const { questionIndex, optionIndex, value } = action.payload;
      state.questions[questionIndex].options[optionIndex] = value;
    },
    deleteOption: (state, action) => {
      const { questionIndex, optionIndex } = action.payload;
      state.questions[questionIndex].options.splice(optionIndex, 1);
    },
    toggleSingleChoice(state, action) {
      const { questionIndex, isSingleChoice } = action.payload;
      state.questions[questionIndex].singleChoice = isSingleChoice;
    },
  },
});

export const {
  setTestName,
  addQuestion,
  deleteQuestion,
  updateQuestionText,
  addOption,
  updateOption,
  deleteOption,
  toggleSingleChoice,
} = testSlice.actions;

export default testSlice.reducer;
