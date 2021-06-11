import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';
  
  import { makeStyles } from '@material-ui/core/styles';
  
  import Card from '@material-ui/core/Card';
  import CardContent from '@material-ui/core/CardContent';
  import TextField from '@material-ui/core/TextField';
  import Button from '@material-ui/core/Button';
  import {Box} from '@material-ui/core/Box';
  
  const useStyles = makeStyles({
    root: {
      position:'relative',
      minWidth: 275,
      maxWidth:315,
      backgroundAttachment: 'fixed',
      backgroundColor:'#eee',
    },
  
  });
  
    export default function CardForm() {
      const classes = useStyles();
    
      return (
        <Card className={classes.root}>
          <CardContent>
            <form className="login-form" noValidate autoComplete="off">
              <h2>Ingresar</h2>
                <Box m={2}>
                    <TextField required id="outlined-basic" label="Usuario" variant="outlined" />
                </Box>
                <Box m={2}>
                <TextField
                  required
                  id="outlined-password-input"
                  label="Contraseña"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                />
                </Box>
                <Box m={2}>
                    <Link to="/galeria">
                        <div>
                            <Button size="large" variant="contained" color="primary">
                            Ingresar
                            </Button>
                        </div>
                    </Link>
                </Box>
            </form>
          </CardContent>
        </Card>
      );
    }