import { Button, Stack } from '@mui/material';
import { ServicePaths } from 'app/common/ServicePaths';
import { RootState } from 'app/redux/slices';
import {
  setCategories,
  setDifficulty,
  setMethodOfDrawing,
  setPromptType,
  setInterval,
  setTime,
} from 'app/redux/slices/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  PromptConfig,
  TCategories,
  TDifficulty,
  TInterval,
  TMethodOfDrawing,
  TPromptType,
  TTime,
} from '../config';
import PromptConfigButtonGroup from '../PromptConfigButtonGroup';

const DrawingPromptConfig = () => {
  const config = useSelector((state: RootState) => state.config);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onMethodOfDrawingChange = (value: TMethodOfDrawing | TMethodOfDrawing[]) => {
    if (Array.isArray(value)) {
      return;
    }
    dispatch(setMethodOfDrawing(value));
  };

  const onDifficultyChange = (value: TDifficulty | TDifficulty[]) => {
    if (Array.isArray(value)) {
      return;
    }
    dispatch(setDifficulty(value));
  };

  const onTimeChange = (value: TTime | TTime[]) => {
    if (Array.isArray(value)) {
      return;
    }
    dispatch(setTime(value));
  };

  const onIntervalChange = (value: TInterval | TInterval[]) => {
    if (Array.isArray(value)) {
      return;
    }
    dispatch(setInterval(value));
  };

  const onPromptTypeChange = (value: TPromptType | TPromptType[]) => {
    if (Array.isArray(value)) {
      return;
    }
    dispatch(setPromptType(value));
  };

  const onCategoriesChange = (value: TCategories | TCategories[]) => {
    if (!Array.isArray(value)) {
      return;
    }
    dispatch(setCategories(value));
  };

  const onStart = () => {
    navigate(ServicePaths.paths.prompt.children.normal.children.start.root);
  };

  return (
    <Stack direction="column" spacing={2}>
      <PromptConfigButtonGroup
        title={PromptConfig.methodOfDrawing.title}
        options={PromptConfig.methodOfDrawing.options}
        selectedOption={config.methodOfDrawing}
        onSelectChange={onMethodOfDrawingChange}
      />
      <PromptConfigButtonGroup
        title={PromptConfig.difficulty.title}
        options={PromptConfig.difficulty.options}
        selectedOption={config.difficulty}
        onSelectChange={onDifficultyChange}
      />
      <PromptConfigButtonGroup
        title={PromptConfig.time.title}
        options={PromptConfig.time.options}
        selectedOption={config.time}
        onSelectChange={onTimeChange}
      />
      {config.time === 'timed' ? (
        <PromptConfigButtonGroup
          title={PromptConfig.interval.title}
          options={PromptConfig.interval.options}
          selectedOption={config.interval}
          onSelectChange={onIntervalChange}
        />
      ) : null}
      <PromptConfigButtonGroup
        title={PromptConfig.promptType.title}
        options={PromptConfig.promptType.options}
        selectedOption={config.promptType}
        onSelectChange={onPromptTypeChange}
      />
      {config.promptType !== 'story' ? (
        <PromptConfigButtonGroup
          title={PromptConfig.categories.title}
          options={PromptConfig.categories.options}
          selectedOption={config.categories}
          onSelectChange={onCategoriesChange}
          orientation="vertical"
          size="medium"
          sx={{ width: 'fit-content' }}
        />
      ) : null}
      <Button variant="contained" color="primary" onClick={onStart} sx={{ width: 'fit-content' }}>
        Start
      </Button>
    </Stack>
  );
};

export default DrawingPromptConfig;
