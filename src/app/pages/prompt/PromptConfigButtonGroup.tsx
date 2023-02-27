import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  Typography,
} from '@mui/material';

interface IPromptConfigButtonGroupProps<T> extends ToggleButtonGroupProps {
  title: string;
  options: T[];
  selectedOption: T | T[];
  onSelectChange: (value: T | T[]) => void;
}

const PromptConfigButtonGroup = <T extends string>(props: IPromptConfigButtonGroupProps<T>) => {
  const { title, options, selectedOption, onSelectChange, ...toggleButtonGroupProps } = props;

  const onSelectedChange = (e: React.MouseEvent<HTMLElement>, value: T | T[]) => {
    console.log({ value });
    if (!value) {
      return;
    }
    onSelectChange && onSelectChange(value);
  };

  const isMultipleSelection = Array.isArray(selectedOption);

  return (
    <Stack direction="column" spacing={1} textAlign="left">
      <Typography variant="h4">{title}</Typography>
      <ToggleButtonGroup
        value={selectedOption}
        onChange={onSelectedChange}
        aria-label={title}
        exclusive={!isMultipleSelection}
        {...toggleButtonGroupProps}
      >
        {options.map((option: T) => (
          <ToggleButton key={option} value={option}>
            {option}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
};

export default PromptConfigButtonGroup;
