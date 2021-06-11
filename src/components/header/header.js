//components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconLogo from '../iconLogo/iconLogo.js'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

  export default function Header() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor:'#647687'}}>
          <Toolbar variant="dense">
            <IconLogo/>
            <Typography variant="h5" color="inherit">
              Academo
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }