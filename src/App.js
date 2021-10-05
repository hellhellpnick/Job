import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import themeLight from './theme/themeLight';
import themeDark from './theme/themeDark';
import ViewHomePage from './views/ViewHomePage';

const App = () => {
  const [themeMode, setThemeMode] = React.useState(false);

  const switchStateTheme = () => {
    setThemeMode(!themeMode);
  };

  return (
    <ThemeProvider theme={themeMode ? themeLight : themeDark}>
      <ViewHomePage statusTheme={themeMode} func={switchStateTheme} />
    </ThemeProvider>
  );
};

export default App;
