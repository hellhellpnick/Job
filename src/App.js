import { Suspense, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import themeLight from './theme/themeLight';
import themeDark from './theme/themeDark';
import { Router } from './Router';
import LoaderView from './views/PageLoader/LoaderView';

const App = () => {
  const [themeMode, setThemeMode] = useState(false);

  const switchStateTheme = () => {
    setThemeMode(!themeMode);
  };

  return (
    <ThemeProvider theme={themeMode ? themeLight : themeDark}>
      <BrowserRouter>
        <div className="App">
          <Suspense fallback={<LoaderView />}>
            <Router statusTheme={themeMode} func={switchStateTheme} />
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
