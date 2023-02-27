import { TDifficulty, TMethodOfDrawing } from 'app/pages/prompt/config';
import axios from 'axios';

export const OPENAI_API_URL = 'https://api.openai.com/v1/completions';

export const categoryPrompt = (difficulty: TDifficulty, methodOfDrawing: TMethodOfDrawing) => {
  return `Generate answers in the format provided below as an ${difficulty} difficulty art prompt. It should be max 4 words. You should never generate more than 4 words as a response for each answer. The art will be made using the ${methodOfDrawing} art style. Color should be represented as the name of the color followed by the hexcode of the color the name represents. All answers should be random and can be unrelated, unique, and different. Character and object should not correlate with each other, they should be completely mutually exclusive from one another. Your response should be in the following format and then convert it into JSON:\n"{"artStyle":"(Answerhere)","character":"(Answerhere)","object":"(Answerhere)","colorPalette":[{"name":"(colornamehere)","hex":"#hexcode"}, {"name":"(colornamehere)","hex":"#hexcode"}, {"name":"(colornamehere)","hex":"#hexcode"}]}"`;
};

export const storyPrompt = (difficulty: TDifficulty, methodOfDrawing: TMethodOfDrawing) => {
  return `Generate a short story to be used as an ${difficulty} difficulty art prompt. It should be max 6 sentences. You should never generate more than 6 sentences as a response. The art will be made using the ${methodOfDrawing} art style. Your response should be in the following format and then convert it into JSON that will be easy to parse in javascript and there should be no leading spaces or line breaks before and the entire response: {
    "story": "(insert story here)"
  }`;
};

export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
  },
});

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);
