import { Avatar, Container, Stack, Typography } from '@mui/material';

const Header = () => {
  return (
    <Container maxWidth="xl">
      <Stack direction="column" justifyContent="center" alignItems="end" height={80}>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          <Avatar />
          <Typography variant="body1" color="black">
            Emma Gold
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Header;
