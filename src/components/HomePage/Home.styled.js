import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperHeader: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',
    zIndex: 1,

    '@media screen and (min-width: 1024px)': {
      minWidth: '30%',
      backgroundColor: theme.palette.backgroundArticle.main,
      paddingTop: '20%',
      paddingBottom: '20%',
      height: '100%',
      padding: '0 25px',
    },
  },

  wrapperImg: {
    display: 'flex',
    maxWidth: '350px',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '50%',
    minHeight: '100%',
  },

  headerImg: {
    maxWidth: '100%',
    minHeight: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center',
    margin: '0 auto',
  },

  wrapperSkills: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',

    '@media screen and (min-width: 600px)': {
      alignItems: 'stretch',
    },
  },

  wrapperExperienceUser: {
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',
  },

  wrapperProfileUser: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',

    '@media screen and (min-width: 600px)': {
      alignItems: 'stretch',
    },
  },

  wrapperAwards: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',

    '@media screen and (min-width: 600px)': {
      alignItems: 'stretch',
    },
  },


  wrapperSection: {
    display: 'flex',
    flexDirection: 'column',

    '@media screen and (min-width: 1024px)': {
      flexDirection: 'row',
      borderTop: `2px solid ${theme.palette.border.main}`,
    },
  },

  wrapperFlex: {
    display: 'flex',
    flexDirection: 'column',

    '@media screen and (min-width: 1024px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
}));

export { useStyles };