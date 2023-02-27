import { Typography } from '@mui/material';
import { CardContent } from '@mui/material';
import { Card } from '@mui/material';
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';

let values = {
  '2023-06-23': 1,
  '2023-06-26': 2,
  '2023-06-27': 3,
  '2023-06-28': 4,
  '2023-06-29': 4,
};

const Landing = () => {
  const theme = useTheme();

  const panelColors = [...Object.values(theme.palette.gitHubColors.colorRanges)];

  return (
    <Stack direction="column" spacing={2} justifyContent="center" alignItems="start">
      <Typography variant="h3">Welcome Emma</Typography>
      <Stack direction="row" spacing={2}>
        <Card>
          <CardContent>
            <Typography variant="h4">Total Drawings</Typography>
            <Typography variant="h3">231</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Stack direction="column">
              <Typography variant="h4">Day Streak</Typography>
              <Typography variant="h3">
                <WhatshotIcon fontSize="large" color="error" />
                80
              </Typography>
            </Stack>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h4">Points</Typography>
            <Typography variant="h3">1032</Typography>
          </CardContent>
        </Card>
      </Stack>
      <Card
        sx={{
          width: '1200px',
          height: '400px',
        }}
      >
        <CardContent sx={{ width: '100%', height: '100%' }}>
          <Stack direction="row" justifyContent="center" alignItems="center"></Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Landing;
