import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#647687',
    width: `100%`,
    height:'160px',
    overflow: "hidden",
    padding: "2em 0",
  },
  copylight: {
    color: "#fff",
    fontSize: "1.5em",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container direction="column" style={{ margin: "1.2em 0" }}>
          <Typography className={classes.copylight}>
            Some info
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;