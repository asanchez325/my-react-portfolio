import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
root: {
    display: 'flex',
    overflow: 'hidden',
    marginTop: theme.spacing(4),
  },
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  image: {
    height: 100,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: '50%',
  },
  image2: {
    height: 200,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

}));
