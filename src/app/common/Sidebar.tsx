import { Box, Divider, Stack } from '@mui/material';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { useTheme } from '@mui/material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ServicePaths, TPath } from './ServicePaths';

const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const navigateTo = (page: string) => {
    navigate(page);
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={2}
      sx={{ p: 1.5, backgroundColor: theme.palette.background.paper }}
    >
      <LogoDevIcon fontSize="large" />
      <Divider sx={{ width: '100%' }} />
      <Stack direction="column" spacing={3} height="80%" sx={{ color: theme.palette.common.black }}>
        {Object.values(ServicePaths.paths).map((path: TPath) => {
          return (
            <IconButton
              key={path.root}
              aria-label={path.root}
              onClick={() => navigateTo(path.root)}
            >
              {path.icon}
            </IconButton>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
