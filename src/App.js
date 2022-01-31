import { Suspense, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import themeLight from './theme/themeLight';
import themeDark from './theme/themeDark';
import { Router } from './Router';
import { ModalWindow } from './components/ModalWindow';

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
            <Router statusTheme={themeMode} func={switchStateTheme} />

            <ModalWindow
              data-aos="flip-up"
              title="Appeal to the user"
              text="The website is under construction. Please don't complain much"
            />
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
