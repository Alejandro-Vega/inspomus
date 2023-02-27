import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ICategoryResponse, IStoryResponse, TColor, useOpenAI } from '../hooks/useOpenAI';
import { RootState } from 'app/redux/slices';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

const NormalStart = () => {
  const { result, requestArtPrompt } = useOpenAI();
  const promptType = useSelector((state: RootState) => state.config.promptType);
  const ref = useRef('');

  useEffect(() => {
    if (!promptType || promptType === ref.current) {
      return;
    }
    ref.current = promptType;
    console.log(promptType);
    requestArtPrompt(promptType);
  }, [promptType, requestArtPrompt]);

  console.log('RERENDER');

  return (
    <Stack direction="column" spacing={4}>
      <Typography variant="h3">PROMPT:</Typography>
      {promptType === 'story' ? (
        <Typography variant="body2">{(result as IStoryResponse)?.story}</Typography>
      ) : (
        <Stack direction="column" spacing={3}>
          <Typography variant="body2">
            Art Style: {(result as ICategoryResponse)?.artStyle}
          </Typography>
          <Typography variant="body2">
            Character: {(result as ICategoryResponse)?.character}
          </Typography>
          <Typography variant="body2">Object: {(result as ICategoryResponse)?.object}</Typography>
          <Typography variant="body2">Color Palette:</Typography>
          {(result as ICategoryResponse)?.colorPalette?.map((color: TColor) => (
            <Typography key={color.name} variant="body2">
              {`${color.name}: ${color.hex}`}
            </Typography>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default NormalStart;
