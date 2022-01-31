import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperExpertise: {
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
  },

  listExpertise: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',

    '@media screen and (min-width: 600px)': {
      alignItems: 'stretch',
    },
  },

  expertiseItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',

    '@media screen and (min-width: 600px)': {
      paddingRight: 50,
      width: '50%',
    },
  },

  expertiseTitle: {
    position: 'relative',
    top: '-4px',
    fontSize: 20,
    textTransform: 'uppercase',
    lineHeight: '1.5',
    color: theme.palette.text.second,
    marginRight: 18,
  },

  expertiseBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 20,
  },

  expertiseSubtitle: {
    ...theme.typography.h2,
    color: theme.palette.text.main,
    fontSize: 20,
    textTransform: 'uppercase',
    marginBottom: '8px',
  },

  expertiseText: {
    color: theme.palette.text.primary,
    fontSize: 16,
    lineHeight: '1.7',
  },
}));

export { useStyles };
