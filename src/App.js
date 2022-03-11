import { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import themeLight from './theme/themeLight';
import themeDark from './theme/themeDark';
import LoaderView from './views/PageLoader/LoaderView';
import useActionTheme from './hooks/useActionTheme';

const App = () => {
  const { getTheme } = useActionTheme();

  return (
    <ThemeProvider theme={getTheme ? themeLight : themeDark}>
      <BrowserRouter>
        <div className="App">
          <Suspense fallback={<LoaderView />}>
            <Router />
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
