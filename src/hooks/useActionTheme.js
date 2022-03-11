import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { theme } from './../redux/theme/themeAction';

const useActionTheme = () => {
  const dispatch = useDispatch();
  const getTheme = useSelector((state) => state.theme.isTheme);

  const changeTheme = useCallback(() => {
    dispatch(theme(!getTheme));
  }, [dispatch, getTheme]);

  return { changeTheme, getTheme };
};

export default useActionTheme;
