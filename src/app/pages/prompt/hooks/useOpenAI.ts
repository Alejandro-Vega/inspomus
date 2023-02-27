import { useState, useCallback } from 'react';
import {
  axiosInstance as axios,
  categoryPrompt,
  OPENAI_API_URL,
  storyPrompt,
} from 'app/common/openAI';
import { TPromptType } from '../config';
import { useSelector } from 'react-redux';
import { RootState } from 'app/redux/slices';

export type TColor = {
  name: string;
  hex: string;
};

export interface ICategoryResponse {
  artStyle?: string;
  character?: string;
  object?: string;
  colorPalette?: TColor[];
}

export interface IStoryResponse {
  story: string;
}

export const useOpenAI = () => {
  const [result, setResult] = useState<ICategoryResponse | IStoryResponse | null>(null);
  const config = useSelector((state: RootState) => state.config);

  const requestArtPrompt = useCallback(
    async (promptType: TPromptType) => {
      const prompt =
        promptType === 'story'
          ? storyPrompt(config.difficulty, config.methodOfDrawing)
          : categoryPrompt(config.difficulty, config.methodOfDrawing);

      try {
        const response = await axios.post(OPENAI_API_URL, {
          prompt,
          model: 'text-davinci-003',
          temperature: 0.5,
          max_tokens: 150,
          n: 1,
        });
        if (!response?.data?.choices?.length) {
          throw new Error('Response could not be generated');
        }
        const res = JSON.parse(response.data.choices[0].text);
        console.log(res);
        setResult(res);
      } catch (error) {
        console.error(error);
      }
    },
    [config.difficulty, config.methodOfDrawing]
  );

  return {
    result,
    requestArtPrompt,
  };
};
