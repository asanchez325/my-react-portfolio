import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  Button: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  

}));