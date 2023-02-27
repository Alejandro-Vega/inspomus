import { Typography } from '@mui/material';
import { ButtonProps } from '@mui/material';
import { Stack, Button } from '@mui/material';
import { ServicePaths, TPath } from 'app/common/ServicePaths';
import { useNavigate } from 'react-router-dom';

interface IPromptOptionProps extends ButtonProps {
  label?: string;
}

const PromptOption = (props: IPromptOptionProps) => {
  const { label, ...buttonProps } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ height: '100px', flex: '1 1 40%', m: 2 }}
      {...buttonProps}
    >
      {label}
    </Button>
  );
};

const Prompt = () => {
  const navigate = useNavigate();

  const navigateTo = (page: string) => {
    navigate(page);
  };

  return (
    <Stack direction="column" justifyContent="space-around" height="100%">
      <Typography variant="h2">Prompts</Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {Object.values(ServicePaths.paths.prompt.children).map(
          (paths: TPath) => (
            <PromptOption
              key={paths.label}
              label={paths.label}
              onClick={() => navigateTo(paths.root)}
            />
          )
        )}
      </Stack>
    </Stack>
  );
};

export default Prompt;
