import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import themeLight from './theme/themeLight';
import themeDark from './theme/themeDark';
import ViewsHomePage from './views/ViewsHomePage';

const App = () => {
  const [themeMode, setThemeMode] = React.useState(true);

  const switchStateTheme = () => {
    setThemeMode(!themeMode);
  };

  return (
    <ThemeProvider theme={themeMode ? themeLight : themeDark}>
      <ViewsHomePage statusTheme={themeMode} func={switchStateTheme} />
    </ThemeProvider>
  );
};

export default App;
