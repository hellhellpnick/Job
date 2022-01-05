import { Suspense, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Switch, BrowserRouter } from 'react-router-dom';
import { MainNav } from './components/MainNav/';
import themeLight from './theme/themeLight';
import themeDark from './theme/themeDark';
import { Router } from './Router';

const App = () => {
  const [themeMode, setThemeMode] = useState(false);

  const switchStateTheme = () => {
    setThemeMode(!themeMode);
  };

  return (
    <ThemeProvider theme={themeMode ? themeLight : themeDark}>
      <BrowserRouter>
        <div className="App">
          <Suspense fallback={<>sa</>}>
            <MainNav statusTheme={themeMode} func={switchStateTheme} />
            <Switch>
              <Router />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
