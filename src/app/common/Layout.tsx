import { Container, Divider, Stack } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';

interface ILayoutProps {
  children: JSX.Element | Array<JSX.Element>;
}

const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <Stack direction="row" height="100%" minHeight="100vh">
      <Sidebar />
      <Stack direction="column" width="100%">
        <Header />
        <Divider sx={{ width: '100%' }} />
        <Container maxWidth="xl" sx={{ width: '100%' }}>
          {children}
        </Container>
      </Stack>
    </Stack>
  );
};

export default Layout;
