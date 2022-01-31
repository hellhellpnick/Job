import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottom: `1px solid ${theme.palette.border.main}`,
  },

  wrapperCallMeUser: {
    width: '100%',
  },

  titleAward: {
    ...theme.typography.h2,
    fontSize: 16,
    color: theme.palette.text.main,
    fontWeight: 600,
    marginBottom: 10,
  },

  wrapperCallMeInfo: {
    paddingBottom: 25,
    width: '100%',

    '@media screen and (min-width: 600px)': {
      paddingRight: 50,
      width: '50%',
    },

    '@media screen and (min-width: 1024px)': {
      width: '25%',
      paddingRight: 0,
    },
  },

  textAward: {
    ...theme.typography.text,
    fontSize: 14,
    color: theme.palette.text.primary,
  },

  wrapperNameUser: {
    paddingBottom: 25,
    paddingTop: 50,
    marginBottom: 25,

    '@media screen and (min-width: 600px)': {
      paddingBottom: 0,
      marginBottom: 0,
    },
  },

  titleFirstName: {
    fontSize: '36px',
    color: theme.palette.text.main,
    lineHeight: '1.5',
  },

  titleLastName: {
    position: 'relative',
    top: -30,
    fontSize: '70px',
    color: theme.palette.text.second,
    lineHeight: '1.5',
  },

  wrapperSocial: {
    position: 'relative',
    top: '-70px',
    listStyle: 'none',
    display: 'flex',

    '@media screen and (min-width: 600px)': {
      top: 0,
    },
  },

  socialBtn: {
    cursor: 'pointer',
    marginRight: '6px',
    width: '33px',
    height: '33px',
    backgroundColor: theme.palette.iconBack.main,
    border: `1px solid ${theme.palette.iconBack.main}`,
  },

  socialLink: {
    display: 'block',
    textAlign: 'center',
    width: '33px',
    height: '33px',
    fontSize: '.8rem !important',
    lineHeight: '2.7 !important',
    borderRadius: '2px',
    textDecoration: 'none',
  },

  socialIcon: {
    color: '#c6c6c6',
    fontSize: '1.5em',
    lineHeight: '0.75em',
    verticalAlign: '-15%',
  },

  wrapperShortInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export { useStyles };
