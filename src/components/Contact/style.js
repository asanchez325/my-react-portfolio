import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      justifyContent: 'center',
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
      display: 'flex',
    },
    cardWrapper: {
      zIndex: 1,
    },
    card: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.palette.warning.main,
      padding: theme.spacing(8, 3),
    },
    cardContent: {
      maxWidth: 400,
    },
    textField: {
      width: '100%',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },

}));