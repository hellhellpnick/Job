import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { theme } from './themeAction';

const isTheme = createReducer(false, {
  [theme.type]: (_, { payload }) => payload,
});

export default combineReducers({
  isTheme,
});
