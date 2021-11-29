import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    borderRadius: 15,
    margin: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
  },
}));