import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from 'theme/theme';
import { Route, Routes } from 'react-router-dom';
import { ServicePaths } from 'app/common/ServicePaths';
import { Provider } from 'react-redux';
import store from 'app/redux/store';
import Layout from 'app/common/Layout';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              {/* Home Routes */}
              <Route
                path={ServicePaths.paths.home.root}
                element={ServicePaths.paths.home.element}
              />

              {/* Prompt Routes */}
              <Route
                path={ServicePaths.paths.prompt.root}
                element={ServicePaths.paths.prompt.element}
              />
              <Route
                path={ServicePaths.paths.prompt.children.quickStart.root}
                element={ServicePaths.paths.prompt.children.quickStart.element}
              />
              <Route
                path={ServicePaths.paths.prompt.children.normal.root}
                element={ServicePaths.paths.prompt.children.normal.element}
              />
              <Route
                path={ServicePaths.paths.prompt.children.normal.children.start.root}
                element={ServicePaths.paths.prompt.children.normal.children.start.element}
              />
              <Route
                path={ServicePaths.paths.prompt.children.timed.root}
                element={ServicePaths.paths.prompt.children.timed.element}
              />
              <Route
                path={ServicePaths.paths.prompt.children.story.root}
                element={ServicePaths.paths.prompt.children.story.element}
              />

              {/* Goal Routes */}
              <Route
                path={ServicePaths.paths.goals.root}
                element={ServicePaths.paths.goals.element}
              />

              {/* Gallery Routes */}
              <Route
                path={ServicePaths.paths.gallery.root}
                element={ServicePaths.paths.gallery.element}
              />

              {/* Community Routes */}
              <Route
                path={ServicePaths.paths.community.root}
                element={ServicePaths.paths.community.element}
              />

              {/* Settings Routes */}
              <Route
                path={ServicePaths.paths.settings.root}
                element={ServicePaths.paths.settings.element}
              />
            </Routes>
          </Layout>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
