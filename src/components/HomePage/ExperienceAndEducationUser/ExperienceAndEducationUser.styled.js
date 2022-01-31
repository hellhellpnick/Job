import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperExperience: {
    position: 'relative',
    paddingLeft: 25,
    borderLeft: `2px solid ${theme.palette.border.main}`,
  },

  titleData: {
    ...theme.typography.h2,
    fontSize: 11,
    opacity: 0.7,
    color: theme.palette.text.main,
    fontWeight: 500,
    marginBottom: 8,
  },

  titleWork: {
    ...theme.typography.h3,
    fontSize: 20,
    color: theme.palette.text.primary,
    fontWeight: 700,
    marginBottom: 8,
    textTransform: 'uppercase',
  },

  titlePosition: {
    ...theme.typography.text,
    fontSize: 14,
    color: theme.palette.text.primary,
    marginBottom: 8,
  },

  textInfo: {
    ...theme.typography.text,
    fontSize: 14,
    lineHeight: '1.5',
    color: theme.palette.text.primary,
    paddingBottom: 20,
  },

  wrapperDot: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: -11,
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: theme.palette.background.main,
  },

  dot: {
    width: 10,
    height: 10,
    backgroundColor: theme.palette.progress.main,
    borderRadius: '50%',
  },
}));

export { useStyles };
