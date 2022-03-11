import { createAction } from '@reduxjs/toolkit';

const theme = createAction('theme/getTheme', (payload) => ({
  payload,
}));

export { theme };
